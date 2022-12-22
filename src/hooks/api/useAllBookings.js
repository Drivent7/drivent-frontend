import useAsync from '../useAsync';
import useToken from '../useToken';

import * as BookingApi from '../../services/bookingApi';

export default function useAllBookings() {
  const token = useToken();

  const {
    data: Booking,
    loading: BookingLoading,
    error: BookingError,
    act: getBooking,
  } = useAsync((data) => BookingApi.getBookings(data, token));

  return {
    Booking,
    BookingLoading,
    BookingError,
    getBooking,
  };
}
