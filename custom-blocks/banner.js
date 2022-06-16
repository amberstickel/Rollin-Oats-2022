
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow } from '@wordpress/components'

registerBlockType("rollinoats/banner", {
  title: "Banner",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    imgURL: { 
      type: "string",
      default: "banner.fallbackimage"
    },
    imgID: { type: "number" },
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent(props) {
  const onFileSelect = (upload) => {
    props.setAttributes({
      imgID: upload.id,
      imgURL: upload.url
    });
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
      </InspectorControls>
      <div className="banner">
        <div className="banner__img" style={{backgroundImage: `-webkit-linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${props.attributes.imgURL}')`}}
        ></div>
        <InnerBlocks allowedBlocks={["rollinoats/bannerheadline"]} />
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}