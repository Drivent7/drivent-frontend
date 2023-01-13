import api from './api';

export async function makeReservation(activityId) {
  const response = await api.post(`/activity/${activityId}`);
  return response.data;
}
