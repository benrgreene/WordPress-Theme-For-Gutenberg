<?php

// Want to set the theme fonts to use
add_filter( 'brg/fonts', 'brg_set_site_fonts' );
function brg_set_site_fonts( $fonts ) {
  $fonts = array_merge( $fonts, array (
    'Open+Sans', 'Source+Sans+Pro'
  ));
  return $fonts;
}

// Set our body classes
add_filter( 'brg/body_class', 'brg_set_body_classes' );
function brg_set_body_classes( $classes ) {
  if( is_user_logged_in() ) {
    $classes .= 'is-logged-in';
  }
  
  return $classes;
}

// Add our admin scripts to the page
add_action( 'admin_enqueue_scripts', 'brg_add_editor_scripts', 5 );
function brg_add_editor_scripts() {
  wp_enqueue_script( 'brg-editor-script', get_template_directory_uri() . '/assets/admin.build.js', array( 'wp-blocks', 'wp-editor' ) );  
}

// Need to add the theme scripts/styles
add_action( 'wp_enqueue_scripts', 'brg_add_theme_scripts' );
function brg_add_theme_scripts() {
  // Styling
  wp_enqueue_style( 'brg-theme-styles', get_template_directory_uri() . '/assets/styles/index.css' );
  wp_enqueue_style( 'brg-user-defined-styles', get_template_directory_uri() . '/assets/styles/theme-styles.css' );
  // Scripts
  wp_enqueue_script( 'brg-theme-script', get_template_directory_uri() . '/assets/index.build.js', array(), false, true );  
}