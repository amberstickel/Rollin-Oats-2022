wp.blocks.registerBlockType("rollinoats/events", {
  title: "Events",
  edit: () => {
    // element, props, child content
    return wp.element.createElement('div', {className: "our-placeholder-block"}, "This is a placeholder");
  },
  save: () => {return null}
})
