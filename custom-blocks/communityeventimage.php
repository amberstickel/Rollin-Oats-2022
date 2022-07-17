<?php
  if (!$attributes['imgURL']) {
    $attributes['imgURL'] = get_theme_file_uri('assets/images/header.png');
  }
?>

<div class="community-event" style="background-image: -webkit-linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('<?php echo $attributes['imgURL'] ?>')">
  <div class="community-event__date">
    <span class="community-event__month">Jun</span>
    <span class="community-event__day">18</span>
  </div>
</div>

