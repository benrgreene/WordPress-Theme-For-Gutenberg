<?php

add_action(
  'enqueue_block_editor_assets', 
  function() {
    wp_enqueue_script(
      'brg-gutenberg-blocks',
      get_stylesheet_directory_uri() . '/assets/gutenblocks.build.js'
    );
  }
);