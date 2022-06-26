
import illustrationOptions from '../inc/illustrationOptions';
import illustrationColorOptions from '../inc/illustrationColors';
import { registerBlockType } from '@wordpress/blocks';
import {  InspectorControls, getColorObjectByColorValue } from '@wordpress/block-editor';
import {  PanelBody, PanelRow, ColorPalette, ComboboxControl, SelectControl, __experimentalInputControl as InputControl } from '@wordpress/components';
import {
  BokChoySVG,
  BreadSVG,
  CarrotSVG,
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
    illustrationColor: {
      type: "string",
      default: "green"
    },
    horizontalPlacement: {
      type: 'string',
      default: 'left'
    },
    customCSS: {
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
  const { illustrationValue, illustrationColor, customCSS, horizontalPlacement } = attributes;
  
  const handleIllustrationSelection = (selection) => {
    setAttributes({
      illustrationValue: selection
    });
  }

  const handleCustomCSSChange = (nextValue, propertyName) => {
    let newCustomCSS = {};
    if(propertyName === 'top') {
      newCustomCSS = {
        ...customCSS,
        top: nextValue
      };
    } else if (propertyName === 'bottom') {
      newCustomCSS = {
        ...customCSS,
        bottom: nextValue
      };
    } else if (propertyName === 'left') {
      newCustomCSS = {
        ...customCSS,
        left: nextValue
      };
    } else if (propertyName === 'right') {
      newCustomCSS = {
        ...customCSS,
        right: nextValue
      };
    }  else if (propertyName === 'opacity') {
      newCustomCSS = {
        ...customCSS,
        opacity: nextValue
      };
    }

    setAttributes({
      customCSS: newCustomCSS
    });
  }

  const currentColorValue = illustrationColorOptions.filter(color => {
    return color.name == illustrationColor
  })[0].color;

  function handleColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(illustrationColorOptions, colorCode);
    setAttributes({ illustrationColor: name });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Illustration Image" initialOpen={true}>
          <PanelRow>
            <ComboboxControl
              label="Image Name"
              value={ illustrationValue }
              onChange={ handleIllustrationSelection }
              options={ illustrationOptions }
            />
          </PanelRow>
        
          <PanelRow>
            <InputControl
              label="Image Opacity"
              size="small"
              value={ customCSS !== undefined ? customCSS.opacity : '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'opacity')}
              
            />
          </PanelRow>
       
        </PanelBody>
        <PanelBody title="Illustration Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette 
              clearable={false}
              colors={illustrationColorOptions}
              disableCustomColors={true}
              onChange={handleColorChange}
              value={currentColorValue} />
          </PanelRow>
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
              value={ customCSS !== undefined ? customCSS.top : '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'top')}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Bottom Position"
              size="small"
              value={ customCSS !== undefined ? customCSS.bottom: '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'bottom')}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Left Position"
              size="small"
              value={ customCSS !== undefined ? customCSS.left : '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'left')}
            />
          </PanelRow>
          <PanelRow>
            <InputControl
              label="Right Position"
              size="small"
              value={ customCSS !== undefined ? customCSS.right : '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'right')}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

        <div className={`illustration illustration--${horizontalPlacement} illustration--${illustrationColor}`} style={customCSS}>
          {illustrationValue === 'bok-choy' &&
            <BokChoySVG />
          }
          {illustrationValue === 'bread' &&
            <BreadSVG />
          }
          {illustrationValue === 'carrot' &&
            <CarrotSVG />
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
  const { illustrationValue, customCSS, horizontalPlacement } = attributes;

  return (
    <div className={`illustration illustration--${horizontalPlacement}`} style={customCSS}>
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