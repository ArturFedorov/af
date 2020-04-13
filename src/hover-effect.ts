declare module 'hover-effect' {
  export = hover.hoverEffect;
}

declare namespace hover {
  export interface IHoverOptions {
    parent: Element | null,
    intensity: number,
    image1: any,
    image2: any,
    displacementImage: any
  }

  class hoverEffect {
    constructor(options: IHoverOptions);
  }
}



