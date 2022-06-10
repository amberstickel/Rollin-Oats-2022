<?php 

// Add setup for custom Rollin Oats theme
function rollinOatsThemeSetup() {
	$styled_blocks = ['banner'];
	foreach ( $styled_blocks as $block_name ) {
		$args = array(
			'handle' => "$block_name",
			'src'    => get_theme_file_uri( "assets/css/blocks/$block_name.css" ),
			$args['path'] = get_theme_file_path( "assets/css/blocks/$block_name.css" ),
		);
		wp_enqueue_block_style( "rollinoats/$block_name", $args );
    wp_enqueue_style('site-styles', get_theme_file_uri( "assets/css/site.css" ));
	}
}
add_action( 'after_setup_theme', 'rollinOatsThemeSetup' );



// Add Banner Block
function bannerBlock() {
  wp_register_script('bannerBlockScript', get_stylesheet_directory_uri() . '/build/banner.js', array('wp-blocks', 'wp-editor'));
  register_block_type("rollinoats/banner", array(
    'editor_script' => 'bannerBlockScript'
  ));
}

add_action('init', 'bannerBlock');