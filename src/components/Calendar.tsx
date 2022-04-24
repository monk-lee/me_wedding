import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import CALENDAR_TOP from '../assets/images/calendar_top.jpg';

import 'react-calendar/dist/Calendar.css';
import Countdown from './Countdown';

const MyCalendar = () => {
  return (
    <Container>
      <Fade delay={500} bottom cascase>
        <Title>{'= WEDDING DAY ='}</Title>
      </Fade>
      <Fade delay={500} bottom>
        <Image src={CALENDAR_TOP} alt="웨딩" />
      </Fade>
      <Fade delay={500} bottom>
        <Calendar
          value={new Date('2022-06-26')}
          calendarType="US"
          formatDay={(locale, date) => dayjs(date).format('D')}
          minDate={new Date('2022-06-01')}
          maxDate={new Date('2022-06-30')}
          minDetail="month"
          maxDetail="month"
          showNeighboringMonth={false}
          nextLabel={null}
          next2Label={null}
          prevLabel={null}
          prev2Label={null}
          tileDisabled={({ date }) => dayjs(date).format('D') !== '26'}
        />
      </Fade>
      <Fade delay={500} bottom>
        <LocationContainer>
          <Countdown />
        </LocationContainer>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px;
  padding-bottom: 30px;
  .react-calendar {
    width: 100%;
    border: none;
    margin-bottom: 30px;
    font-family: Pretendard;
  }

  .react-calendar__navigation__label {
    font-size: 2.5vh;
    font-weight: bold;
    color: #9d7e5f;
    font-family: Pretendard;
  }

  .react-calendar__navigation button:disabled {
    background-color: white;
  }

  .react-calendar__month-view__weekdays {
    font-size: 2.5vh;
    color: #9d7e5f;
  }

  .react-calendar__month-view__weekdays__weekday > abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days__day {
    font-size: 2.5vh;
    color: #e0d3c1;
  }

  .react-calendar__tile {
    line-height: 3vh;
    font-family: Pretendard;
  }

  .react-calendar__tile--active {
    background-color: #f0eae1;
    color: #9d7e5f;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #f0eae1;
  }

  .react-calendar__tile:disabled {
    background-color: white;
  }
`;

const Text = styled.p`
  font-family: 'KyoboHandwriting2020A';
`;

const Title = styled(Text)`
  font-size: 2.5vh;
  text-align: center;
  color: #9d7e5f;
`;

const LocationContainer = styled.div`
  background-color: #f8f8f8;
  line-height: 4vh;
`;

const Image = styled.img`
  width: 100%;
  margin: 2vh 0;
`;

const LocationTitle = styled(Text)`
  font-size: 2.3vh;
  text-align: center;
  color: #9d7e5f;
`;

const LocationText = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  text-align: center;
`;

export default MyCalendar;
