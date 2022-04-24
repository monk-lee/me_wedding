import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const ThanksTo = () => {
  return (
    <Container>
      <Fade delay={500} bottom cascase>
        <Title>감 / 사 / 말</Title>
      </Fade>
      <Divider />
      <TextContainer>
        <Fade delay={500} bottom cascase>
          <TText>두 사람이 서로 사랑하며 평생을 함께 할 수 있도록</TText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <TText>언제나 기댈 수 있는 울타리가 되어주겠습니다.</TText>
        </Fade>
      </TextContainer>
      <Divider />
      <TextContainer>
        <Fade delay={500} bottom cascase>
          <TText>저희 딸의 새로운 시작을 축복해 주시는</TText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <TText>소중한 분들께 진심으로 감사드리며</TText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <TText>항상 건강하시고 행복하시길 기원하겠습니다.</TText>
        </Fade>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background-color: #9d7e5f;
`;

const Text = styled.p`
  font-family: 'KyoboHandwriting2020A';
`;

const TText = styled(Text)`
  font-size: 2.5vh;
  color: #ffffff;
`;

const Title = styled(Text)`
  font-size: 2.5vh;
  text-align: center;
  color: #ffffff;
`;

const TextContainer = styled.div`
  line-height: 3.5vh;
  text-align: center;
`;

const Divider = styled.span`
  background-color: #ffffff;
  width: 40%;
  height: 1px;
  margin: 30px 0;
  opacity: 0.3;
`;

export default ThanksTo;
