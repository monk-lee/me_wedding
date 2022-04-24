import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useCopyToClipboard } from 'react-use';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MdLocationOn } from 'react-icons/md';
import {
  FaRegCopy,
  FaSubway,
  FaBus,
  FaRegQuestionCircle,
  FaCar,
} from 'react-icons/fa';
import { useCallback } from 'react';
import ReactGA from 'react-ga4';

import KMAP from '../assets/images/kmap.png';
import NMAP from '../assets/images/nmap.png';
import TMAP from '../assets/images/tmap.png';

const Location = () => {
  const [_, _onCopyToClipboard] = useCopyToClipboard();

  const _onCopyClipboard = () => {
    _onCopyToClipboard('서울 강남구 언주로 508');

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: '주소',
        action: '복사',
      });
    }

    alert('주소가 복사되었습니다.');
  };

  const _onKakaoNavi = useCallback(() => {
    window.Kakao.Navi.start({
      name: '상록아트홀',
      y: 37.503921769305414,
      x: 127.04280665954583,
      coordType: 'wgs84',
    });

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: '내비게이션',
        action: '클릭',
        label: '카카오내비',
      });
    }
  }, []);

  return (
    <Container>
      <Fade delay={500} bottom cascase>
        <Title>오 / 시 / 는 / 길</Title>
      </Fade>
      <Divider />
      <Map
        center={{ lat: 37.503921769305414, lng: 127.04280665954583 }}
        style={{ width: '100%', height: '30vh' }}
        level={4}
      >
        <MapMarker
          position={{ lat: 37.503921769305414, lng: 127.04280665954583 }}
        />
      </Map>
      <Divider />
      <BoxContainer style={{ marginBottom: '30px' }}>
        <Fade delay={500} bottom>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdLocationOn size="2vh" style={{ marginRight: '5px' }} />
            <PText style={{ fontWeight: 'bold' }}>
              서울 강남구 언주로 508 상록회관 L층
            </PText>
          </div>
          <CopyBox onClick={_onCopyClipboard}>
            <FaRegCopy size="2vh" style={{ marginRight: '5px' }} />
            <PText>주소 복사</PText>
          </CopyBox>
        </Fade>
      </BoxContainer>
      <BoxContainer style={{ marginBottom: '30px' }}>
        <Fade delay={500} bottom>
          <MapBox onClick={_onKakaoNavi}>
            <img
              src={KMAP}
              alt="k-map"
              width="30vh"
              style={{ marginRight: '5px' }}
            />
            <PText>카카오내비</PText>
          </MapBox>
          <MapBox
            href="tmap://?rGoName=상록아트홀&rGoY=37.503921769305414&rGoX=127.04280665954583"
            target="_blank"
            onClick={() => {
              if (process.env.NODE_ENV === 'production') {
                ReactGA.event({
                  category: '내비게이션',
                  action: '클릭',
                  label: '티맵',
                });
              }
            }}
          >
            <img
              src={TMAP}
              alt="t-map"
              width="30vh"
              style={{ marginRight: '5px' }}
            />
            <PText>티맵</PText>
          </MapBox>
          <MapBox
            href="nmap://navigation?dlat=37.503921769305414&dlng=127.04280665954583&dname=상록아트홀"
            target="_blank"
            onClick={() => {
              if (process.env.NODE_ENV === 'production') {
                ReactGA.event({
                  category: '내비게이션',
                  action: '클릭',
                  label: '네이버지도',
                });
              }
            }}
          >
            <img
              src={NMAP}
              alt="n-map"
              width="30vh"
              style={{ marginRight: '5px' }}
            />
            <PText>네이버지도</PText>
          </MapBox>
        </Fade>
      </BoxContainer>
      <BoxContainer>
        <ComeOnBox>
          <Fade delay={500} bottom>
            <PText>
              <FaBus size="1.5vh" style={{ marginRight: '5px' }} />
              버스
            </PText>
            <PText style={{ fontSize: '1.3vh' }}>[KT강남지사 하차]</PText>
            <PText style={{ fontSize: '1.3vh' }}>간선: 141, 242</PText>
            <PText style={{ fontSize: '1.3vh' }}>지선: 3422</PText>
            <PText style={{ fontSize: '1.3vh' }}>
              [서울상록회관, 한국기술센터 하차]
            </PText>
            <PText style={{ fontSize: '1.3vh' }}>간선: 146, 360, 740</PText>
            <PText style={{ fontSize: '1.3vh' }}>직행: 7007, 2000</PText>
          </Fade>
        </ComeOnBox>
        <ComeOnBox
          style={{
            borderRight: '1px solid rgba(157, 126, 95, 0.3)',
            borderLeft: '1px solid rgba(157, 126, 95, 0.3)',
          }}
        >
          <Fade delay={500} bottom>
            <PText>
              <FaSubway size="1.5vh" style={{ marginRight: '5px' }} />
              지하철
            </PText>
            <PText style={{ fontSize: '1.3vh' }}>[2호선/분당선]</PText>
            <PText style={{ fontSize: '1.3vh' }}>'선릉역'</PText>
            <PText style={{ fontSize: '1.3vh' }}>⓹번 출구 도보 6분</PText>
            <PText style={{ fontSize: '1.3vh', fontWeight: 'bold' }}>
              **셔틀버스 상시 운행**
            </PText>
          </Fade>
        </ComeOnBox>
        <ComeOnBox
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Fade delay={500} bottom>
            <div style={{ flex: 1 }}>
              <PText>
                <FaCar size="1.5vh" style={{ marginRight: '5px' }} />
                자가용
              </PText>
              <PText style={{ fontSize: '1.3vh' }}>
                주차: 웨딩 홀 내 90분 무료
              </PText>
            </div>
            <div style={{ flex: 1 }}>
              <PText>
                <FaRegQuestionCircle
                  size="1.5vh"
                  style={{ marginRight: '5px' }}
                />
                문의사항
              </PText>
              <PText style={{ fontSize: '1.3vh' }}>02-564-5757</PText>
            </div>
          </Fade>
        </ComeOnBox>
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const Text = styled.p`
  font-family: 'KyoboHandwriting2020A';
`;

const PText = styled.p`
  font-family: Pretendard;
  font-size: 2vh;
`;

const Title = styled(Text)`
  font-size: 2.5vh;
  text-align: center;
  color: #9d7e5f;
`;

const Divider = styled.span`
  background-color: #9d7e5f;
  width: 40%;
  height: 1px;
  margin: 30px 0;
  opacity: 0.3;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const CopyBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const MapBox = styled.a`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  color: #000000;
`;

const ComeOnBox = styled.div`
  flex: 1;
  line-height: 2.5vh;
  padding: 0 10px;
  height: 20vh;
`;

export default Location;
