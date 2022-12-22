import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function usePostPayment() {
  const token = useToken();

  const {
    data: paymentData,
    loading: paymentLoading,
    error: paymentError,
    act: paymentAct
  } = useAsync((data) => ticketApi.postPayment(data, token), false);

  return {
    paymentData,
    paymentLoading,
    paymentError,
    paymentAct
  };
}
