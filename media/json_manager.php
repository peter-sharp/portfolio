<?php
class JsonManager {
    protected $mediaUrlBase = 'content/';
    protected $sizeFolder = 'sizes';
    protected $sizeExtensions = array(
        'small' => '-small',
        'medium' => '-medium',
        'large' => '-large'
        );
    function __construct(){
        $jsonFIle = $this->getJsonFile('media_old.json');
        $updatedJson = $this->updateMediaUrl($jsonFIle);
        $this->outputJson('media.json', $updatedJson);

    }

    /**
     * returns the contents of a json file at the given location
     **/
    protected function getJsonFile($file){
        $fileStr = file_get_contents($file);
        return json_decode($fileStr, true);
    }

    /**
     * replaces a given old key in a given array with a given new key
     * and returns the result
     * */
    protected function replaceKey($array, $oldKey, $newKey){
        $array[$newKey] = $array[$oldKey];
        unset($array[$oldKey]);
        return $array;
    }

    protected function updateMediaUrl($mediaArray){
        $updatedMediaArray = array();
        foreach($mediaArray as $media){
            if( isset($media['mediaURL']) ){
                $media = $this->replaceKey($media, 'mediaURL', 'mediaPaths');
            }
            $media['mediaPaths'] = $this->setMediaPathObj($media['mediaPaths']);
            var_dump($media['mediaURL']);
            var_dump($media['mediaPaths']);
            $updatedMediaArray[] = $media; // add the edited media
        }
        return $updatedMediaArray;
    }

    protected function setMediaPathObj($mediaPath){

        $mediaName = substr ( $mediaPath , 0 , -4 );
        $mediaExt = substr ( $mediaPath , -4 );
        unset($mediaPath);
        $mediaPaths['original'] = $this->mediaUrlBase . $mediaName.$mediaExt;
        $mediaPaths['large'] = $this->mediaUrlBase . $this->sizeFolder . '/' . $mediaName . $this->sizeExtensions['large']  . $mediaExt;
        $mediaPaths['medium'] = $this->mediaUrlBase . $this->sizeFolder . '/' . $mediaName . $this->sizeExtensions['medium']  . $mediaExt;
        $mediaPaths['small'] = $this->mediaUrlBase . $this->sizeFolder . '/' . $mediaName . $this->sizeExtensions['small']  . $mediaExt;
        return $mediaPaths;
    }

    /**
     * outputs the given json to a given filename
     **/
    protected function outputJson($name, $json){
        $file = fopen($name, 'w');
        fwrite($file, json_encode($json, JSON_PRETTY_PRINT));
        fclose($file);
    }

}
$jsonManager = new JsonManager();
