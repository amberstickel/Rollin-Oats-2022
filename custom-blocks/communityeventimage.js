
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow,  __experimentalInputControl as InputControl } from '@wordpress/components'

registerBlockType("rollinoats/communityeventimage", {
  title: "Rollin' Oats Community Event Image",
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    imgURL: { 
      type: "string",
      default: communityeventimage.fallbackimage
    },
    imgID: { type: "number" },
    eventMonth: {
      type: "string",
      default: "Jun"
    },
    eventDay: {
      type: "string",
      default: "18"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent(props) {
  const onFileSelect = (upload) => {
    console.log(upload);
    props.setAttributes({
      imgID: upload.id,
      imgURL: upload.url
    });
  }

const handleMonthChange = (newValue) => {
  props.setAttributes({eventMonth: newValue});
}

const handleDayChange = (newValue) => {
  props.setAttributes({eventDay: newValue});
}

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background Image" initialOpen={true}>
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
        <PanelBody title="Event Date" initialOpen={true}>
          <PanelRow>
            <InputControl 
              label="Event Month"
              onChange={handleMonthChange}
              value={props.attributes.eventMonth} 
            />
          </PanelRow>
          <PanelRow>
            <InputControl 
              label="Event Day"
              onChange={handleDayChange}
              value={props.attributes.eventDay} 
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="community-event" style={{backgroundImage: `-webkit-linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('${props.attributes.imgURL}')`}}>
        <div className="community-event__date">
          <span className="community-event__month">{props.attributes.eventMonth}</span>
          <span className="community-event__day">{props.attributes.eventDay}</span>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}