import api from './api';

export async function cancelledBookRoom(bookingId) {
  const response = await api.put(`/${bookingId}`);
  return response.data;
}

export async function getHotelRoomsByRoomApi(token, hotelId) {
  const response = await api.get(`/rooms/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
