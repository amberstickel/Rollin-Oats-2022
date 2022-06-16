
import { registerBlockType } from '@wordpress/blocks';
import {  InspectorControls } from '@wordpress/block-editor';
import { ComboboxControl, PanelBody } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

registerBlockType("rollinoats/illustration", {
  title: "Rollin Oats Illustration",
  attributes: {
    illustrationValue: {
      type: 'string',
    },
    illustrationLabel: {
      type: 'string',
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});



function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { illustrationValue, illustrationLabel } = attributes;

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

  useEffect(() => {
    findIllustrationLabel();
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
        The selected illustration label is {illustrationLabel}.
        The selected illustration value is {illustrationValue}.
      </div>
    </>
  );
}



function SaveComponent() {
  return (
    <div className='illustration'>
      This is an illustration placeholder
    </div>
  );
}