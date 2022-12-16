import { useEffect, useState } from 'react';
import instance from '../../../services/api';
import styled from 'styled-components';
import { getTicketInfo } from '../../../services/ticektApi';

export default function Hotel() {
  const [isPaid, setIsPaid] = useState('');
  const ticket = {
    id: 1,
    ticketTypeId: 2,
    enrollmentId: 3,
    status: 'PAID',
    TicketType: {
      id: 1,
      name: 'nomezin',
      price: 500,
      isRemote: false,
      includesHotel: true
    },
  };

  // const TicketType = {
  //   id: 1,
  //   name: 'nomezin',
  //   price: 500,
  //   isRemote: false,
  //   includesHotel: true
  // };

  //buscar o isPaid no ticketStatus
  useEffect(() => {
    const promise = getTicketInfo()
      .then(res => {
        // setIsPaid(res.data.status);
        console.log('message');
        console.log(res.data);
      });

    setIsPaid(false);
  });

  return (
    <>
      {(ticket.status !== 'PAID') ? (
        <Wrapper>
          <MessageWrapper>
            <p> Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem </p>
          </MessageWrapper>
        </Wrapper>

      ) : (

        <>
          {(ticket.TicketType.includesHotel === true) ? (
            <Wrapper>
              <MessageWrapper>
                <p> Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades </p>
              </MessageWrapper>
            </Wrapper>
          ) : (
            <div>
              bolinha bolinha bolinha bolinha bolinha bolinha
            </div>
          )
          }
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;
`;

const MessageWrapper = styled.div`
max-width: 450px;
height: 50px;

p{
  font-size: 20px;
  font-weight: 400;
  color: #8E8E8E;
  text-align: center;
  flex-wrap: wrap;
}
`;
