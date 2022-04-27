import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import FOOTER_IMAGE from '../assets/images/footer.jpg';

const ThanksTo = () => {
  return (
    <Container>
      <WelcomeAreaTop>
        <WeddingText style={{ fontSize: '2vh' }}>
          예쁜 예감이 들었다.
        </WeddingText>
        <WeddingText style={{ fontSize: '2vh' }}>
          우리는 언제나 손을 잡고 있게 될 것이다.
        </WeddingText>
        <WeddingText style={{ fontSize: '2vh' }}>
          {'-이이체<연인>-'}
        </WeddingText>
      </WelcomeAreaTop>
      <footer>
        <PText>Copyrightⓒ 2022. MONK_LEE. All rights reserved.</PText>
      </footer>
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
  padding-top: 6vh;
  padding-bottom: 3vh;
  background-image: url(${FOOTER_IMAGE});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WelcomeAreaTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3vh;
`;

const WeddingText = styled.h1`
  font-family: 'KyoboHandwriting2020A';
`;

const PText = styled.p`
  font-size: 1.5vh;
  font-family: Pretendard;
  color: rgba(0, 0, 0, 0.3);
`;

export default ThanksTo;
