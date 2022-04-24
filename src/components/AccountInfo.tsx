import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useCopyToClipboard } from 'react-use';
import { FaRegCopy } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { useMemo } from 'react';
import ReactGA from 'react-ga4';

const AccountInfo = () => {
  const [_, _onCopyToClipboard] = useCopyToClipboard();

  const _onCopyClipboard = (text: string) => {
    _onCopyToClipboard(text);

    alert('계좌번호가 복사되었습니다.');

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: '계좌번호',
        action: '복사',
        label: text,
      });
    }
  };

  const accInfoChanArr = useMemo(
    () => [
      {
        bankName: '농협은행',
        bankNumber: '204011-52-032787',
        rule: '어머니',
        name: '장인태',
        isPay: false,
      },
    ],
    [],
  );

  const accInfoRangArr = useMemo(
    () => [
      {
        bankName: '카카오뱅크',
        bankNumber: '3333-13-2995153',
        rule: '신부',
        name: '이하랑',
        isPay: true,
      },
      {
        bankName: '신한은행',
        bankNumber: '110-004-140994',
        rule: '아버지',
        name: '이윤창',
      },
      {
        bankName: '농협은행',
        bankNumber: '204011-56-061885',
        rule: '어머니',
        name: '이희숙',
      },
    ],
    [],
  );

  return (
    <Container>
      <Fade delay={500} bottom cascase>
        <Title>{'= FOR YOUR HEART ='}</Title>
      </Fade>
      <Divider />
      <CovidContainer>
        <Fade delay={500} bottom cascase>
          <CovidText>코로나19가 장기화되는 중 진행하는 예식이</CovidText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <CovidText>부담으로 전해지지 않을까 마음이 무겁습니다.</CovidText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <CovidText>혹여 참석이 어려우시더라도</CovidText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <CovidText>마음의 부담은 내려놓으시고,</CovidText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <CovidText>두 사람의 소중한 시작을 위해 전해주시는 마음</CovidText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <CovidText>감사히 오래도록 간직하겠습니다.</CovidText>
        </Fade>
      </CovidContainer>
      <Divider />
      <Accodion
        style={{ backgroundColor: '#edeef1', border: '1px solid #d7dae3' }}
      >
        <details>
          <Summary>신랑측</Summary>
          {accInfoChanArr.map((item, index) => {
            return (
              <AccountContainer
                style={{ margin: index === 1 ? '30px 0' : 0 }}
                key={`chan_${index}`}
              >
                <Fade delay={500} bottom>
                  <AccountTop>
                    <div>
                      <PText>{item.bankName}</PText>
                      <PText>{item.bankNumber}</PText>
                    </div>
                    <div>
                      <PText style={{ fontSize: '1.5vh', textAlign: 'right' }}>
                        {item.rule}
                      </PText>
                      <PText>{item.name}</PText>
                    </div>
                  </AccountTop>
                  <AccountBottom>
                    {item.isPay && (
                      <PayBox
                        href="https://qr.kakaopay.com/Ej7wejp0v"
                        target="_blank"
                        onClick={() => {
                          if (process.env.NODE_ENV === 'production') {
                            ReactGA.event({
                              category: '카카오페이',
                              action: '클릭',
                            });
                          }
                        }}
                      >
                        <PText>카카오페이 송금</PText>
                      </PayBox>
                    )}
                    <CopyBox
                      onClick={() =>
                        _onCopyClipboard(item.bankNumber.replaceAll('-', ''))
                      }
                    >
                      <PText>
                        <FaRegCopy size="1.5vh" /> 계좌번호 복사
                      </PText>
                    </CopyBox>
                  </AccountBottom>
                </Fade>
              </AccountContainer>
            );
          })}
        </details>
      </Accodion>
      <Accodion
        style={{ backgroundColor: '#f1edee', border: '1px solid #e5d5da' }}
      >
        <details>
          <Summary>신부측</Summary>
          {accInfoRangArr.map((item, index) => {
            return (
              <AccountContainer
                style={{ margin: index === 1 ? '30px 0' : 0 }}
                key={`rang_${index}`}
              >
                <Fade delay={500} bottom>
                  <AccountTop>
                    <div>
                      <PText>{item.bankName}</PText>
                      <PText>{item.bankNumber}</PText>
                    </div>
                    <div>
                      <PText style={{ fontSize: '1.5vh', textAlign: 'right' }}>
                        {item.rule}
                      </PText>
                      <PText>{item.name}</PText>
                    </div>
                  </AccountTop>
                  <AccountBottom>
                    {item.isPay && (
                      <PayBox
                        href="https://qr.kakaopay.com/Ej7wejp0v"
                        target="_blank"
                        onClick={() => {
                          if (process.env.NODE_ENV === 'production') {
                            ReactGA.event({
                              category: '카카오페이',
                              action: '클릭',
                            });
                          }
                        }}
                      >
                        <PText>카카오페이 송금</PText>
                      </PayBox>
                    )}
                    <CopyBox
                      onClick={() =>
                        _onCopyClipboard(item.bankNumber.replaceAll('-', ''))
                      }
                    >
                      <PText>
                        <FaRegCopy size="1.5vh" /> 계좌번호 복사
                      </PText>
                    </CopyBox>
                  </AccountBottom>
                </Fade>
              </AccountContainer>
            );
          })}
        </details>
      </Accodion>
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

const CovidContainer = styled.div`
  width: 85%;
  line-height: 4vh;
`;

const CovidText = styled(Text)`
  font-size: 2.5vh;
  text-align: center;
`;

const Divider = styled.span`
  background-color: #9d7e5f;
  width: 40%;
  height: 1px;
  margin: 30px 0;
  opacity: 0.3;
`;

const Summary = styled.summary`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  outline: none;

  cursor: pointer;
`;

const AccountContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(157, 126, 95, 0.3);
  border-radius: 10px;
`;

const AccountTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AccountBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const PayBox = styled.a`
  background-color: #fce404;
  flex: 1;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  color: #000000;
`;

const CopyBox = styled.div`
  background-color: #f0f0f0;
  flex: 1;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const Accodion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;

  margin-bottom: 15px;

  details {
    transition: height 0.5s ease;
    overflow: hidden;
  }

  details summary::marker {
    font-size: 0;
  }
`;

export default AccountInfo;
