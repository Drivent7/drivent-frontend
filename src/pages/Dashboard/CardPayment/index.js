import CardPayments from '../../../components/Payment/CardPayments';
import Header from '../../../components/ticket/header';
export default function CardPayment() {
  return (
    <>
      <Header>Ingresso e pagamento</Header>
      <CardPayments>
        <p>
          Ingresso Escolhido
        </p>
      </CardPayments>
    </>
  );
}
