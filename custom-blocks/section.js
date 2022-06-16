import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import {  ToggleControl, PanelBody, PanelRow, ColorPalette } from "@wordpress/components";
import { InspectorControls, getColorObjectByColorValue } from "@wordpress/block-editor"


registerBlockType("rollinoats/section", {
  title: "Rollin Oats Section",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    colorName: {
      type: "string",
      default: "light-green"
    },
    wavyTopBorder: {
      type: "boolean",
      default: false
    },
    wavyBottomBorder: {
      type: "boolean",
      default: false
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

const sectionColors = [
  { 
    name: "light-green", 
    color: "#C3DFA6" 
  },
  { 
    name: "light-purple", 
    color: "#DCCFDE" 
  },
  {
    name: "cream",
    color: "#F7F3EA"
  },
  {
    name: "white",
    color: "FFF"
  }
];

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { colorName, wavyTopBorder, wavyBottomBorder } = attributes;

  const currentColorValue = sectionColors.filter(color => {
    return color.name == colorName
  })[0].color;

  function handleColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(sectionColors, colorCode);
    setAttributes({ colorName: name });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette 
              clearable={false}
              colors={sectionColors}
              disableCustomColors={true}
              onChange={handleColorChange}
              value={currentColorValue} />
          </PanelRow>
        </PanelBody>
        <PanelBody title="Border Settings" initialOpen={true}>
          <PanelRow>
            <ToggleControl
              label="Wavy top border?"
              help={wavyTopBorder ? "Yes" : "No"}
              checked={wavyTopBorder}
              onChange={() => setAttributes({ wavyTopBorder: !wavyTopBorder })}
            />
				  </PanelRow>
          <PanelRow>
            <ToggleControl
              label="Wavy bottom border?"
              help={wavyBottomBorder ? "Yes" : "No"}
              checked={wavyBottomBorder}
              onChange={() => setAttributes({ wavyBottomBorder: !wavyBottomBorder })}
            />
				  </PanelRow>
        </PanelBody>
      </InspectorControls>
      <section className={`
        ro--section 
        ro--section--${colorName}
        ${wavyTopBorder ? 'ro--section--wavy-top' : null}
        ${wavyBottomBorder ? 'ro--section--wavy-bottom' : null}
      `}>
        <InnerBlocks />
      </section>
    </>

  );
}

function SaveComponent(props) {
  const { attributes } = props;
  const { colorName, wavyTopBorder, wavyBottomBorder } = attributes;
  return (
    <section className={`
      ro--section 
      ro--section--${colorName}
      ${wavyTopBorder ? 'ro--section--wavy-top' : null}
      ${wavyBottomBorder ? 'ro--section--wavy-bottom' : null}
    `}>
      <InnerBlocks.Content />
    </section>
  );
}