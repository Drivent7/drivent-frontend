import styled from 'styled-components';
import { signInWithPopup } from 'firebase/auth';
import { GoMarkGithub } from 'react-icons/go';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';

// Import the functions you need from the SDKs you need
import { auth } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';
import { signInWithGitHubApi } from '../../services/authGitHubApi';
import { useState } from 'react';
import { useEffect } from 'react';

export default function GitHubButton() {
  //  LOGIN GITHUB FIREBASE

  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const signIn = signInWithGithub();

    signIn
      .then((r) => {
        const token = r.user.accessToken;
        const email = r.user.email;
        const userData = signInWithGitHubApi(email, token)
          .then((res) => {
            console.log(res);
            setUserData(res);
            navigate('/dashboard');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <GitHubWrapper onClick={(e) => handleSignIn(e)}>
      <div>
        <p>Login with GitHub</p>
        <GoMarkGithub />
      </div>
    </GitHubWrapper>
  );
}

const GitHubWrapper = styled.button`
  width: 200px;
  height: 30px;
  background-color: #000;
  margin-top: 10px;
  border-radius: 5px;
  div {
    display: flex;
    justify-content: space-around;
    color: #f6f6f6;
  }
`;
