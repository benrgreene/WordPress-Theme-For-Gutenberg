<?php

get_template_part( 'templates/site-partials/header' );
do_action( 'brg/before-page-content' );

if( is_page() ) {
  get_template_part( 'templates/fulls/page' );
}
else if( is_single() ) {
  get_template_part( 'templates/fulls/post' );
}

do_action( 'brg/after-page-content' );
get_template_part( 'templates/site-partials/footer' );