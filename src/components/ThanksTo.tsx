import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import FOOTER_IMAGE from '../assets/images/footer.jpg';

const ThanksTo = () => {
  return (
    <Container>
      <WelcomeAreaTop>
        <WeddingText style={{ fontSize: '2vh' }}>
          <Fade delay={1000} top cascase>
            우연이라기엔 인연 같고,
          </Fade>
        </WeddingText>
        <WeddingText style={{ fontSize: '2vh' }}>
          <Fade delay={1000} top cascase>
            인연이라기엔 너무 찰나 같은 순간
          </Fade>
        </WeddingText>
        <WeddingText style={{ fontSize: '2vh' }}>
          <Fade delay={1000} top cascase>
            나는 너를 만나 사랑하게 되었다.
          </Fade>
        </WeddingText>
        <WeddingText style={{ fontSize: '2vh' }}>
          <Fade delay={1000} top cascase>
            설레는 첫 마음 그대로 평생 간직하며 살겠습니다.
          </Fade>
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
  padding-top: 4.5vh;
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
