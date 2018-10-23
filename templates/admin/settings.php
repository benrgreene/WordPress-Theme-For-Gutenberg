<div class="wrap">
  <h1>Theme Settings</h1>
  <hr/>

  <form method="POST" action="options.php" novalidate="novalidate">
    <?php settings_fields( 'brg_theme_group' ); ?>
    
    <h2>Theme Colors</h2>
    <table>
      <tr>
        <td>Primary Theme Color</td>
        <td><input name="primary_theme_color" id="primary_theme_color" value="<?php echo get_option('primary_theme_color'); ?>" /></td>
        <td>This will be the main color used as the header background color, the page title color, and link colors.</td>
      </tr>
      <tr>
        <td>Header Text Color</td>
        <td><input name="header_theme_color" id="header_theme_color" value="<?php echo get_option('header_theme_color'); ?>" /></td>
        <td>This will used for text and links in the header.</td>
      </tr>
      <tr>
        <td>Footer Background Color</td>
        <td><input name="footer_background_color" id="footer_background_color" value="<?php echo get_option('footer_background_color'); ?>" /></td>
        <td>The color used as the footer background color.</td>
      </tr>
      <tr>
        <td>Footer Foreground Color</td>
        <td><input name="footer_foreground_color" id="footer_foreground_color" value="<?php echo get_option('footer_foreground_color'); ?>" /></td>
        <td>The color used for text and links in the footer</td>
      </tr>
    </table>
    <?php submit_button(); ?>
  </form>
</div>
<style>
  td + td {
    padding-left: 25px;
  }
</style>