<?php

add_filter( 'brg/fonts', 'brg_set_site_fonts' );
function brg_set_site_fonts( $fonts ) {
  $fonts = array_merge( $fonts, array (
    'Baloo+Thambi', 'Ubuntu', 'Orbitron'
  ));
  return $fonts;
}

add_filter( 'brg/body_class', 'brg_set_body_classes' );
function brg_set_body_classes( $classes ) {
  return $classes;
}

add_filter( 'the_content', function( $content ) {
  return $content;
});