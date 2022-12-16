
import useEnrollment from '../../../hooks/api/useEnrollment';
import None from '../../../components/Payment/None';

export default function Payment() {
  const validation = new useEnrollment();
  //validation.enrollment chumbar isso depois.
  return <>{null ? 'Teste' : <None>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</None>}</>;
}

