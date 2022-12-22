import CardPayments from '../../../components/Payment/CardPayments';
import Header from '../../../components/ticket/header';
import CardComponent from '../../../components/Payment/CreditCard/CardComponent';
import useTicket from '../../../hooks/api/useTicket';
import useGetPayment from '../../../hooks/api/useGetPayment.js';
import useEnrollment from '../../../hooks/api/useEnrollment.js';
import { useContext } from 'react';
import { useContextPayment } from '../../../components/Payment/useContextPayment';
import image from '../../../assets/images/green.png';

export default function CardPayment() {
  const { ticket } = useTicket();
  const { finalPayment } = useContext(useContextPayment);

  function complement(ticket) {
    if (ticket?.TicketType.name === 'Sem Hotel' || ticket?.TicketType.name === 'Com Hotel') {
      return 'Presencial + ';
    }
    return;
  }

  return (
    <>
      <Header>Ingresso e pagamento</Header>
      <CardPayments>
        <p>Ingresso Escolhido</p>
        <header>
          <h1>
            {complement(ticket)}
            {ticket?.TicketType.name}
          </h1>
          <h2>R$ {ticket?.TicketType.price}</h2>
        </header>
        <p>Pagamento</p>
        <section>
          {finalPayment ? (
            <nav>
              <img src={image} alt=""></img>
              <aside>
                <h3>Pagamento confirmado!</h3>
                <h4>Prossiga para escolha de hospedagem e atividades</h4>
              </aside>
            </nav>
          ) : (
            <CardComponent />
          )}
        </section>
      </CardPayments>
    </>
  );
}
