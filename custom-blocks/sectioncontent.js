import sectionBgColors from '../inc/sectionBgColors';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ColorPalette } from "@wordpress/components";
import { InspectorControls, getColorObjectByColorValue } from "@wordpress/block-editor";


registerBlockType("rollinoats/sectioncontent", {
  title: "Rollin Oats Section Content",

  attributes: {
    bgColorName: {
      type: "string",
      default: "light-purple"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});


function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { bgColorName } = attributes;

  const currentColorValue = sectionBgColors.filter(color => {
    return color.name == bgColorName
  })[0].color;

  function handleColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(sectionBgColors, colorCode);
    setAttributes({ bgColorName: name });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Section Background Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette 
              clearable={false}
              colors={sectionBgColors}
              disableCustomColors={true}
              onChange={handleColorChange}
              value={currentColorValue} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className={`ro--section__content ro--section-bg--${bgColorName}`}>
        <InnerBlocks />
      </div>
    </>

  );
}

function SaveComponent(props) {
  const { attributes } = props;
  const { bgColorName } = attributes;
  return (
    <div className={`ro--section__content ro--section-bg--${bgColorName}`}>
      <InnerBlocks />
    </div>
  );
}