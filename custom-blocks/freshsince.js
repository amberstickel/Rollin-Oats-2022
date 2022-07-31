import { registerBlockType } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';
import {  InspectorControls } from '@wordpress/block-editor';
import {  PanelBody, PanelRow, SelectControl, __experimentalNumberControl as NumberControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { FreshSinceSVG } from '../illustrations';

registerBlockType("rollinoats/freshsince", {
  title: "Rollin Oats Fresh Since Spinner",
  attributes:{
    customCSS: {
      type: "object"
    }, 
    horizontalPlacement: {
      type: 'string',
      default: 'left'
    },
    scaleVal: {
      type: "number",
      default: 1
    }
  },
  edit: EditComponent,
  save: SaveComponent
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
  const { customCSS, horizontalPlacement, scaleVal } = attributes;
  const [scaleProperty, setScaleProperty] = useState('');

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

  useEffect(() => {
    setScaleProperty(`scale(${scaleVal})`);
  }, [scaleVal]);
  
  return (
    <>
      <InspectorControls>
        <PanelBody title="Illustration Size" initialOpen={true}>
          <PanelRow>
            <NumberControl
              label="Scale"
              min={0}
              max={2}
              value={ scaleVal }
              step={0.05}
              onChange={(nextValue) => setAttributes({
                scaleVal: nextValue
              })}
            />
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
            <UnitControl
              label="Adjust top position"
              size="small"
              value={ customCSS !== undefined ? customCSS.top : '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'top')}
            />
          </PanelRow>
          <PanelRow>
            <UnitControl
              label="Adjust bottom position"
              size="small"
              value={ customCSS !== undefined ? customCSS.bottom: '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'bottom')}
            />
          </PanelRow>
          <PanelRow>
            <UnitControl
              label="Adjust left position"
              size="small"
              value={ customCSS !== undefined ? customCSS.left : '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'left')}
            />
          </PanelRow>
          <PanelRow>
            <UnitControl
              label="Adjust right position"
              size="small"
              value={ customCSS !== undefined ? customCSS.right : '' }
              onChange={(nextValue) => handleCustomCSSChange(nextValue, 'right')}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className={`ro--fresh-since ro--fresh-since--${horizontalPlacement}`} style={customCSS}>
        <div className="ro--fresh-since__svg-wrapper" style={{transform: scaleProperty}}>
          <FreshSinceSVG />
        </div>
      </div>
    </>
  );
}

function SaveComponent(props) {
  const { attributes } = props;
  const { customCSS, horizontalPlacement, scaleVal } = attributes;

  const scaleProperty = `scale(${scaleVal})`;
  return (
    <div className={`ro--fresh-since ro--fresh-since--${horizontalPlacement}`} style={customCSS}>
      <div className="ro--fresh-since__svg-wrapper" style={{transform: scaleProperty}}>
        <FreshSinceSVG />
      </div>
    </div>
  );
}