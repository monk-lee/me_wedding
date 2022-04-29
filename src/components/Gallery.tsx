import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ImageMasonry from 'react-image-masonry';
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga4';
import { ReactImageGalleryItem } from 'react-image-gallery';

import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// import 'react-image-gallery/styles/css/image-gallery.css';

import A from '../assets/images/gallery_1.jpg';
import B from '../assets/images/gallery_2.jpg';
import C from '../assets/images/gallery_3.jpg';
import D from '../assets/images/gallery_4.jpg';
import E from '../assets/images/gallery_5.jpg';
import F from '../assets/images/gallery_6.jpg';
import G from '../assets/images/gallery_7.jpg';
import H from '../assets/images/gallery_8.jpg';
import I from '../assets/images/gallery_9.jpg';
import J from '../assets/images/gallery_10.jpg';
import K from '../assets/images/gallery_11.jpg';
import L from '../assets/images/gallery_12.jpg';
import M from '../assets/images/gallery_13.jpg';
import N from '../assets/images/gallery_14.jpg';
import O from '../assets/images/gallery_15.jpg';
import P from '../assets/images/gallery_16.jpg';
import Q from '../assets/images/gallery_17.jpg';
import R from '../assets/images/gallery_18.jpg';
import S from '../assets/images/gallery_19.jpg';
import T from '../assets/images/gallery_20.jpg';
// import ModalWrap from './Modal';

const Gallery = () => {
  const imageArr = useMemo<ReactImageGalleryItem[]>(
    () => [
      { original: A, thumbnail: A },
      { original: B, thumbnail: B },
      { original: C, thumbnail: C },
      { original: D, thumbnail: D },
      { original: E, thumbnail: E },
      { original: F, thumbnail: F },
      { original: G, thumbnail: G },
      { original: H, thumbnail: H },
      { original: I, thumbnail: I },
      { original: J, thumbnail: J },
      { original: K, thumbnail: K },
      { original: L, thumbnail: L },
      { original: M, thumbnail: M },
      { original: N, thumbnail: N },
      { original: O, thumbnail: O },
      { original: P, thumbnail: P },
      { original: Q, thumbnail: Q },
      { original: R, thumbnail: R },
      { original: S, thumbnail: S },
      { original: T, thumbnail: T },
    ],
    [],
  );

  const [indexImage, setIndexImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      if (process.env.NODE_ENV === 'production') {
        ReactGA.event({
          category: '갤러리',
          action: `gallery_${indexImage + 1} 클릭`,
          label: `gallery_${indexImage + 1}`,
        });
      }
    }
  }, [isModalOpen, indexImage]);

  return (
    <Container>
      <Fade delay={500} bottom cascase>
        <Title>{'= GALLERY ='}</Title>
      </Fade>
      <GalleryContainer>
        <ImageMasonry numCols={3}>
          {imageArr.map((imageItem, imageIndex) => {
            return (
              <div
                key={`image_${imageIndex}`}
                style={{
                  border: '2px solid transparent',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (process.env.NODE_ENV === 'production') {
                    ReactGA.event({
                      category: '갤러리',
                      action: `gallery_${imageIndex + 1} 클릭`,
                      label: `gallery_${imageIndex + 1}`,
                    });
                  }

                  setIndexImage(imageIndex);
                  setIsModalOpen(true);
                }}
              >
                <img
                  src={imageItem.original}
                  alt={`image_${imageIndex}`}
                  width="100%"
                />
              </div>
            );
          })}
        </ImageMasonry>
      </GalleryContainer>
      {isModalOpen && (
        <Lightbox
          mainSrc={imageArr[indexImage].original}
          nextSrc={imageArr[(indexImage + 1) % imageArr.length].original}
          prevSrc={
            imageArr[(indexImage + imageArr.length - 1) % imageArr.length]
              .original
          }
          onCloseRequest={() => setIsModalOpen(false)}
          onMoveNextRequest={() =>
            setIndexImage((indexImage + 1) % imageArr.length)
          }
          onMovePrevRequest={() =>
            setIndexImage((indexImage + imageArr.length - 1) % imageArr.length)
          }
          enableZoom={false}
        />
      )}
      {/* <ModalWrap
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        closable={false}
      >
        <ImageGallery
          items={imageArr}
          thumbnailPosition="right"
          showIndex
          onSlide={(index) => console.log(index)}
        />
      </ModalWrap> */}
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0;
`;

const Text = styled.p`
  font-family: 'KyoboHandwriting2020A';
`;

const Title = styled(Text)`
  font-size: 2.5vh;
  text-align: center;
  color: #9d7e5f;
`;

const GalleryContainer = styled.div`
  padding: 30px 0;
`;

export default Gallery;
