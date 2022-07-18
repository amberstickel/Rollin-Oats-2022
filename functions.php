<?php 

/*	--------------------------------------------------------------------------------
	Enqueue Rollin Oats Styles & Scripts
--------------------------------------------------------------------------------*/

	function ro_files() {
    wp_enqueue_style( ' add_custom_fonts ', 'https://use.typekit.net/hjd3efb.css', false );
    wp_enqueue_style( 'glide-styles', 		get_template_directory_uri() . '/node_modules/@glidejs/glide/dist/css/glide.core.min.css' );
		wp_enqueue_style( 'ro-styles-shared', 		get_template_directory_uri() . '/assets/css/shared.css' );
		wp_enqueue_style( 'ro-styles-blocks', 		get_template_directory_uri() . '/assets/css/blocks.css' );
    wp_enqueue_script('ro-custom-js', get_template_directory_uri() . '/build/index.js', array('jquery'), '1.0', true );

	}
	add_action( 'wp_enqueue_scripts', 'ro_files' );


/*	--------------------------------------------------------------------------------
	Set Up Theme
--------------------------------------------------------------------------------*/
function ro_theme() {
	add_theme_support('editor-styles');
	add_editor_style(array('https://use.typekit.net/hjd3efb.css', 'assets/css/shared.css', 'assets/css/blocks.css', 'assets/css/editor.css'));
  wp_enqueue_script('ro-custom-js', get_template_directory_uri() . '/build/index.js', array('jquery'), '1.0', true );

}

add_action( 'after_setup_theme', 'ro_theme' );


/*	--------------------------------------------------------------------------------
	Custom Blocks
--------------------------------------------------------------------------------*/
class jsxBlock {
  function __construct($name, $renderCallback = null, $imgData = null) {
    $this->name = $name;
    $this->renderCallback = $renderCallback;
    $this->imgData = $imgData;
    add_action('init', [$this, 'onInit']);
  }

  function ourRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/custom-blocks/{$this->name}.php");
    return ob_get_clean();
  }

  function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
    // this needs to come after register script
    if ($this->imgData) {
      wp_localize_script($this->name, $this->name, $this->imgData);
    }
    
    $ourArgs = array(
      'editor_script' => $this->name
    );

    if ($this->renderCallback) {
      $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
    }

    register_block_type("rollinoats/{$this->name}", $ourArgs);
  }
}

new jsxBlock('communityeventimage', true, ['fallbackimage' => get_theme_file_uri( 'assets/images/header.png' )]);
new jsxBlock('contentcontainer');
new jsxBlock('illustration');
new jsxBlock('marqueebanner');
new jsxBlock('pagehero', true, ['fallbackimage' => get_theme_file_uri( 'assets/images/header.png' )]);
new jsxBlock('herosubhead');
new jsxBlock('logo');
new jsxBlock('section');
new jsxBlock('slideshow', true);
new jsxBlock('slide', true);
