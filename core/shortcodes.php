<?php

// Display the page's sidebar
add_shortcode( 'display_sidebar', 'brg_the_sidebar' );
function brg_the_sidebar( $atts ) {
  // check if there is a sidebar to display
  if( !have_sidebar() ) {
    return;
  }

  $atts = shortcode_atts( array(
    'classes' => 'sidebar'
  ), $atts );
  ob_start();
  echo sprintf( '<aside class="%s">', $atts['classes'] );
  dynamic_sidebar( 'brg_sidebar' );
  echo '</aside>';
  return ob_get_clean();
}