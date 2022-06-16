import ourColors from "../inc/ourColors"
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
      default: "green"
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
})

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { wavyTopBorder, wavyBottomBorder } = attributes;

  const currentColorValue = ourColors.filter(color => {
    return color.name == attributes.colorName
  })[0].color;

  function handleColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(ourColors, colorCode);
    setAttributes({ colorName: name });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette 
              clearable={false}
              colors={ourColors}
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
      <section className="ro--section">
        <InnerBlocks />
      </section>
    </>

  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}