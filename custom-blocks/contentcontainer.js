import { registerBlockType } from '@wordpress/blocks';
import {  InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {  PanelBody, SelectControl } from '@wordpress/components';

registerBlockType("rollinoats/contentcontainer", {
  title: "Rollin Oats Content Container",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    contentWidth: {
      type: "string",
      default: "wide"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});


function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { contentWidth } = attributes;


const contentWidthOptions = [
  {
    value: 'regular',
    label: 'Regular (840px)'
  },
  {
    value: 'wide',
    label: 'Wide (1200px)'
  },
  {
    value: 'full-width',
    label: 'Full Width'
  }
];

  return (
    <>
    <InspectorControls>
      <PanelBody title="Content Width" initialOpen={true}>
        <SelectControl 
            label="Content Width"
            options={ contentWidthOptions }
            value={contentWidth}
            onChange={(nextValue) => {
              setAttributes({
                contentWidth: nextValue
              })
            }}
          />
      </PanelBody>
    </InspectorControls>

      <div className={`ro--content-container ro--content-container--${contentWidth}`}>
        <InnerBlocks />
      </div>
    </>

  );
}

function SaveComponent(props) {
  const { attributes } = props;
  const { contentWidth } = attributes;
  return (
    <div className={`ro--content-container ro--content-container--${contentWidth}`}>
      <InnerBlocks.Content />
    </div>
  );
}