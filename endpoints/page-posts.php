<?php

add_action('rest_api_init', function () {
  register_rest_route(
    'brg', 
    '/posts/(?P<type>\w+)/(?P<perPage>\d+)/(?P<page>\d+)', 
    array(
      'methods' => 'GET',
      'callback' => 'brg_get_page_posts',
    )
  );
});

function brg_get_page_posts(WP_REST_Request $request) {
  $type    = $request['type'];
  $perPage = $request['perPage'];
  $page    = $request['page'];

  $posts = query_posts(
    array(
      'post_type'   => $type,
      'posts_per_page' => $perPage,
      'offset'      => ($page * $perPage),
    )
  );
  $number_posts = wp_count_posts();

  $template_file = locate_template('templates/excerpts/post--json.php');
  $template_file = apply_filters('brg/post-excerpt-template',  $template_file);

  $to_return = array(
    "numberPosts" => $number_posts->publish
  );

  ob_start();
  echo '[';
  foreach ($posts as $key => $post) {
    reset($posts);

    setup_postdata($post);
    include $template_file;
    
    end($posts);
    if ($key !== key($posts)) {
      echo ',';
    }
  }
  echo ']';
  wp_reset_postdata();

  $to_return['posts'] = json_decode(ob_get_clean());

  return json_encode($to_return);
};