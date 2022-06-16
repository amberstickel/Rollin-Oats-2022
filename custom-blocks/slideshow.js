
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

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

function EditComponent(props) {
  return (
    <div className="slideshow">
      <InnerBlocks allowedBlocks={["rollinoats/slide"]}/>
    </div>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}