<section class='page-content'>
<?php if( have_posts() ): ?>
  <?php while( have_posts() ): ?>
    <?php the_post(); ?>
    <?php brg_the_page_title(); ?>
    <?php the_content(); ?>
  <?php endwhile; ?>
<?php endif; ?>
</section>