import useAsync from '../useAsync';
import useToken from '../useToken';

import * as BookingApi from '../../services/bookingApi';

export default function usePostBooking() {
  const token = useToken();

  const {
    data: postBookingData,
    loading: postBookingLoading,
    error: postBookingError,
    act: postBookingAct,
  } = useAsync((data) => BookingApi.postBookings(data, token), false);

  return {
    postBookingData,
    postBookingLoading,
    postBookingError,
    postBookingAct,
  };
}
