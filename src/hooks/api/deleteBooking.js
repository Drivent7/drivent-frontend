import useAsync from '../useAsync';
import useToken from '../useToken';

import * as BookingApi from '../../services/bookingApi';

export default function delBooking() {
  const token = useToken();

  const {
    data: deleteBooking,
    loading: deleteBookingLoading,
    error: deleteBookingError,
    act: deleteBookingact,
  } = useAsync(() => BookingApi.deleteBookings(token));

  return {
    deleteBooking,
    deleteBookingLoading,
    deleteBookingError,
    deleteBookingact,
  };
};
