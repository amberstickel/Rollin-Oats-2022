wp.blocks.registerBlockType("rollinoats/banner", {
  title: "Banner",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent() {
  return (
    <div className="banner">
      <h1>Hello, World!</h1>
    </div>
  );
}

function SaveComponent() {
  return (
    <div className="banner">
      <p>This is from the block</p>
    </div>
  );
}