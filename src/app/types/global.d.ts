declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

// declare module "*.svg" {
//   import React from "react";
//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.pdf";

declare const __API_URL__: string;
declare const __AUTH_API_URL__: string;
