
import { registerBlockType } from '@wordpress/blocks';
import { useRef, useLayoutEffect, useState  } from '@wordpress/element';

registerBlockType("rollinoats/marqueebanner", {
  title: "Rollin Oats Marquee Banner",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent() {

  return (
    <div className="marquee-banner">
      <div className="marquee-banner__container">
        <ul className="marquee-banner__content">
          <li>Organic</li>
          <li>Vegan</li>
          <li>Gluten-Free</li>
          <li>Dairy-Free</li>
          <li>Vegetarian</li>
          <li>Paleo</li>
          <li>Keto</li>
          <li>Whole Foods</li>
          <li>Sustainable</li>
        </ul>
        <ul className="marquee-banner__content">
          <li>Organic</li>
          <li>Vegan</li>
          <li>Gluten-Free</li>
          <li>Dairy-Free</li>
          <li>Vegetarian</li>
          <li>Paleo</li>
          <li>Keto</li>
          <li>Whole Foods</li>
          <li>Sustainable</li>
        </ul>
      </div>
    </div>
  );
}

function SaveComponent() {
  return (
    <div className="marquee-banner">
    <div className="marquee-banner__container">
      <ul className="marquee-banner__content">
        <li>Organic</li>
        <li>Vegan</li>
        <li>Gluten-Free</li>
        <li>Dairy-Free</li>
        <li>Vegetarian</li>
        <li>Paleo</li>
        <li>Keto</li>
        <li>Whole Foods</li>
        <li>Sustainable</li>
      </ul>
      <ul className="marquee-banner__content">
        <li>Organic</li>
        <li>Vegan</li>
        <li>Gluten-Free</li>
        <li>Dairy-Free</li>
        <li>Vegetarian</li>
        <li>Paleo</li>
        <li>Keto</li>
        <li>Whole Foods</li>
        <li>Sustainable</li>
      </ul>
    </div>
  </div>
  );
}