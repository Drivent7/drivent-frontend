import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket.js';
import Hotels from '../../../components/Hotel/index.js';
import RoomCard from '../../../components/Rooms/RoomCard.js';
import HotelHeader from '../../../components/HeaderHotels.js';
import { useState } from 'react';

import hotel1 from '../../../assets/images/hotel1.jpg';

export default function Hotel() {
  const { ticket } = useTicket();
  const [roomReserved, setRoomReserved] = useState(false);

  function toggleScreen() {
    setRoomReserved(false);
  }

  async function roomCancelled(bookingId = 1) {
    setRoomReserved(true);
  }

  return (
    <>
      {!ticket || ticket.status !== 'PAID' ? (
        <Wrapper>
          <MessageWrapper>
            <p> Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem </p>
          </MessageWrapper>
        </Wrapper>
      ) : (
        <>
          {ticket.TicketType.includesHotel !== true ? (
            <Wrapper>
              <MessageWrapper>
                <p> Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades </p>
              </MessageWrapper>
            </Wrapper>
          ) : (
            <>
              {roomReserved ? (
                <div>
                  <HotelHeader />
                  ACHO Q AQUI ENTRA A PRÓXIMA TAREFA DE APRESENTAR OS HOTÉIS
                  <RoomWrapper>
                    <Text>Ótima pedida.Escolha o quarto do hotel!</Text>
                    <div>
                      <RoomCard />
                    </div>
                  </RoomWrapper>
                  <Button onClick={toggleScreen}>Reservar quarto</Button>
                </div>
              ) : (
                <>
                  <HotelHeader />
                  <Hotels />

                  {!roomReserved ? (
                    <div>
                      <RoomWrapper>
                        <Text>Ótima pedida.Escolha o quarto do hotel!</Text>
                        <div>
                          <RoomCard />
                        </div>
                      </RoomWrapper>
                      <Button onClick={toggleScreen}>Reservar quarto</Button>
                    </div>
                  ) : (
                    <div>
                      <>
                        <Text>Você já escolheu seu Quarto:</Text>
                        <HotelCardResume>
                          <img src={hotel1} alt={hotel1} />
                          <HotelTitle>
                            <h4>Driven Resort</h4>
                          </HotelTitle>
                          <RoomReserved>
                            <h4>Quarto reservado</h4>
                            <p>101 Double</p>
                          </RoomReserved>
                          <PeopleInTheRoom>
                            <h4>Pessoas no seu quarto</h4>
                            <p>Você e mais um</p>
                          </PeopleInTheRoom>
                        </HotelCardResume>
                        <Button onClick={roomCancelled}>Trocar de quarto</Button>
                      </>
                    </div>
                  )}
                </>
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

const RoomWrapper = styled.div`
  width: 850px;
  height: 300px;
  margin-top:50px;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Text = styled.p`
  color: #8e8e8e;
  font-weight: 400;
  font-size: 20px;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #e0e0e0;
  font-size: 20px;
  font-weight: 400;
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin: 30px 5px;
  cursor: pointer;
`;

const HotelCardResume = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  height: 350px;
  border-radius: 4px;
  background-color: #ffeed2;
  img {
    border-radius: 4px;
    width: 250px;
    height: 150px;
    display: flex;
    justify-content: center;
  }
`;

const HotelTitle = styled.h4`
  margin: 10px 0;
  h4 {
    font-size: 25px;
  }
`;
const RoomReserved = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 400;
    margin: 10px 0;
  }
  p {
    font-size: 15px;
  }
`;
const PeopleInTheRoom = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 400;
    margin: 10px 0;
  }
  p {
    font-size: 15px;
  }
`;
