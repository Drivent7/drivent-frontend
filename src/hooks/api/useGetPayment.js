import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketApi from '../../services/ticketApi';

export default function useGetPayment() {
  const token = useToken();
  const {
    data: getPaymentData,
    loading: getPaymentLoading,
    error: getPaymentError,
    act: getPaymentAct,
  } = useAsync(() => ticketApi.getPayment(token));

  return {
    getPaymentData,
    getPaymentLoading,
    getPaymentError,
    getPaymentAct,
  };
}
