<?php

//Archive.
//File format: dd-mm-yy-slug.md

function get_posts( $args=null ) {

  $defaults = array(
    "limit"       => 5,
    "start"       => 0
  );

  foreach ( $defaults as $key => $value ) {
    $defaults[$key] = $value;
  }

  //Grab all the posts.
  $file_array = scandir( "posts/" );
  $posts_array = array();
  $i = 0;
  foreach( $file_array as $file ) {
    if ( substr( $file, strlen($file) -3, 3 ) == ".md" ) {
      $date_array = explode("-", $file);
      if ( count($date_array) == 4 ) {
        $posts_array[$i]['file'] = $file;
        $posts_array[$i]['date'] =  $date_array[2] . $date_array[1] . $date_array[0];
        $posts_array[$i]['slug'] = $date_array[3];
        $i++;
      }
    }
  }

  //Sort the posts by newest first.
  usort( $posts_array, "array_sort_callback" );

  return $posts_array;

}


function array_sort_callback( $a, $b ) {

  if ($a['date'] == $b['date']) {
    return 0;
  }
  return ($a['date'] < $b['date']) ? 1 : -1;

}
