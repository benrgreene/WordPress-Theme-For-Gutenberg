<?php

add_action( 'enqueue_block_editor_assets', 'brg_sidebar_block_register_assets' );
function brg_sidebar_block_register_assets() {
  wp_enqueue_script(
    'brg-gutenberg-sidebar-block',
    get_stylesheet_directory_uri() . '/assets/sidebar.build.js'
  );
}