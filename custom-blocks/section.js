import sectionBgColors from '../inc/sectionBgColors';
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
    waveBorderColorName: {
      type: "string",
      default: "cream"
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

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { colorName, waveBorderColorName, wavyTopBorder, wavyBottomBorder } = attributes;

  const currentColorValue = sectionBgColors.filter(color => {
    return color.name == colorName
  })[0].color;

  function handleColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(sectionBgColors, colorCode);
    setAttributes({ colorName: name });
  }

  const currentWaveBorderColorValue = sectionBgColors.filter(color => {
    return color.name == waveBorderColorName
  })[0].color;

  function handleWaveBorderColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(sectionBgColors, colorCode);
    setAttributes({ waveBorderColorName: name });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Section Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette 
              clearable={false}
              colors={sectionBgColors}
              disableCustomColors={true}
              onChange={handleColorChange}
              value={currentColorValue} />
          </PanelRow>
        </PanelBody>
        <PanelBody title="Wavy Border" initialOpen={true}>
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
        <PanelBody title='Wave Border Color'>
          <ColorPalette 
            clearable={false}
            colors={sectionBgColors}
            disableCustomColors={true}
            onChange={handleWaveBorderColorChange}
            value={currentWaveBorderColorValue} />
        </PanelBody>
      </InspectorControls>
      <section className={`ro--section ro--section-bg--${waveBorderColorName}`}>
        {
          wavyTopBorder &&
          <div className={`ro--section__wavy-top ro--section-bg--${colorName}`}></div>
        }
          <div className={`ro--section__content ro--section-bg--${colorName}`}>
            <InnerBlocks />
          </div>
        {
          wavyBottomBorder &&
          <div className={`ro--section__wavy-bottom ro--section-bg--${colorName}`}></div>
        }
      </section>
    </>

  );
}

function SaveComponent(props) {
  const { attributes } = props;
  const { colorName, waveBorderColorName, wavyTopBorder, wavyBottomBorder } = attributes;
  return (
    <section className={`ro--section ro--section-bg--${waveBorderColorName}`}>
        {
          wavyTopBorder &&
          <div className={`ro--section__wavy-top ro--section-bg--${colorName}`}></div>
        }
          <div className={`ro--section__content ro--section-bg--${colorName}`}>
            <InnerBlocks.Content />
          </div>
        {
          wavyBottomBorder &&
          <div className={`ro--section__wavy-bottom ro--section-bg--${colorName}`}></div>
        }
      </section>
  );
}