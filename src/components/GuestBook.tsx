import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import Fade from 'react-reveal/Fade';

const WEDDING_BOT_TOKEN = process.env.REACT_APP_WEDDING_BOT;
const WEDDING_FORWARD_BOT_TOKEN = process.env.REACT_APP_WEDDING_FORWARD_BOT;

const GuestBook = () => {
  const [guestData, setGuestData] = useState<string[]>([]);

  const [inputName, setInputName] = useState('');
  const [inputContent, setInputContent] = useState('');

  const _onSendPress = () => {
    if (inputName.length === 0 || inputContent.length === 0) {
      alert('이름, 메시지를 입력해주세요.');

      return;
    }

    fetch(
      `https://api.telegram.org/bot${WEDDING_BOT_TOKEN}/sendMessage?chat_id=-1001782140630&text=${encodeURI(
        `(${inputName}) ${inputContent}`,
      )}`,
    );

    const prevGuestData = [...guestData];

    prevGuestData.push(`(${inputName})${inputContent}`);

    setGuestData(prevGuestData);

    alert('전송되었습니다.');

    setInputName('');
    setInputContent('');
  };

  useEffect(() => {
    fetch(
      `https://api.telegram.org/bot${WEDDING_FORWARD_BOT_TOKEN}/getUpdates?allowed_updates=${encodeURI(
        '["channel_post"]',
      )}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const resultData: string[] = [];

        for (let i = 0; i < data.result.length; i++) {
          if (data.result[i]?.channel_post) {
            resultData.push(data.result[i].channel_post.text);
          }
        }

        setGuestData(resultData);
      });
  }, [guestData]);

  return (
    <Container>
      <Title>{'= GUESTBOOK ='}</Title>
      <ContentTextContainer>
        <Fade delay={500} bottom cascase>
          <ContentText>따뜻한 축하의 마음을</ContentText>
        </Fade>
        <Fade delay={500} bottom cascase>
          <ContentText>남겨주세요.</ContentText>
        </Fade>
      </ContentTextContainer>
      <Divider />
      <Marquee speed={100} pauseOnHover gradient={false}>
        {guestData.map((item, index) => (
          <PText key={`guest_${index}`} style={{ marginRight: '10vh' }}>
            {item}
          </PText>
        ))}
      </Marquee>
      <Divider />
      <InputContainer>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Input
            placeholder="이름"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            maxLength={5}
            required
          />
          <Input
            placeholder="축하 메시지를 입력해주세요."
            value={inputContent}
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <Button
            style={{ height: '100%', borderRadius: 0 }}
            onClick={_onSendPress}
          >
            전송
          </Button>
        </div>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background-color: #ede9e4;
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

const ContentText = styled(Text)`
  font-size: 2vh;
  text-align: center;
  line-height: 3vh;
`;

const ContentTextContainer = styled.div`
  margin-top: 30px;
`;

const Input = styled.input`
  border-radius: 0;
  border: none;
  text-align: center;
  padding: 10px 0;
`;

const Button = styled.button`
  height: 100%;
  border-radius: 0;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #9d7e5f;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 15px;
`;

export default GuestBook;
