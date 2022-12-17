import styled from 'styled-components';
import { useState } from 'react';
import useTicketType from '../../hooks/api/useTicketType';
import Header from './header';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import Button from './Button';
import { toast } from 'react-toastify';

export default function Ticket() {
  const [selected, setSelected] = useState('white');
  const [total, setTotal] = useState(0);
  const [ticketId, setTicketId] = useState(0);
  const { ticketType } = useTicketType();
  const { saveTicketLoading, saveTicket } = useSaveTicket();

  function changeSelected(price, id) {
    if (selected === 'white') {
      setSelected('#FFEED2');
    } else {
      setSelected('white');
    }
    setTotal(price);
    setTicketId(id);
  }

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
          type.isRemote ?
            <GreyDiv onClick={() => changeSelected(type.price, type.id)} color={selected} key={type.id}>Online<GreyText>R$ {type.price}</GreyText></GreyDiv> :
            <GreyDiv key={type.id}>Presencial<GreyText>R$ {type.price}</GreyText></GreyDiv>

        ))}
      </Row>
      {selected === '#FFEED2' ?
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

const GreyText = styled.p`
margin: 5px 0px;
font-family: 'Roboto';
color: #8E8E8E;

`;

const GreyDiv = styled.div`
font-family: 'Roboto';
box-sizing: border-box;

margin: 0px 24px 0 0;
display: flex;
flex-direction: column;
justify-content: center;
width: 145px;
height: 145px;
text-align: center;

background-color: ${props => props.color};
border: 1px solid #CECECE;
border-radius: 20px;
`;

