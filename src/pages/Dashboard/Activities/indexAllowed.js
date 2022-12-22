import { useEffect } from 'react';
import useEvent from '../../../hooks/api/useEvent';
import useTicket from '../../../hooks/api/useTicket';
import Button from '../../../components/ticket/Button';
import None from '../../../components/Payment/None';
export default function IndexAllowed() {
  const { ticket } = useTicket();
  const { event } = useEvent();

  useEffect(() => {}, [event, ticket]);
  const start = new Date(event?.startsAt);
  const daysEvent = start.toLocaleDateString('pt-BR').replaceAll('/2022', '');
  return (
    <>
      {ticket?.TicketType.isRemote ? (
        <None>
          Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
        </None>
      ) : (
        <Button>{daysEvent}</Button>
      )}
    </>
  );
}
