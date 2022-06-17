
import illustrationOptions from '../inc/illustrationOptions';
import { horizontalPositionOptions, verticalPositionOptions } from '../inc/illustrationPositions';
import { registerBlockType } from '@wordpress/blocks';
import {  InspectorControls } from '@wordpress/block-editor';
import { ComboboxControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
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
    illustrationLabel: {
      type: 'string',
      default: 'Garlic Bulb'
    },
    horizontalPosition: {
      type: 'string',
      default: 'left'
    },
    verticalPosition: {
      type: 'string',
      default: 'top'
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { illustrationValue, horizontalPosition, verticalPosition } = attributes;

  const handleIllustrationSelection = (selection) => {
    setAttributes({
      illustrationValue: selection
    });
  }

  const handleHorizontalPositionChange = (selection) => {
    setAttributes({
      horizontalPosition: selection
    });
  }

  const handleVerticalPositionChange = (selection) => {
    setAttributes({
      verticalPosition: selection
    });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Illustration Image" initialOpen={true}>
        <ComboboxControl
            label="Size"
            value={ illustrationValue }
            onChange={ handleIllustrationSelection }
            options={ illustrationOptions }
        />
        </PanelBody>
        <PanelBody title="Illustration Positions">
          <PanelRow>
            <SelectControl 
              label="Horizontal Position"
              value={horizontalPosition}
              options={horizontalPositionOptions}
              onChange={handleHorizontalPositionChange}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl 
              label="Vertical Position"
              value={verticalPosition}
              options={verticalPositionOptions}
              onChange={handleVerticalPositionChange}
            />
          </PanelRow>        
        </PanelBody>
      </InspectorControls>


      <div className={`illustration illustration--${verticalPosition} illustration--${horizontalPosition}`}>
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