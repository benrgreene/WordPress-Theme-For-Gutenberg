    </main>
    <footer class='site-footer'>
      <div class='l-contain footer-widgets'>
        <?php dynamic_sidebar( 'brg_footer_widgets' ); ?>
      </div>
    </footer>
    <?php get_template_part( 'templates/site-partials/theme-scripts' ); ?>
    <?php do_action('wp_footer'); ?>
  </body>
</html>