<?php

get_template_part( 'templates/site-partials/header' );
do_action( 'brg/before-page-content' );
if( have_posts() ) {
  while( have_posts() ) { 
    the_post();
    if( is_page() ) {
      get_template_part( 'templates/fulls/page' );
    }
    else if( is_single() ) {
      get_template_part( 'templates/fulls/post' );
    }
    else if( is_archive() ) {
      get_template_part( 'templates/fulls/archive' );
    }
  }
}
do_action( 'brg/after-page-content' );
get_template_part( 'templates/site-partials/footer' );