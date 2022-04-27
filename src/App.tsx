import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ReactCanvasConfetti from 'react-canvas-confetti';
import confetti from 'canvas-confetti';
import ReactGA from 'react-ga4';

import HARANG from './assets/images/left_main.png';

import WelcomeArea from './components/WelcomeArea';
import Hello from './components/Hello';
import Footer from './components/Footer';
import MyCalendar from './components/Calendar';
import Gallery from './components/Gallery';
import PhoneCall from './components/PhoneCall';
import RightSection from './components/RightSection';
import AccountInfo from './components/AccountInfo';
import GuestBook from './components/GuestBook';
import Location from './components/Location';
import ThanksTo from './components/ThanksTo';
// import CopyRight from './components/CopyRight';

import useScrollTracker from './hooks/useScrollTracker';

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getAnimationSettings = (): confetti.Options => {
  return {
    particleCount: 1,
    startVelocity: 0,
    ticks: 200,
    gravity: 0.3,
    origin: {
      x: Math.random(),
      y: Math.random() * 0.999 - 0.2,
    },
    // #ffc0cb
    colors: ['#fddde2'],
    shapes: ['square'],
    scalar: randomInRange(0.4, 1),
  };
};

const App = () => {
  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null);
  const timerRef = useRef<any>(null);

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings());
    }
  }, []);

  useEffect(() => {
    if (refAnimationInstance.current) {
      timerRef.current = setInterval(nextTickAnimation, 300);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [nextTickAnimation]);

  useEffect(() => {
    const TRACKING_ID = 'G-X37BPW5SP9';

    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.send('pageview');
    }
  }, []);

  useScrollTracker(
    undefined,
    [15, 25, 35, 45, 55, 65, 75, 85, 95],
    ({ scrollY }) => {
      // console.log('🚀 ~ App ~ scrollY', scrollY);

      if (process.env.NODE_ENV === 'production') {
        ReactGA.event({ category: '스크롤', action: `${scrollY}%` });
      }
    },
  );

  return (
    <>
      <Container>
        <LeftSection>
          <Fade right>
            <WelcomeTitle>저희 둘 ,</WelcomeTitle>
          </Fade>
          <Fade right>
            <WelcomeTitle>결혼합니다.</WelcomeTitle>
          </Fade>
        </LeftSection>
        <RightSection>
          <WelcomeArea />
          <Hello />
          <MyCalendar />
          <Gallery />
          <AccountInfo />
          <PhoneCall />
          <GuestBook />
          <Location />
          <ThanksTo />
          {/* <CopyRight /> */}
        </RightSection>
        <Footer />
      </Container>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      />
    </>
  );
};

const Container = styled.div`
  /* height: ${window.innerHeight}px; */
  height: 100vh;
  background-color: white;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

const LeftSection = styled.section`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 30px;
  background-image: url(${HARANG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-color: #161616; */

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

// const RightSection = styled.section`
//   position: relative;
//   /* display: flex; */
//   flex-direction: column;
//   flex: 1;

//   padding-bottom: 50px;

//   @media screen and (min-width: 1201px) {
//     overflow: scroll;
//     overflow-x: hidden;
//   }
// `;

const WelcomeTitle = styled.h1`
  font-family: 'KyoboHandwriting2020A';
  font-size: 6vw;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default App;
