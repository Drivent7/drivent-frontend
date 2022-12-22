import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useGetRooms() {
  const token = useToken();

  const {
    data: RoomData,
    loading: RoomLoading,
    error: RoomError,
    act: RoomAct,
  } = useAsync(() => hotelApi.getHotelRooms(token));

  return {
    RoomData,
    RoomLoading,
    RoomError,
    RoomAct,
  };
}
