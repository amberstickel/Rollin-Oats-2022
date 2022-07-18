
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType("rollinoats/slide", {
  title: "Rollin' Oats Slide",
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
    <>
      <div className="ro--slideshow__slide" style={{
        border: "2px dotted #4A2664",
        marginBottom: "8px"
      }}>
        <InnerBlocks renderAppender={ InnerBlocks.ButtonBlockAppender } />
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content /> ;
}