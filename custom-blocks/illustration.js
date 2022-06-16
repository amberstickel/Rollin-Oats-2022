
import { registerBlockType } from '@wordpress/blocks';
import {  InspectorControls } from '@wordpress/block-editor';
import { ComboboxControl, PanelBody } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

registerBlockType("rollinoats/illustration", {
  title: "Rollin Oats Illustration",
  attributes: {
    illustrationValue: {
      type: 'string',
      default: 'garlic-bulb'
    },
    illustrationLabel: {
      type: 'string',
      default: 'Garlic Bulb'
    },
    imgURL: {
      type: 'string',
      default: illustration.fallbackimage
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});



function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { illustrationValue, illustrationLabel, imgURL } = attributes;

  const illustrationOptions = [
    {
      value: 'bok-choy',
      label: 'Bok Choy',
    },
    {
      value: 'fish',
      label: 'Fish',
    },
    {
      value: 'garlic-bulb',
      label: 'Garlic Bulb',
    },
    {
      value: 'grape',
      label: 'Grape',
    },
    {
      value: 'mushrooms',
      label: 'Mushrooms',
    },
    {
      value: 'salad-bowl',
      label: 'Salad',
    },
    {
      value: 'spinach',
      label: 'Spinach',
    },
];

  const findIllustrationLabel = () => {
    const selectedIllustrations = illustrationOptions.filter(option => option.value === illustrationValue);

    if(selectedIllustrations.length > 0) {
      const illustration = selectedIllustrations[0];
      const values = Object.values(illustration);
      const label = values[1];
      setAttributes({
        illustrationLabel: label
      })
    }
  }

  const handleIllustrationSelection = (selection) => {
    setAttributes({
      illustrationValue: selection
    });
  }

  const updateImgURL = () => {
    const imgDirectory = imgURL.split("/").slice(0, -1).join("/");
    const imgPath = `/${illustrationValue}.svg`;
    const newPath = imgDirectory.concat(imgPath);
    // console.log('new image path', newPath);
    setAttributes({
      imgURL: newPath
    });
  }

  useEffect(() => {
    if(illustrationValue) {
      findIllustrationLabel();
      updateImgURL();
    }
  }, [illustrationValue]);

  return (
    <>
      <InspectorControls>
        <PanelBody title="Illustration" initialOpen={true}>
        <ComboboxControl
            label="Size"
            value={ illustrationValue }
            onChange={ handleIllustrationSelection }
            options={ illustrationOptions }
        />
        </PanelBody>
      </InspectorControls>


      <div className="illustration">
        {imgURL &&
          <img src={imgURL} alt={illustrationLabel} />
        }
      </div>
    </>
  );
}



function SaveComponent() {
  return (
    <div className='illustration'></div>
  );
}