<?php

add_action('wp_enqueue_scripts', function() {
  // If we have an archive block then load the collections script
  if (has_block('brg/archive-block')) {
    wp_enqueue_script('brg-theme-collection-script', get_template_directory_uri() . '/assets/collection.build.js', array(), false, true);
  }

  // on the homepage, add our home script
  if (is_front_page()) {
    wp_enqueue_script('brg-theme-home-script', get_template_directory_uri() . '/assets/home.build.js', array(), false, true);
  }

  // post page
  if (is_single()) {
    wp_enqueue_script('brg-theme-home-script', get_template_directory_uri() . '/assets/post.build.js', array(), false, true);
  }  
});