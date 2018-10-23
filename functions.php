<?php

include 'core/helpers.php';
include 'core/filters.php';
include 'core/widgets.php';
include 'core/menu-walker.php';
include 'core/shortcodes.php';
include 'core/settings.php';
//include 'core/endpoints.php';

// Add our gutenberg blocks
include 'blocks/sidebar/register.php';

// Initiate the settings
new BRG_Theme_Settings_Admin_Interface_Controller();