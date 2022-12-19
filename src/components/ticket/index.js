import styled from 'styled-components';
import { useState } from 'react';
import useTicketType from '../../hooks/api/useTicketType';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import Button from './Button';
import { toast } from 'react-toastify';
import TicketType from './TicketType';
import { GreyText } from './GreyText';

export default function Ticket() {
  const [confirm, setConfirm] = useState(false);
  const [selected, setSelected] = useState('');
  const [total, setTotal] = useState(0);
  const [ticketId, setTicketId] = useState(0);
  const { ticketType } = useTicketType();
  const { saveTicketLoading, saveTicket } = useSaveTicket();

  async function sendInfo() {
    const body = { ticketTypeId: ticketId };

    try {
      await saveTicket(body);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }
  return (
    <>
      <Header>Ingresso e pagamento</Header>
      <GreyText>Primeiro, escolha sua modalidade de ingresso</GreyText>
      <Row>
        {ticketType?.map(type => (
          <TicketType
            {...type}
            key={type.id}
            confirm={confirm}
            setConfirm={setConfirm}
            setTotal={setTotal}
            setTicketId={setTicketId}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </Row>

      {confirm ?
        <>
          <GreyText>Fechado! O total ficou em <strong>R$ {total}</strong>. Agora é só confirmar:</GreyText>
          <Button onClick={() => sendInfo()} disabled={saveTicketLoading}>
            RESERVAR INGRESSO
          </Button>
        </>
        : ''}

    </>
  );
}

const Row = styled.div`
display: flex;
flex-direction: row;
margin: 10px 0 30px;
`;

const Header = styled.h1`
font-family: 'Roboto';
font-size: 34px;
margin-bottom:40px;
`;
