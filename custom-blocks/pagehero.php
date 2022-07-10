<?php
  if (!$attributes['imgURL']) {
    $attributes['imgURL'] = get_theme_file_uri('assets/images/header.png');
  }

  if (!$attributes['bgColorName']) {
    $attributes['bgColorName'] = 'light-green';
  }
?>

<section class="page-hero ro--section-bg--<?php echo $attributes['bgColorName'] ?>">
  <div class="page-hero__mask">  
    <div class="page-hero__img" style="background-image: -webkit-linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('<?php echo $attributes['imgURL'] ?>')"></div>
    <div class="page-hero__content">
      <?php echo $content; ?>
</div>
  </div>
</section>

