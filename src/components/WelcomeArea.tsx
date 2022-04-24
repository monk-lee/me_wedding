import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import RIGHT_ONE from '../assets/images/right_one.jpg';
import WAVE from '../assets/images/wave.png';

const WelcomeArea = () => {
  return (
    <Container>
      <WelcomeAreaTop>
        <WeddingText style={{ fontSize: '3.8vh', color: '#9d7e5f' }}>
          <Fade delay={1000} top cascase>
            저희 둘,
          </Fade>
        </WeddingText>
        <WeddingTextContainer>
          <Fade delay={1500} top cascase>
            <WeddingText style={{ fontSize: '5.5vh', color: '#ffffff' }}>
              결
            </WeddingText>
            <WeddingText style={{ fontSize: '6vh', color: '#ffffff' }}>
              혼
            </WeddingText>
            <WeddingText style={{ fontSize: '5.2vh', color: '#ffffff' }}>
              합
            </WeddingText>
            <WeddingText style={{ fontSize: '6vh', color: '#ffffff' }}>
              니
            </WeddingText>
            <WeddingText style={{ fontSize: '5.2vh', color: '#ffffff' }}>
              다.
            </WeddingText>
          </Fade>
        </WeddingTextContainer>
        <WeddingText style={{ color: '#9d7e5f' }}>
          <Fade delay={2000} top cascase>
            ~ 6월 26일 ~
          </Fade>
        </WeddingText>
      </WelcomeAreaTop>
      <Fade delay={1800} bottom>
        <WelcomeAreaBottom style={{ gap: '5px' }}>
          <WeddingText style={{ fontSize: '2vh', color: '#9d7e5f' }}>
            신랑,
          </WeddingText>
          <WeddingText style={{ fontSize: '3vh', color: '#9d7e5f' }}>
            김찬혁
          </WeddingText>
          <WeddingText style={{ fontSize: '2vh', color: '#9d7e5f' }}>
            {'&'}
          </WeddingText>
          <WeddingText style={{ fontSize: '2vh', color: '#9d7e5f' }}>
            신부,
          </WeddingText>
          <WeddingText style={{ fontSize: '3vh', color: '#9d7e5f' }}>
            이하랑
          </WeddingText>
        </WelcomeAreaBottom>
      </Fade>
      <WaveOne />
      <WaveTwo />
      <WaveThree />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: ${window.innerHeight - 50}px;
  padding-top: 5vh;
  padding-bottom: 15vh;
  background-image: url(${RIGHT_ONE});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WelcomeAreaTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeAreaBottom = styled.div`
  display: flex;
  align-items: center;
`;

const WaveContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  background-image: url(${WAVE});
  background-size: 1000px 70px;
`;

const WaveOne = styled(WaveContainer)`
  animation: waveone 20s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;

  @keyframes waveone {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
`;

const WaveTwo = styled(WaveContainer)`
  animation: wavetwo 10s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;

  @keyframes wavetwo {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
`;

const WaveThree = styled(WaveContainer)`
  animation: wavethree 5s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;

  @keyframes wavethree {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
`;

const WeddingTextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const WeddingText = styled.h1`
  font-family: 'KyoboHandwriting2020A';
`;

export default WelcomeArea;
