import sectionBgColors from '../inc/sectionBgColors';
import { registerBlockType } from '@wordpress/blocks';
import { ColorPalette, getColorObjectByColorValue, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow } from '@wordpress/components'

registerBlockType("rollinoats/pagehero", {
  title: "Rollin Oats Page Hero",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    bgColorName: {
      type: "string",
      default: "light-green"
    },
    imgURL: { 
      type: "string",
      default: pagehero.fallbackimage
    },
    imgID: { type: "number" },
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { bgColorName } = attributes;

  const onFileSelect = (upload) => {
    props.setAttributes({
      imgID: upload.id,
      imgURL: upload.url
    });
  }

  const currentBgColorValue = sectionBgColors.filter(color => {
    return color.name == bgColorName
  })[0].color;

  function handleBgColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(sectionBgColors, colorCode);
    setAttributes({ bgColorName: name });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload 
                onSelect={onFileSelect} 
                value={props.attributes.imgID} 
                render={({open}) => {
                  return <Button onClick={open}>Choose Image</Button>
                }} 
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
        <PanelBody title='Background Color'>
          <ColorPalette 
            clearable={false}
            colors={sectionBgColors}
            disableCustomColors={true}
            onChange={handleBgColorChange}
            value={currentBgColorValue} />
        </PanelBody>
      </InspectorControls>
      <section className={`page-hero ro--section-bg--${bgColorName}`}>
        <div className="page-hero__mask">
          <div className="page-hero__img" style={{backgroundImage: `-webkit-linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${props.attributes.imgURL}')`}}
          ></div>
          <div className="page-hero__content">
            <InnerBlocks allowedBlocks={["core/post-title", "rollinoats/herosubhead"]} />
          </div>
        </div>
      </section>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}