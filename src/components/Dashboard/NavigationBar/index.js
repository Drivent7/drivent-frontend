import { Link } from 'react-router-dom';
import useGetPayment from '../../../hooks/api/useGetPayment';
import styled from 'styled-components';

import { FaFileContract, FaMoneyBill, FaBed, FaCalendarWeek, FaCertificate } from 'react-icons/fa';

import NavigationButton from './NavigationButton';

export default function NavigationBar() {
  const { getPaymentData } = useGetPayment();

  return (
    <Container>
      <NavigationButton value="subscription">
        <FaFileContract />
        <span>Inscrição</span>
      </NavigationButton>

      <NavigationButton value="payment">
        <FaMoneyBill />
        <span>Pagamento</span>
      </NavigationButton>

      <NavigationButton value="hotel">
        <FaBed />
        <span>Hotel</span>
      </NavigationButton>

      <NavigationButton value="activities">
        <FaCalendarWeek />
        <span>Atividades</span>
      </NavigationButton>

      <NavigationButton value="certificate">
        <FaCertificate />
        <span>Certificado</span>
      </NavigationButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100px;
  flex-shrink: 0;
  justify-content: flex-start;

  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;
