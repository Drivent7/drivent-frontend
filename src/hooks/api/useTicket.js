import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticektApi.js';

export default function useTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket,
  } = useAsync(() => ticketApi.getTicketInfo(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket
  };
}
