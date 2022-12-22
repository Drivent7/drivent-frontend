import useAsync from '../useAsync';
import useToken from '../useToken';

import * as BookingApi from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();

  const {
    data: Booking,
    loading: BookingLoading,
    error: BookingError,
    act: getBooking,
  } = useAsync(() => BookingApi.getBookingInfo(token));

  return {
    Booking,
    BookingLoading,
    BookingError,
    getBooking,
  };
}
