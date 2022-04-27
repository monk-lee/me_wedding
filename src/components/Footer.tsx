import styled from 'styled-components';
import { FaVolumeUp, FaVolumeMute, FaLink } from 'react-icons/fa';
import { useAudio, useCopyToClipboard, useLocation } from 'react-use';
import { useCallback, useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';

import BGM from '../assets/bgm.mp3';
import KAKAOICON from '../assets/images/kakao_icon.png';

const Footer = () => {
  const [audio, state, controls] = useAudio({
    src: BGM,
    autoPlay: true,
    loop: true,
  });

  const location = useLocation();
  const [_, _onCopyToClipboard] = useCopyToClipboard();

  const _toggleAudio = () => {
    if (state.paused) {
      controls.play();

      if (process.env.NODE_ENV === 'production') {
        ReactGA.event({
          category: '노래',
          action: '켜기',
        });
      }
    } else {
      controls.pause();
      controls.seek(0);

      if (process.env.NODE_ENV === 'production') {
        ReactGA.event({
          category: '노래',
          action: '끄기',
        });
      }
    }
  };

  const _onCopyClipboard = () => {
    _onCopyToClipboard(location.href || '');

    alert('주소가 복사되었습니다.');

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: '사이트주소',
        action: '사이트주소 복사',
      });
    }
  };

  const _onKakaoShare = useCallback(() => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '우리 딸, 결혼합니다.',
        description:
          '2022년 6월 26일 일요일 오전 11시\n상록아트홀 L층 그랜드볼룸',
        imageUrl: 'https://chanrang.party/1649823529761.jpg',
        link: {
          mobileWebUrl: 'https://chanrang.party/',
        },
      },
      buttons: [
        {
          title: '청첩장 확인하기',
          link: {
            mobileWebUrl: 'https://chanrang.party/',
          },
        },
      ],
    });

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: '카카오공유',
        action: '카카오공유 클릭',
      });
    }
  }, []);

  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      window.Kakao.init(process.env.REACT_APP_KAKAOLINK);
      firstRenderRef.current = false;
    }
  }, []);

  return (
    <Container>
      {audio}
      <FooterItem onClick={_toggleAudio}>
        {state.playing ? (
          <FaVolumeUp size="1.5rem" />
        ) : (
          <FaVolumeMute size="1.5rem" />
        )}
      </FooterItem>
      <FooterItem onClick={_onCopyClipboard}>
        <FaLink size="1.5rem" />
      </FooterItem>
      <KakaoItem onClick={_onKakaoShare} />
    </Container>
  );
};

const Container = styled.footer`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 50px;
  width: 100%;
  z-index: 99;
  background-color: white;
  box-shadow: 0px -4px 3px rgba(0, 0, 0, 0.1);
`;

const FooterItem = styled.div`
  display: flex;
  flex: 1;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const KakaoItem = styled(FooterItem)`
  background-color: #fce404;
  background-image: url(${KAKAOICON});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export default Footer;
