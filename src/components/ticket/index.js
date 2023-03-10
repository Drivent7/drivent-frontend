import styled from 'styled-components';
import { useState } from 'react';
import useTicketType from '../../hooks/api/useTicketType';
import Header from './header';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import Button from './Button';
import { toast } from 'react-toastify';
import { GreyText } from './GreyText';
import { TicketCard } from './TicketCard';
import useGetPayment from '../../hooks/api/useGetPayment';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useContextPayment } from '../Payment/useContextPayment';
import CardPaymentPaid from '../../pages/Dashboard/CardPaymentPaid';

export default function Ticket() {
  const [confirm, setConfirm] = useState(false);
  const [presential, setPresential] = useState(false);
  const [roomPrice, setRoomPrice] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(false);
  const [room, setRoom] = useState(false);
  const [selected, setSelected] = useState('');
  const { total, setTotal } = useContext(useContextPayment);
  const [ticketId, setTicketId] = useState(0);
  const { ticketType } = useTicketType();
  const { saveTicketLoading, saveTicket } = useSaveTicket();
  const navigate = useNavigate();
  const { getPaymentData } = useGetPayment();

  useEffect(() => {}, [getPaymentData]);

  function changeSelected(name, price, id, isRemote) {
    if (isRemote) {
      setConfirm(true);
      setPresential(false);
    } else {
      setPresential(true);
      setRoomPrice(ticketType[2].price - ticketType[1].price);
    }
    if (confirm && selected !== name) {
      setConfirm(false);
    }

    setSelected(name);
    setTicketPrice(price);
    setTotal(price);
    setTicketId(id);
  }

  function choseHotel(room) {
    if (room) {
      setTotal(ticketPrice + roomPrice);
    } else {
      setTotal(ticketPrice);
    }
    setRoom(room);
    setConfirm(true);
  }

  async function sendInfo() {
    const body = { ticketTypeId: ticketId };

    try {
      await saveTicket(body);
      toast('Informa????es salvas com sucesso!');
      navigate('/dashboard/cardpayment');
    } catch (err) {
      toast('N??o foi poss??vel salvar suas informa????es!');
    }
  }

  return (
    <>
      {getPaymentData ? (
        <CardPaymentPaid />
      ) : (
        <>
          <Header>Ingresso e pagamento</Header>
          <GreyText>Primeiro, escolha sua modalidade de ingresso</GreyText>
          <Row>
            {ticketType?.map((type) =>
              type.name === 'Online' || type.name === 'Presencial' ? (
                <TicketCard
                  key={type.id}
                  onClick={() => changeSelected(type.name, type.price, type.id, type.isRemote)}
                  color={selected === type.name ? '#FFEED2' : 'white'}
                >
                  {type.name}
                  <GreyText>R$ {type.price}</GreyText>
                </TicketCard>
              ) : (
                ''
              ),
            )}
          </Row>
          {presential ? (
            <>
              <GreyText>??timo! Agora escolha sua modalidade de hospedagem</GreyText>
              <Row>
                <TicketCard onClick={() => choseHotel(false)} color={room ? 'white' : '#FFEED2'}>
                  Sem Hotel
                  <GreyText>+ R$ 0</GreyText>
                </TicketCard>
                <TicketCard onClick={() => choseHotel(true)} color={room ? '#FFEED2' : 'white'}>
                  Com Hotel
                  <GreyText>+ R$ {roomPrice}</GreyText>
                </TicketCard>
              </Row>
            </>
          ) : (
            ''
          )}
          {confirm ? (
            <>
              <GreyText>
                Fechado! O total ficou em <strong>R$ {total}</strong>. Agora ?? s?? confirmar:
              </GreyText>
              <Button onClick={() => sendInfo()} disabled={saveTicketLoading}>
                RESERVAR INGRESSO
              </Button>
            </>
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 30px;
`;
