import CardPayments from '../../../components/Payment/CardPayments';
import Header from '../../../components/ticket/header';
import CardComponent from '../../../components/Payment/CreditCard/CardComponent';
export default function CardPayment() {
  return (
    <>
      <Header>Ingresso e pagamento</Header>
      <CardPayments>
        <p>Ingresso Escolhido</p>
        <section></section>
        <p>Pagamento</p>
        <section>
          <CardComponent />
        </section>
      </CardPayments>
    </>
  );
}
