<?php
class VintageTheme {
  //protected $api;
  public function __construct(){

    add_action( 'wp_enqueue_scripts', array(&$this,'scripts_styles'));
    add_action( 'noscript_fallbacks', array(&$this,'fallback_styles'));
    add_action('after_setup_theme', array(&$this, 'theme_support'));
    add_action( 'wp_footer', array(&$this, 'print_inline_scripts'));

  }

  public function theme_support() {
    add_theme_support( 'html5' );
    add_theme_support( 'post-thumbnails', array('post', 'multimedia'));
  }

  public function fallback_styles() {

      wp_enqueue_style('fallback-icons', get_template_directory_uri() .'/img/style/icons.fallback.css');
      add_filter( 'style_loader_tag', function($tag, $handle){
        if ( $handle == 'fallback-icons' ) {
          $tag = "<noscript>$tag</noscript>\n";
        }

        return $tag;
      }, 10, 2);
      echo "<!-- hi -->";
  }
  public function scripts_styles() {
    /**
    * fonts
    */
    wp_enqueue_style('vintage-fonts', 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700,300,100');

    /**
    * styles
    */
    wp_enqueue_style('vintage-style', get_template_directory_uri() . '/css/app.css');

    /**
    * scripts
    */
    //deps
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-1.6.min.js');
    wp_enqueue_script('angular', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js', array('jquery'));
    wp_enqueue_script('angular-animate',  'https://code.angularjs.org/1.4.5/angular-animate.js', array('angular'));
    wp_enqueue_script('angular-route',     get_template_directory_uri() . '/js/vendor/angular/angular-route.js',array('angular'));
    wp_enqueue_script('angular-resource',  'https://code.angularjs.org/1.4.5/angular-resource.min.js',array('angular'));
    wp_enqueue_script('angular-ui-router', get_template_directory_uri() . '/js/vendor/angular/angular-ui-router.js',array('angular'));
    wp_enqueue_script('angular-cookies',   get_template_directory_uri() . '/js/vendor/angular/angular-cookies.min.js',array('angular'));
    // grunticon script loads appropriate stylesheet depending on support
    wp_enqueue_script('grunticon-loader', get_template_directory_uri() . '/img/style/grunticon.loader.js');



    // app
    wp_enqueue_script('vintage-app', get_template_directory_uri() . '/js/app.js',array('angular','angular-route','angular-ui-router','angular-resource','angular-animate'));

    // controllers
    wp_enqueue_script('controllers-main', get_template_directory_uri() . '/js/controllers/controllersMain.js',array('angular','vintage-app'));
    wp_enqueue_script('controller-home', get_template_directory_uri() . '/js/controllers/HomeController.js',array('angular','vintage-app','controllers-main'));
    wp_enqueue_script('controller-page', get_template_directory_uri() . '/js/controllers/PageController.js',array('angular','vintage-app','controllers-main'));
    wp_enqueue_script('controller-contact', get_template_directory_uri() .'/js/controllers/ContactController.js', array('angular','vintage-app','controllers-main'));
    wp_enqueue_script('controller-not-found', get_template_directory_uri() . '/js/controllers/notFoundController.js',array('angular','vintage-app','controllers-main'));

    // services
    wp_enqueue_script('services-main', get_template_directory_uri() . '/js/services/servicesMain.js',array('angular','vintage-app'));

    // directives
    wp_enqueue_script('directives-main', get_template_directory_uri() . '/js/directives/directivesMain.js',array('angular','vintage-app'));
    wp_enqueue_script('directive-tabs', get_template_directory_uri() . '/js/directives/tabs.js',array('angular','vintage-app','directives-main'));

    wp_enqueue_script('directive-select', get_template_directory_uri() . '/js/directives/select.js',array('angular','vintage-app','directives-main'));

    wp_localize_script(
      'vintage-app',
      'appDirectories',
      array(
        'views' => trailingslashit( get_template_directory_uri() ) . 'views/',
        'media' => trailingslashit( get_template_directory_uri() ) . 'media/',
        'img' => trailingslashit( get_template_directory_uri() ) . 'img/',
        'js' => trailingslashit( get_template_directory_uri() ) . 'js/'
      )
    );
  }

  public function print_inline_scripts() {
    //output the script that activates grunticon
    $iconPath = get_template_directory_uri() .'/img/style/';
    echo '<script> grunticon(["'.$iconPath.'icons.data.svg.css", "'.$iconPath.'icons.data.png.css", "'.$iconPath.'icons.fallback.css"]); </script>';
  }



}
$vintageTheme = new VintageTheme();
