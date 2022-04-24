import styled from 'styled-components';

const CopyRight = () => {
  return (
    <Container>
      <PText>Copyrightⓒ 2022. MONK_LEE. All rights reserved.</PText>
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

const PText = styled.p`
  font-size: 1.5vh;
  font-family: Pretendard;
  color: rgba(0, 0, 0, 0.1);
`;

export default CopyRight;
