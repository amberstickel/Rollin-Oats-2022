
import illustrationOptions from '../inc/illustrationOptions';
import { registerBlockType } from '@wordpress/blocks';
import {  InspectorControls } from '@wordpress/block-editor';
import { ComboboxControl, PanelBody, PanelRow, __experimentalInputControl as InputControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import {
  BokChoySVG,
  FishSVG,
  GarlicSVG,
  GrapeSVG,
  MushroomSVG,
  SaladBowlSVG,
  SpinachSVG
} from '../illustrations';


registerBlockType("rollinoats/illustration", {
  title: "Rollin Oats Illustration",
  attributes: {
    illustrationValue: {
      type: 'string',
      default: 'garlic-bulb'
    },
    position: {
      type: "object",
      source: "attribute"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  const [ topPosition, setTopPosition ] = useState( '' );
  const [ bottomPosition, setBottomPosition ] = useState( '' );
  const [ leftPosition, setLeftPosition ] = useState( '' );
  const [ rightPosition, setRightPosition ] = useState( '' );

  const { attributes, setAttributes } = props;
  const { illustrationValue, position } = attributes;

  useEffect(() => {
    const newPosition = {
      top: topPosition,
      bottom: bottomPosition,
      left: leftPosition,
      right: rightPosition
    }
    setAttributes({
      position: newPosition
    });
  }, [topPosition, bottomPosition, leftPosition, rightPosition]);

  useEffect(() => {
    console.log('new position attribute', position);
  }, [position]);

  const handleIllustrationSelection = (selection) => {
    setAttributes({
      illustrationValue: selection
    });
  }
  

  return (
    <>
      <InspectorControls>
        <PanelBody title="Illustration Image" initialOpen={true}>
        <ComboboxControl
            label="Image Name"
            value={ illustrationValue }
            onChange={ handleIllustrationSelection }
            options={ illustrationOptions }
        />
        </PanelBody>
        <PanelBody title="Illustration Positions">
          <PanelRow>
            <InputControl
              label="Top Position"
              size="small"
              value={ topPosition }
              onChange={ (nextValue) => {
                nextValue ? setTopPosition(nextValue) : '' }}
            />
          </PanelRow>
          
          <PanelRow>
            <InputControl
              label="Bottom Position"
              size="small"
              value={ bottomPosition }
              onChange={ (nextValue) => {
                nextValue ? setBottomPosition(nextValue) : '' }}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Left Position"
              size="small"
              value={ leftPosition }
              onChange={ (nextValue) => {
                nextValue ? setLeftPosition(nextValue) : '' }}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Right Position"
              size="small"
              value={ rightPosition }
              onChange={ (nextValue) => {
                nextValue ? setRightPosition(nextValue) : '' }}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>


      <div className={`illustration`} style={position}>
        {illustrationValue === 'bok-choy' &&
          <BokChoySVG />
        }
        {illustrationValue === 'fish' &&
          <FishSVG />
        }
        {illustrationValue === 'garlic-bulb' &&
          <GarlicSVG />
        }
        {illustrationValue === 'grape' &&
          <GrapeSVG />
        }
        {illustrationValue === 'mushrooms' &&
          <MushroomSVG />
        }
        {illustrationValue === 'salad-bowl' &&
          <SaladBowlSVG />
        }
        {illustrationValue === 'spinach' &&
          <SpinachSVG />
        }
      </div>
    </>
  );
}


function SaveComponent() {
  return (
    <div className='illustration'>
      Insert SVG Here
    </div>
  );
}