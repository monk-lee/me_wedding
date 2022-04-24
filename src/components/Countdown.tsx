import dayjs from 'dayjs';
import styled from 'styled-components';
import { useCountdown } from '../hooks/useCountdown';

const FINAL_DAY = dayjs('2022-06-26 11:00:00').toDate().getTime();

const Countdown = () => {
  const [days, hours, minutes, seconds] = useCountdown(FINAL_DAY);

  return (
    <>
      <LocationTitle>결혼식까지</LocationTitle>
      <CountContainer>
        <Text style={{ fontSize: '2.8vh' }}>{days}</Text>
        <Text style={{ fontSize: '2.3vh' }}>일</Text>
        <Text style={{ fontSize: '2.8vh', marginLeft: '10px' }}>{hours}</Text>
        <Text style={{ fontSize: '2.3vh', margin: '0 10px' }}>:</Text>
        <Text style={{ fontSize: '2.8vh' }}>{minutes}</Text>
        <Text style={{ fontSize: '2.3vh', margin: '0 10px' }}>:</Text>
        <Text style={{ fontSize: '2.8vh' }}>{seconds}</Text>
      </CountContainer>
    </>
  );
};

const Text = styled.p`
  font-family: 'KyoboHandwriting2020A';
`;

const LocationTitle = styled(Text)`
  font-size: 2.3vh;
  text-align: center;
  color: #9d7e5f;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Countdown;
