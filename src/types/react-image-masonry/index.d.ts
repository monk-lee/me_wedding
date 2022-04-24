declare module 'react-image-masonry' {
  import * as React from 'react';

  const ImageMasonry: React.FC<{
    imageUrls?: string[];
    numCols: number;
    containerWidth?: string | number;
    containerHeight?: string | number;
    scrollable?: boolean;
    animate?: boolean;
    forceOrder?: boolean;
    children?: React.ReactNode[];
  }>;

  export default ImageMasonry;
}
