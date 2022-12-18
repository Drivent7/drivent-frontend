import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket.js';

import RoomCard from '../../../components/Rooms/RoomCard.js';
export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <>
      {!ticket ? (
        <>Loading...</>
      ) : (
        <>
          {(ticket.status !== 'RESERVED') ? (
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
                  ACHO Q AQUI ENTRA A PRÓXIMA TAREFA DE APRESENTAR OS HOTÉIS
                  <RoomWrapper>
                    <Text>Ótima pedida.Escolha o quarto do hotel!</Text>
                    <div>
                      <RoomCard/>
                    </div>
                  </RoomWrapper>
                  <Button>Reservar quarto</Button>
                </div>
              )
              }
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

p{
  font-size: 20px;
  font-weight: 400;
  color: #8E8E8E;
  text-align: center;
  flex-wrap: wrap;
}
`;

const RoomWrapper = styled.div`
  width: 850px;
  height: 300px;
  margin-top: 280px;
  div{
    display: flex;
    flex-wrap:wrap;
  }
`;

const Text = styled.p`
  color: #8e8e8e;
  font-weight:400;
  font-size:20px;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color:#E0E0E0;
  font-size: 20px;
  font-weight: 400;
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin: 30px 5px;
`;
