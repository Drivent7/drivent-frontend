import CardPayments from '../../../components/Payment/CardPayments';
import image from '../../../assets/images/green.png';
export default function CardPaymentPaid() {
  return (
    <>
      <CardPayments>
        <p>PAGAMENTO</p>
        <section>
          <nav>
            <img src={image} alt=""></img>
            <aside>
              <h3>Pagamento confirmado!</h3>
              <h4>Prossiga para escolha de hospedagem e atividades</h4>
            </aside>
          </nav>
        </section>
      </CardPayments>
    </>
  );
}
