import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga4';

import CALL_HARANG from '../assets/images/call_harang.jpg';
import CALL_CHAN from '../assets/images/call_chan.jpg';

const PhoneCall = () => {
  return (
    <Container>
      <Fade delay={500} bottom cascase>
        <Title>{'= CONTACT ='}</Title>
      </Fade>
      <ContentTextContainer>
        <Fade delay={500} bottom cascase>
          <ContentText>축하의 마음을 전화로</ContentText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <ContentText>전해보세요.</ContentText>
        </Fade>
      </ContentTextContainer>
      <CallContainer>
        <div>
          <a
            href="tel:01050321399"
            onClick={() => {
              if (process.env.NODE_ENV === 'production') {
                ReactGA.event({
                  category: '전화',
                  action: '김찬혁 전화 클릭',
                  label: '김찬혁',
                });
              }
            }}
          >
            <Fade delay={500} bottom>
              <CallChan />
            </Fade>
          </a>
          <PhoneInfoContainer>
            <a
              href="tel:01037671399"
              style={{ color: 'black' }}
              onClick={() => {
                if (process.env.NODE_ENV === 'production') {
                  ReactGA.event({
                    category: '전화',
                    action: '김태우 전화 클릭',
                    label: '김태우',
                  });
                }
              }}
            >
              <Fade delay={500} bottom>
                <PText
                  style={{
                    backgroundColor: '#ffffff',
                    borderBottom: '1px solid black',
                  }}
                >
                  아버지, <SText>김태우 </SText>
                  <FaPhone size="1.5vh" />
                </PText>
              </Fade>
            </a>
            <a
              href="tel:01091151399"
              style={{ color: 'black' }}
              onClick={() => {
                if (process.env.NODE_ENV === 'production') {
                  ReactGA.event({
                    category: '전화',
                    action: '장인태 전화 클릭',
                    label: '장인태',
                  });
                }
              }}
            >
              <Fade delay={500} bottom>
                <PText style={{ backgroundColor: '#ffffff' }}>
                  어머니, <SText>장인태 </SText>
                  <FaPhone size="1.5vh" />
                </PText>
              </Fade>
            </a>
          </PhoneInfoContainer>
        </div>
        <div>
          <a
            href="tel:01089922320"
            onClick={() => {
              if (process.env.NODE_ENV === 'production') {
                ReactGA.event({
                  category: '전화',
                  action: '이하랑 전화 클릭',
                  label: '이하랑',
                });
              }
            }}
          >
            <Fade delay={500} bottom>
              <CallHarang />
            </Fade>
          </a>
          <PhoneInfoContainer>
            <a
              href="tel:01042283771"
              style={{ color: 'black' }}
              onClick={() => {
                if (process.env.NODE_ENV === 'production') {
                  ReactGA.event({
                    category: '전화',
                    action: '이윤창 전화 클릭',
                    label: '이윤창',
                  });
                }
              }}
            >
              <Fade delay={500} bottom>
                <PText
                  style={{
                    backgroundColor: '#ffffff',
                    borderBottom: '1px solid black',
                  }}
                >
                  아버지, <SText>이윤창 </SText>
                  <FaPhone size="1.5vh" />
                </PText>
              </Fade>
            </a>
            <a
              href="tel:01097273771"
              style={{ color: 'black' }}
              onClick={() => {
                if (process.env.NODE_ENV === 'production') {
                  ReactGA.event({
                    category: '전화',
                    action: '이희숙 전화 클릭',
                    label: '이희숙',
                  });
                }
              }}
            >
              <Fade delay={500} bottom>
                <PText style={{ backgroundColor: '#ffffff' }}>
                  어머니, <SText>이희숙 </SText>
                  <FaPhone size="1.5vh" />
                </PText>
              </Fade>
            </a>
          </PhoneInfoContainer>
        </div>
      </CallContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0;
`;

const Text = styled.p`
  font-family: 'KyoboHandwriting2020A';
`;

const PText = styled.p`
  font-family: Pretendard;
  font-size: 2vh;
`;

const SText = styled.span`
  font-family: Pretendard;
  font-weight: bold;
  font-size: 2vh;
`;

const Title = styled(Text)`
  font-size: 2.5vh;
  text-align: center;
  color: #9d7e5f;
`;

const ContentText = styled(Text)`
  font-size: 2vh;
  text-align: center;
  line-height: 3vh;
`;

const ContentTextContainer = styled.div`
  margin: 30px 0;
`;

const CallContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CallChan = styled.div`
  background-color: blue;
  background-image: url(${CALL_CHAN});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 15vh;
  height: 15vh;
`;

const CallHarang = styled.div`
  background-color: blue;
  background-image: url(${CALL_HARANG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 15vh;
  height: 15vh;
`;

const PhoneInfoContainer = styled.div`
  text-align: center;
  line-height: 5vh;
`;

export default PhoneCall;
