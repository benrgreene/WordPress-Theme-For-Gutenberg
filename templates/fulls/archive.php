<section class='page-content page-content__archive'>
  <?php if( have_posts() ): ?>
    <?php while( have_posts() ): ?>
      <?php the_post(); ?>
      <?php get_template_part( 'templates/partials/post' ); ?>
    <?php endwhile; ?>
  <?php endif; ?>
</section>