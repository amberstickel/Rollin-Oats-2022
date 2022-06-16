<?php
  if (!$attributes['imgURL']) {
    $attributes['imgURL'] = get_theme_file_uri('assets/illustrations/garlic-bulb.svg');
  }
?>

<img src="<?php echo $attributes['imgURL'] ?>" />


