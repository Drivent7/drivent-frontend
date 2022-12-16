import styled from 'styled-components';

export default styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #8e8e8e;
  margin-top: 30%;

  @media (max-width: 600px) {
    color: #151515;
    font-size: 18px;
    margin-top: 0%;
  }
`;
