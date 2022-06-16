<?php
  if (!$attributes['imgURL']) {
    $attributes['imgURL'] = get_theme_file_uri('assets/images/header.png');
  }
?>

<div class="banner">
  <div class="banner__img" style="background-image: -webkit-linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('<?php echo $attributes['imgURL'] ?>')"></div>
    <?php echo $content; ?>
</div>

