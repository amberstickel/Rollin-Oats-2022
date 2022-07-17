
import { registerBlockType } from '@wordpress/blocks';
import {  InspectorControls } from '@wordpress/block-editor';
import {  PanelBody, PanelRow, SelectControl } from '@wordpress/components';


registerBlockType("rollinoats/marqueebanner", {
  title: "Rollin Oats Marquee Banner",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    selectedOption: {
      type: "string",
      default: "option-1"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const marqueeBannerOptions = [
    {
      value: 'option-1',
      label: 'Option 1'
    },
    {
      value: 'option-2',
      label: 'Option 2'
    },
  ];

  const { attributes, setAttributes } = props;
  const { selectedOption } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Banner Content" initialOpen={true}>
          <PanelRow>
            <SelectControl 
              label="Marquee Banner Options"
              options={ marqueeBannerOptions }
              value={selectedOption}
              onChange={(nextValue) => {
                setAttributes({
                  selectedOption: nextValue
                })
              }}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="marquee-banner">
        {selectedOption === 'option-1' && 
          <>
            <div class="marquee-banner__items">
              <span>Organic</span>
              <span>·</span>
              <span>Vegan</span>
              <span>·</span>
              <span>Gluten-Free</span>
              <span>·</span>
              <span>Dairy-Free</span>
              <span>·</span>
              <span>Vegetarian</span>
              <span>·</span>
              <span>Paleo</span>
              <span>·</span>
              <span>Keto</span>
              <span>·</span>
              <span>Whole Foods</span>
              <span>·</span>
              <span>Sustainable</span>
              <span>·</span>
            </div>
            <div class="marquee-banner__items">
              <span>Organic</span>
              <span>·</span>
              <span>Vegan</span>
              <span>·</span>
              <span>Gluten-Free</span>
              <span>·</span>
              <span>Dairy-Free</span>
              <span>·</span>
              <span>Vegetarian</span>
              <span>·</span>
              <span>Paleo</span>
              <span>·</span>
              <span>Keto</span>
              <span>·</span>
              <span>Whole Foods</span>
              <span>·</span>
              <span>Sustainable</span>
              <span>·</span>
            </div>
            <div class="marquee-banner__items">
              <span>Organic</span>
              <span>·</span>
              <span>Vegan</span>
              <span>·</span>
              <span>Gluten-Free</span>
              <span>·</span>
              <span>Dairy-Free</span>
              <span>·</span>
              <span>Vegetarian</span>
              <span>·</span>
              <span>Paleo</span>
              <span>·</span>
              <span>Keto</span>
              <span>·</span>
              <span>Whole Foods</span>
              <span>·</span>
              <span>Sustainable</span>
              <span>·</span>
            </div>
          </>
        }

        {selectedOption === 'option-2' && 
          <>
            <div class="marquee-banner__items">
              <span>For the love of health</span>
              <span>~</span>
              <span>We love being well with you</span>
              <span>~</span>
              <span>Smoothies while you shop</span>
              <span>~</span>
              <span>All the options under the sun</span>
              <span>~</span>
              <span>Who said health food wasn't yummy</span>
              <span>~</span>
            </div>
            <div class="marquee-banner__items">
              <span>For the love of health</span>
              <span>~</span>
              <span>We love being well with you</span>
              <span>~</span>
              <span>Smoothies while you shop</span>
              <span>~</span>
              <span>All the options under the sun</span>
              <span>~</span>
              <span>Who said health food wasn't yummy</span>
              <span>~</span>
            </div>
            <div class="marquee-banner__items">
              <span>For the love of health</span>
              <span>~</span>
              <span>We love being well with you</span>
              <span>~</span>
              <span>Smoothies while you shop</span>
              <span>~</span>
              <span>All the options under the sun</span>
              <span>~</span>
              <span>Who said health food wasn't yummy</span>
              <span>~</span>
            </div>
          </>
        }
      </div>
    </>
  );
}

function SaveComponent(props) {
  const { attributes } = props;
  const { selectedOption } = attributes;

  return (
    <div className="marquee-banner">
      {selectedOption === 'option-1' && 
        <>
          <div class="marquee-banner__items">
            <span>Organic</span>
            <span>·</span>
            <span>Vegan</span>
            <span>·</span>
            <span>Gluten-Free</span>
            <span>·</span>
            <span>Dairy-Free</span>
            <span>·</span>
            <span>Vegetarian</span>
            <span>·</span>
            <span>Paleo</span>
            <span>·</span>
            <span>Keto</span>
            <span>·</span>
            <span>Whole Foods</span>
            <span>·</span>
            <span>Sustainable</span>
            <span>·</span>
          </div>
          <div class="marquee-banner__items">
            <span>Organic</span>
            <span>·</span>
            <span>Vegan</span>
            <span>·</span>
            <span>Gluten-Free</span>
            <span>·</span>
            <span>Dairy-Free</span>
            <span>·</span>
            <span>Vegetarian</span>
            <span>·</span>
            <span>Paleo</span>
            <span>·</span>
            <span>Keto</span>
            <span>·</span>
            <span>Whole Foods</span>
            <span>·</span>
            <span>Sustainable</span>
            <span>·</span>
          </div>
          <div class="marquee-banner__items">
            <span>Organic</span>
            <span>·</span>
            <span>Vegan</span>
            <span>·</span>
            <span>Gluten-Free</span>
            <span>·</span>
            <span>Dairy-Free</span>
            <span>·</span>
            <span>Vegetarian</span>
            <span>·</span>
            <span>Paleo</span>
            <span>·</span>
            <span>Keto</span>
            <span>·</span>
            <span>Whole Foods</span>
            <span>·</span>
            <span>Sustainable</span>
            <span>·</span>
          </div>
        </>
      }

      {selectedOption === 'option-2' && 
        <>
          <div class="marquee-banner__items">
            <span>For the love of health</span>
            <span>~</span>
            <span>We love being well with you</span>
            <span>~</span>
            <span>Smoothies while you shop</span>
            <span>~</span>
            <span>All the options under the sun</span>
            <span>~</span>
            <span>Who said health food wasn't yummy</span>
            <span>~</span>
          </div>
          <div class="marquee-banner__items">
            <span>For the love of health</span>
            <span>~</span>
            <span>We love being well with you</span>
            <span>~</span>
            <span>Smoothies while you shop</span>
            <span>~</span>
            <span>All the options under the sun</span>
            <span>~</span>
            <span>Who said health food wasn't yummy</span>
            <span>~</span>
          </div>
          <div class="marquee-banner__items">
            <span>For the love of health</span>
            <span>~</span>
            <span>We love being well with you</span>
            <span>~</span>
            <span>Smoothies while you shop</span>
            <span>~</span>
            <span>All the options under the sun</span>
            <span>~</span>
            <span>Who said health food wasn't yummy</span>
            <span>~</span>
          </div>
        </>
      }
    </div>
  );
}