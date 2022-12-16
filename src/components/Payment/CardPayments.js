import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0%;

  section {
    width: 100%;
    display: flex;
    align-items: center;

  }

  p{
    font-size: 20px;
    color: #8e8e8e;
    margin: 20px 0px;
  }

  button {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    color: #151515;
    font-size: 18px;
    margin-top: 0%;
  }
`;
