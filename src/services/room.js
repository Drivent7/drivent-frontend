import api from './api';

export async function cancelledBookRoom(bookingId) {
  const response = await api.put(`/${bookingId}`);
  return response.data;
}
