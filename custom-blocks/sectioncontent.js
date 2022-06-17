import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';


registerBlockType("rollinoats/sectioncontent", {
  title: "Rollin Oats Section Content",
  edit: EditComponent,
  save: SaveComponent,
});


function EditComponent(props) {
  return (
    <>
      <div className={`ro--section__content`}>
        <InnerBlocks />
      </div>
    </>

  );
}

function SaveComponent(props) {
  const { attributes } = props;
  return (
    <div className={`ro--section__content`}>
      <InnerBlocks.Content />
    </div>
  );
}