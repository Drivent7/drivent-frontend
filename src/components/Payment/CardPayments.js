import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0%;
  font-family: Roboto, sans-serif;

  header {
    width: 290px;
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffeed2;
    border-radius: 20px;
    font-family: Roboto, sans-serif;
    margin-left: 4%;
  }

  nav {
    display: flex;
  }

  aside {
    display:flex;
    flex-direction:column;
  }

  img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }

  h1 {
    font-size: 16px;
    color: #454545;
    margin-bottom: 8px
  }

  h2 {
    font-size: 14px;
    color: #898989;
  }

  h3 {
    font-family: Roboto, sans-serif;
    font-size:  16px;
    color: #454545;
    font-weight: bold;
  }

  h4 {
    font-family: Roboto, sans-serif;
    font-size:  16px;
    color: #454545;
    font-weight: 400;
  }

  section {
    width: 100%;
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
