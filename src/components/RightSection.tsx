import { useRef } from 'react';
import styled from 'styled-components';
import useScrollTracker from '../hooks/useScrollTracker';
import ReactGA from 'react-ga4';

type RightSectionProps = {
  children: React.ReactNode;
};
const RightSection = ({ children }: RightSectionProps) => {
  const testRef = useRef<HTMLDivElement>(null);

  useScrollTracker(
    testRef,
    [15, 25, 35, 45, 55, 65, 75, 85, 95],
    ({ scrollY }) => {
      // console.log('🚀 ~ RightSection ~ scrollY', scrollY);

      if (process.env.NODE_ENV === 'production') {
        ReactGA.event({ category: '스크롤', action: `${scrollY}%` });
      }
    },
  );

  return <Container ref={testRef}>{children}</Container>;
};

const Container = styled.section`
  position: relative;
  /* display: flex; */
  flex-direction: column;
  flex: 1;

  padding-bottom: 50px;

  @media screen and (min-width: 1201px) {
    overflow: auto;
    overflow-x: hidden;
  }
`;

export default RightSection;
