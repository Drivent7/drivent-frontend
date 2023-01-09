import useGetPayment from '../../../hooks/api/useGetPayment';
import None from '../../../components/Payment/None';
import IndexAllowed from './indexAllowed';
import { useEffect } from 'react';
export default function Activities() {
  const { getPaymentData } = useGetPayment();
  useEffect(() => {}, [getPaymentData]);
  return (
    <>
      {getPaymentData ? (
        <IndexAllowed />
      ) : (
        <None>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</None>
      )}
    </>
  );
}
