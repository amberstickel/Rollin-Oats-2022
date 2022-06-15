<?php 

// Add custom files
function rollinOatsFiles() {
	wp_enqueue_style( ' add_custom_fonts ', ' https://use.typekit.net/hjd3efb.css', false );
  wp_enqueue_style('rollin_oats_styles', get_theme_file_uri('/assets/css/site.css'));
}

add_action('wp_enqueue_scripts', 'rollinOatsFiles');



// Add styles to editor
function setupRollinOatsTheme() {
	add_theme_support('editor-styles');
	add_editor_style(array('https://use.typekit.net/hjd3efb.css', 'assets/css/site.css'));
}

add_action( 'after_setup_theme', 'setupRollinOatsTheme' );



// Reusable class for creating custom blocks
class jsxBlock {
	function __construct($name) {
		$this->name = $name;
		add_action('init', [$this, 'on_init']);
	}

	function on_init() {
		wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
  register_block_type("rollinoats/{$this->name}", array(
    'editor_script' => $this->name
  ));
	}
}

new jsxBlock('banner');
new jsxBlock('bannerheadline');
new jsxBlock('genericbutton');
new jsxBlock('logo');