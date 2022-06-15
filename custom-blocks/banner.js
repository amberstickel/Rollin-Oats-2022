import { InnerBlocks } from '@wordpress/block-editor';
wp.blocks.registerBlockType("rollinoats/banner", {
  title: "Banner",
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
    <div className="banner">
      <svg className="banner__svg" xmlns="http://www.w3.org/2000/svg"><path data-name="Union 2" d="M643.891 327.61C512.922 304 399.665 294.485 306.278 292.458h-77.83C80.376 295.789 0 317.368 0 317.368v-93.3h1V0h1440v224.073h1.861V327.61s-173.777 32.694-410.487 32.7c-118.374 0-252.46-8.174-388.483-32.7Z" fill="#191919" opacity=".25"/></svg>
      <InnerBlocks allowedBlocks={["rollinoats/bannerheadline"]} />
    </div>
  );
}

function SaveComponent() {
  return (
    <div className="banner">
      <svg className="banner__svg" xmlns="http://www.w3.org/2000/svg"><path data-name="Union 2" d="M643.891 327.61C512.922 304 399.665 294.485 306.278 292.458h-77.83C80.376 295.789 0 317.368 0 317.368v-93.3h1V0h1440v224.073h1.861V327.61s-173.777 32.694-410.487 32.7c-118.374 0-252.46-8.174-388.483-32.7Z" fill="#191919" opacity=".25"/></svg>
        <InnerBlocks.Content />
    </div>
  );
}