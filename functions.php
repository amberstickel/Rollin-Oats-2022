<?php 

// Add custom files
function rollinOatsFiles() {
	wp_enqueue_style( ' add_custom_fonts ', 'https://use.typekit.net/hjd3efb.css', false );
  wp_enqueue_style('rollin_oats_styles', get_theme_file_uri('/assets/css/site.css'));
}

add_action('wp_enqueue_scripts', 'rollinOatsFiles');



// Add styles to editor
function setupRollinOatsTheme() {
	add_theme_support('editor-styles');
	add_editor_style(array('https://use.typekit.net/hjd3efb.css', 'assets/css/site.css'));
}

add_action( 'after_setup_theme', 'setupRollinOatsTheme' );


class placeholderBlock {
  function __construct($name) {
    $this->name = $name;
    add_action('init', [$this, 'onInit']);
  }

  function ourRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/custom-blocks/{$this->name}.php");
    return ob_get_clean();
  }

  function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/custom-blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));
    
    $ourArgs = array(
      'editor_script' => $this->name,
      'render_callback' => [$this, 'ourRenderCallback']
    );

    register_block_type("rollinoats/{$this->name}", $ourArgs);
  }
}

new placeholderBlock("events");

// resusable method for creating new block types
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

new jsxBlock('section');
new jsxBlock('contentcontainer');
new jsxBlock('illustration');
new jsxBlock('marqueebanner');
new jsxBlock('pagehero', true, ['fallbackimage' => get_theme_file_uri( 'assets/images/header.png' )]);
new jsxBlock('herosubhead');
new jsxBlock('logo');
new jsxBlock('slideshow', true);
new jsxBlock('slide', true, ['fallbackimage' => get_theme_file_uri( 'assets/images/header.png' )]);