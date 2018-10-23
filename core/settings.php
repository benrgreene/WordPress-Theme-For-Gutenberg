<?php

class BRG_Theme_Settings_Admin_Interface_Controller {

    const SETTINGS_PAGE_SLUG  = 'brg_theme_settings_page';
    const SETTINGS_GROUP      = 'brg_theme_group';
    const SETTINGS_NONCE_NAME = 'brg_theme_nonce_name';

    private $plugin_settings = array(
        'primary_theme_color', 'header_theme_color', 'footer_background_color', 'footer_foreground_color'
    );

    public function __construct() {
        $post_types = apply_filters( 'brg/archived_post_types', array() );
        foreach( $post_types as $post_type ) {
            $this->plugin_settings[] = 'brg_settings_display_' . $post_type;
        }

        add_action( 'admin_menu', array( $this, 'add_admin_menu') );
        add_action( 'admin_init', array( $this, 'register_plugin_settings') );
    }

    public function add_admin_menu() {
        $min_level = $this->get_min_level();
        add_menu_page( 'Theme Settings', 'Theme Settings', $min_level, self::SETTINGS_PAGE_SLUG, '', 'dashicons-analytics' );

        // Register submenu for plugin settings - default page for the plugin
        add_submenu_page( self::SETTINGS_PAGE_SLUG, 'Theme Settings', 'Settings', $min_level, self::SETTINGS_PAGE_SLUG, array( $this, 'display_settings_page' ) );

        // TODO: move this to a filter for options updated. 
        $this->update_theme_styles();
    }

    function get_min_level() {
        return apply_filters( 'brg/theme_options/minimum_user_level', 'edit_posts' );
    }

    public function register_plugin_settings() {
        foreach ( $this->plugin_settings as $setting ) {
            register_setting( self::SETTINGS_GROUP, $setting );
        }
    }

    public function display_settings_page() {
        get_template_part( 'templates/admin/settings' );
    }

    public function update_theme_styles() {
        // Get the base theme stylesheet 
        $base_contents = file_get_contents( get_template_directory() . '/core/settings/theme-styles.css' );

        // Make all replacements with theme values
        foreach( $this->plugin_settings as $setting ) {
            $base_contents = str_replace( $setting, get_option( $setting ), 
            $base_contents );    
        }

        // Do some minification
        $base_contents = str_replace( array( "\n", '  '), '', $base_contents );

        // Write to the theme styles file
        $theme_styles_file = fopen( get_template_directory() . '/assets/styles/theme-styles.css', 'w' );
        fwrite( $theme_styles_file, $base_contents );
        fclose( $theme_styles_file );
    }
}
