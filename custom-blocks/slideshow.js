
import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType("rollinoats/slideshow", {
  title: "Rollin Oats Slideshow",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent() {
  return (
    <div className="ro--slideshow" style={{
      border: "2px dotted #8F529A",
      padding: "1rem"
    }}>
      <InnerBlocks 
        allowedBlocks={["rollinoats/slide"]} />
    </div>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content/>;
}