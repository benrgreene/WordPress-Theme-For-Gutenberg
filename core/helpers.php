<?php

// the 
function brg_the_title() {
  wp_title(''); 
  if( wp_title( '', false ) ) { 
    echo ' :'; 
  }
  bloginfo('name');
}

// load any extra theme content in the header
function load_theme_info() {
  $font_names = apply_filters( 'brg/fonts', array () );
  foreach( $font_names as $file ) {
      echo '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=<?php echo $file; ?>"/>';
  }
}

// echo out the title of the page
function brg_the_page_title() {
  echo sprintf( '<h1 class="page-title">%s</h1>', get_the_title() );
}

// Check if there is a sidebar set for the page/post
function have_sidebar() {
  $post_id = get_the_ID();
  $data    = get_post_meta( $post_id, '_cs_replacements', true );
  return !empty( $data );
}