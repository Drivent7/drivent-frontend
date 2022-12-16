import Ticket from '../../../components/ticket';
import useEnrollment from '../../../hooks/api/useEnrollment';
import None from '../../../components/Payment/None';

export default function Payment() {
  const validation = new useEnrollment();
  return (
    <>
      {validation.enrollment ? <Ticket /> : <None>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</None>}
    </>
    
  );
}

