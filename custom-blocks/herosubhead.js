import { RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType("rollinoats/herosubhead", {
  title: "Rollin Oats Hero Subhead",
  attributes:{
    text: {
      type: "string"
    },
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  const handleTextChange = (newValue) => {
    props.setAttributes({text: newValue});
  }
  
  return (
    <>
      <RichText allowedFormats={["core/bold", "core/italic"]} tagName="span" className="page-hero__subhead" value={props.attributes.text}  onChange={handleTextChange} />
    </>
  );
}

function SaveComponent(props) {
  return (
    <RichText.Content value={props.attributes.text} tagName="span" className="page-hero__subhead"  />
  );
}