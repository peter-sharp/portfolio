<?php
$basePath = '../../../..';

// get wp functions
try {
  require_once($basePath.'/wp-blog-header.php');
}
catch (Exception $error) {
  throw new Exception( 'problem loading wp-blog-header: '.$error);
}

add_filter('posts_where', 'title_filter_posts_where', 10, 2);

function title_filter_posts_where($where, &$wp_query )
{
  global $wpdb;
  if ($title_filter = $wp_query->get('title_filter'))
  {
    $where .= ' AND ' . $wpdb->posts . '.post_title LIKE \'' . esc_sql( $wpdb->esc_like( $title_filter )) . '%\'';
  }
  return $where;
}

function transfer_media_to_wp ($path,$dryRun = true)
{
  #read media json file
  $jsonFile = file_get_contents($path );
  $data = json_decode($jsonFile, true);

  // use wp database to get attachments
  global $wpdb;

  // reset output file
  $_file = fopen('testPost.txt', 'w');
  fwrite($_file,'');
  fclose($_file);

  // post order
  foreach ($data as $item) {

      $post = array();
      $meta = array();
      $galleryMeta = array();
      foreach( $item as $property => $value){
        echo "property: ".print_r($value, true)."....\n";
        switch($property){
          case 'age':
            $post['menu_order'] = $value;
            break;
          case 'id':
            $meta['old_name'] = $value;
            break;
          case 'title':
            $post['post_title'] = $value;
            echo 'processing: '.$value."\n";
            break;
          case 'caption':
            $post['post_content'] = $value;
            break;
          case 'tags':
            $post['tags_input'] = $value;
            break;
          case 'mediaPaths':
              $origImage = explode('/', $value['original'] )[1];
              // get attachement
              $attachment_id = $wpdb->get_col( $wpdb->prepare( "SELECT ID FROM {$wpdb->prefix}posts WHERE guid RLIKE %s;", $origImage) )[0];
            break;
          default:
            echo "discarded $property $value\n";
        }

        // set category
        $categories = array();
        if(in_array( 'drawing', $item['tags'] ))
        {
          $categories[] = (int)get_term_by('slug','drawing', 'category')->term_id;
        }
        if (in_array( 'illustration', $item['tags'])) {
          $categories[] = (int)get_term_by('slug','illustration', 'category')->term_id;
        }
        if (in_array( '3D', $item['tags'])) {
          $categories[] = (int)get_term_by('slug','3D', 'category')->term_id;
        }
        if (in_array( 'animation', $item['tags'])) {
          $categories[] = (int)get_term_by('slug','animation', 'category')->term_id;
        }
        if (in_array( 'game', $item['tags'])) {
          $categories[] = (int)get_term_by('slug','game-design', 'category')->term_id;
        }
        if (in_array( 'web', $item['tags'])) {
          $categories[] = (int)get_term_by('slug','web-design', 'category')->term_id;
        }

        // defaults
        $post['post_status'] = 'publish';

        $class_taxonomy = array('gallery class');
        $post['post_category'] = $categories;
        $post['post_type'] = 'multimedia';

      } // /foreach




      $WPitem = array(
        'post' => $post,
        'meta' => $meta,
        'terms' => $class_taxonomy,
        'attachment_id' => $attachment_id
      );


      if($dryRun)
      {
        $file = fopen('testPost.txt', 'a');

        $dataPretty = json_encode($WPitem,JSON_PRETTY_PRINT);
        fwrite($file, $dataPretty);
        fclose($file);
      }
      else {

        $matching = get_page_by_title( $WPitem['post']['post_title'], 'OBJECT', 'multimedia');

        if( empty($matching) ) {
          $post_id = wp_insert_post( $WPitem['post'] );
        }
        else {
          $post_id = $matching->ID;
          echo "updating post: $post_id\n";
          if(gettype($WPitem['post']) !== 'array'){
            die(var_dump($WPitem['post']));
          }
          // add id to post for update
          $WPitem['post']['ID'] = $post_id;
          $status = wp_update_post( $WPitem['post'], true);
          echo $status;
        }

        foreach ($WPitem['meta'] as $meta_key => $meta_value){
          add_post_meta($post_id, $meta_key, $meta_value);
        }

        // set class taxonomy for post
        wp_set_post_terms($post_id, $WPitem['terms'], 'class');

        // add attachement to post
        $thumbnail = update_post_meta( $post_id, '_thumbnail_id', (int)$WPitem['attachment_id'] );
        if(!$thumbnail) {
          //throw new Exception( "\n error: failed to attach thumbnail!\n");
        }
        else {
          echo "\nSuccessfully added thumbnail: $attachment_id\n";
        }
      }
    } // foreach
}

transfer_media_to_wp('./media.json', false);
