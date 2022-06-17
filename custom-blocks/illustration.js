
import illustrationOptions from '../inc/illustrationOptions';
import { registerBlockType } from '@wordpress/blocks';
import {  InspectorControls } from '@wordpress/block-editor';
import {  PanelBody, PanelRow, ComboboxControl, SelectControl, __experimentalInputControl as InputControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
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
    horizontalPlacement: {
      type: 'string',
      default: 'left'
    },
    positionCSS: {
      type: "object"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

const horizontalPlacementOptions = [
  {
    value: 'left',
    label: 'Left'
  },
  {
    value: 'right',
    label: 'Right'
  }
];

function EditComponent(props) {

  const { attributes, setAttributes } = props;
  const { illustrationValue, positionCSS, horizontalPlacement } = attributes;
  
  const handleIllustrationSelection = (selection) => {
    setAttributes({
      illustrationValue: selection
    });
  }

  const handlePositionCSSChange = (nextValue, positionName) => {
    let newPositionCSS = {};
    if(positionName === 'top') {
      newPositionCSS = {
        ...positionCSS,
        top: nextValue
      };
    } else if (positionName === 'bottom') {
      newPositionCSS = {
        ...positionCSS,
        bottom: nextValue
      };
    } else if (positionName === 'left') {
      newPositionCSS = {
        ...positionCSS,
        left: nextValue
      };
    } else if (positionName === 'right') {
      newPositionCSS = {
        ...positionCSS,
        right: nextValue
      };
    }

    setAttributes({
      positionCSS: newPositionCSS
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
        <PanelBody title='Illustration Placement'>
          <PanelRow>
            <SelectControl 
              label="Horizontal Placement"
              options={ horizontalPlacementOptions }
              value={horizontalPlacement}
              onChange={(nextValue) => {
                setAttributes({
                  horizontalPlacement: nextValue
                })
              }}
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title="Illustration Positioning">
          <PanelRow>
            <InputControl
              label="Top Position"
              size="small"
              value={ positionCSS !== undefined ? positionCSS.top : '' }
              onChange={(nextValue) => handlePositionCSSChange(nextValue, 'top')}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Bottom Position"
              size="small"
              value={ positionCSS !== undefined ? positionCSS.bottom: '' }
              onChange={(nextValue) => handlePositionCSSChange(nextValue, 'bottom')}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Left Position"
              size="small"
              value={ positionCSS !== undefined ? positionCSS.left : '' }
              onChange={(nextValue) => handlePositionCSSChange(nextValue, 'left')}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Right Position"
              size="small"
              value={ positionCSS !== undefined ? positionCSS.right : '' }
              onChange={(nextValue) => handlePositionCSSChange(nextValue, 'right')}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

        <div className={`illustration illustration--${horizontalPlacement}`} style={positionCSS}>
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


function SaveComponent(props) {
  const { attributes } = props;
  const { illustrationValue, positionCSS, horizontalPlacement } = attributes;

  return (
    <div className={`illustration illustration--${horizontalPlacement}`} style={positionCSS}>
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
    
  );
}