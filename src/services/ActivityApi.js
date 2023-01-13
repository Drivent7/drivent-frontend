import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function makeReservation(activityId, token) {
  const response = await api.post(`/activity/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteReservation(activityId, token) {
  const response = await api.delete(`/activity/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
