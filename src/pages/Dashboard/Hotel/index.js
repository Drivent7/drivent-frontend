import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket.js';

export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <>
      {!ticket ? (
        <>Loading...</>
      ) : (
        <>
          {ticket.status !== 'PAID' ? (
            <Wrapper>
              <MessageWrapper>
                <p> Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem </p>
              </MessageWrapper>
            </Wrapper>
          ) : (
            <>
              {ticket.TicketType.includesHotel === true ? (
                <Wrapper>
                  <MessageWrapper>
                    <p> Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades </p>
                  </MessageWrapper>
                </Wrapper>
              ) : (
                <div>ACHO Q AQUI ENTRA A PRÓXIMA TAREFA DE APRESENTAR OS HOTÉIS</div>
              )}
            </>
          )}
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

  p {
    font-size: 20px;
    font-weight: 400;
    color: #8e8e8e;
    text-align: center;
    flex-wrap: wrap;
  }
`;
