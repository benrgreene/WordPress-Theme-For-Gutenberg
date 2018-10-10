<?php

add_action( 'enqueue_block_editor_assets', 'brg_sidebar_block_register_assets' );
function brg_sidebar_block_register_assets() {
  wp_enqueue_script(
    'brg-gutenberg-sidebar-block',
    get_stylesheet_directory_uri() . '/blocks/build/sidebar.build.js'
  );
}

// Add frontend styles to the page
add_action( 'init', 'brg_add_frontend_sidebar_block_style' );
function brg_add_frontend_sidebar_block_style() {
  if( is_admin() ) {
    return;
  }

  wp_enqueue_style(
    'brg-gutenberg-sidebar-block-frontend',
    get_stylesheet_directory_uri() . '/blocks/sidebar/frontend.css'
  ); 
}