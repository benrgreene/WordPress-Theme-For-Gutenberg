<?php
// load our theme scripts
add_action('wp_enqueue_scripts', 'enqueue_theme_scripts');

// on admin edit pages, load the theme block scripts
add_action('admin_enqueue_scripts', function() {
  $screen = get_current_screen();
  if ($screen->is_block_editor == true) {
    enqueue_theme_blocks(true);
  }
});


function enqueue_theme_blocks($force_load = false) {
  // If we have an archive block then load the collections script
  if (has_block('brg/archive-block') || $force_load) {
    wp_enqueue_script('brg-theme-collection-script', get_template_directory_uri() . '/assets/collection.build.js', array(), false, true);
  }

  // check if this is the podcast feed page
  if (has_block('brg/podcast-feed') || $force_load) {
    wp_enqueue_script('brg-theme-podcastfeed-script', get_template_directory_uri() . '/assets/podcastfeed.build.js', array(), false, true);
  }
}

function enqueue_theme_scripts() {
  enqueue_theme_blocks();

  // on the homepage, add our home script
  if (is_front_page()) {
    wp_enqueue_script('brg-theme-home-script', get_template_directory_uri() . '/assets/home.build.js', array(), false, true);
  }

  // post page
  if (is_single()) {
    wp_enqueue_script('brg-theme-home-script', get_template_directory_uri() . '/assets/post.build.js', array(), false, true);
  }  
}