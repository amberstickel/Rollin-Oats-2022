import { RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType("rollinoats/heroheadline", {
  title: "Rollin Oats Hero Headline",
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
      <RichText allowedFormats={["core/bold", "core/italic"]} tagName="h1" className="page-hero__headline" value={props.attributes.text}  onChange={handleTextChange} />
    </>
  );
}

function SaveComponent(props) {
  return (
    <RichText.Content value={props.attributes.text} tagName="h1" className="page-hero__headline"  />
  );
}