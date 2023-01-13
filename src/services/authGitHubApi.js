import api from './api';

export async function signInWithGitHubApi(email, token) {
  const response = await api.post('/auth/sign-in/github', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
      Email: email
    },
  });
  console.log('🚀🚀🚀 ~ file: authGitHubApi.js:6 ~ signInWithGitHubApi ~ response', response);
  return response.data;
}
//
