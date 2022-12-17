import api from './api';

export async function getHotelInfo(body, token) {
  const response = await api.post('/hotels', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
