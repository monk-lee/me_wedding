import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import RIGHT_TWO from '../assets/images/right_two.jpg';

const Hello = () => {
  return (
    <Container>
      <Fade delay={500} bottom>
        <Text style={{ fontSize: '2.5vh', color: '#9d7e5f' }}>
          {'= INVITE YOU ='}
        </Text>
      </Fade>
      <ImageTop>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.8vh' }}>꽃향기 가득한 봄날,</Text>
        </Fade>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.8vh' }}>운명처럼 만난 저희 두 사람.</Text>
        </Fade>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.8vh' }}>
            햇살이 눈부신 유월의 어느 날,
          </Text>
        </Fade>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.8vh' }}>저희 결혼합니다.</Text>
        </Fade>
      </ImageTop>
      <Fade delay={500} bottom>
        <Image src={RIGHT_TWO} alt="웨딩" />
      </Fade>
      <Divider />
      <ImageBottomTop>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.5vh' }}>
            언제나 곁에 함께 있어주신 소중한 분들께,
          </Text>
        </Fade>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.5vh' }}>
            저희 두 사람의 첫 시작을 전합니다.
          </Text>
        </Fade>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.5vh' }}>
            저희가 하나 됨을 약속하는 아름다운 날,
          </Text>
        </Fade>
        <Fade delay={500} bottom>
          <Text style={{ fontSize: '2.5vh' }}>
            따뜻한 마음으로 축복해 주시면 감사하겠습니다.
          </Text>
        </Fade>
      </ImageBottomTop>
      <Divider />
      <Fade bottom>
        <PersonContainer>
          <Text style={{ fontSize: '2vh', color: '#94a5c5' }}>신랑 -</Text>
          <PersonText style={{ fontSize: '2vh', margin: '0 5px' }}>
            김태우 · 장인태의 장남,
          </PersonText>
          <Text style={{ fontSize: '2.5vh' }}>찬혁</Text>
        </PersonContainer>
      </Fade>
      <Fade bottom>
        <PersonContainer>
          <Text style={{ fontSize: '2vh', color: '#ca9a9f' }}>신부 -</Text>
          <PersonText style={{ fontSize: '2vh', margin: '0 5px' }}>
            이윤창 · 이희숙의 장녀,
          </PersonText>
          <Text style={{ fontSize: '2.5vh' }}>하랑</Text>
        </PersonContainer>
      </Fade>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'KyoboHandwriting2020A';
`;

const ImageTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  line-height: 6vh;
`;

const Image = styled.img`
  width: 100%;
`;

const Divider = styled.span`
  background-color: #9d7e5f;
  width: 40%;
  height: 1px;
  margin: 30px 0;
  opacity: 0.3;
`;

const ImageBottomTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 6vh;
`;

const PersonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: 6vh;
`;

const PersonText = styled.p``;

export default Hello;
