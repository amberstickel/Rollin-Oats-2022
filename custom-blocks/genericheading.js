import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType("rollinoats/genericheading", {
  title: "Generic Heading",
  attributes:{
    text: {type: "string"},
    size: {type: "string", default: "large"}
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  const handleTextChange = (newValue) => {
    props.setAttributes({text: newValue});
  }
  const handleToolbarButton = (selectedSize) => {
    props.setAttributes({size: selectedSize})
  }
  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton isPressed={props.attributes.size === 'large'} onClick={() => handleToolbarButton('large')}>Large</ToolbarButton>
          <ToolbarButton isPressed={props.attributes.size === 'medium'} onClick={() => handleToolbarButton('medium')}>Medium</ToolbarButton>
          <ToolbarButton isPressed={props.attributes.size === 'small'} onClick={() => handleToolbarButton('small')}>Small</ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText allowedFormats={["core/bold", "core/italic"]} tagName="h1" className={`headline headline--${props.attributes.size}`} value={props.attributes.text} onChange={handleTextChange} />
    </>
  );
}

function SaveComponent(props) {
  return (
    <RichText.Content value={props.attributes.text} className={`headline headline--${props.attributes.size}`} tagName="h1" />
  );
}