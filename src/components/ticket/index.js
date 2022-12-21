import styled from 'styled-components';
import { useState } from 'react';
import useTicketType from '../../hooks/api/useTicketType';
import Header from './header';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import Button from './Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Ticket() {
  const [selected, setSelected] = useState('white');
  const [selected2, setSelected2] = useState('white');
  const [selected3, setSelected3] = useState('white');
  const [selected4, setSelected4] = useState('white');
  const [total, setTotal] = useState(0);
  const [ticketId, setTicketId] = useState(0);
  const { ticketType } = useTicketType();
  const { saveTicketLoading, saveTicket } = useSaveTicket();
  const navigate = useNavigate();

  function changeSelected(price, id) {
    if (selected === 'white') {
      setSelected('#FFEED2');
      setSelected2('white');
    } else {
      setSelected('white');
    }
    setTotal(price);
    setTicketId(id);
  }

  function changeSelected2(price, id) {
    if (selected2 === 'white') {
      setSelected2('#FFEED2');
      setSelected('white');
    } else {
      setSelected2('white');
    }
    setTotal(price);
    setTicketId(id);
  }

  function changeSelected3(price, id) {
    if (selected3 === 'white') {
      setSelected3('#FFEED2');
      setSelected4('white');
      setSelected('white');
    } else {
      setSelected3('white');
    }
    setTotal(price);
    setTicketId(id);
  }

  function changeSelected4(price, id) {
    if (selected4 === 'white') {
      setSelected4('#FFEED2');
      setSelected3('white');
      setSelected('white');
    } else {
      setSelected4('white');
    }
    setTotal(price);
    setTicketId(id);
  }

  async function sendInfo() {
    const body = { ticketTypeId: ticketId };
    try {
      await saveTicket(body);
      toast('Informações salvas com sucesso!');
      navigate('/dashboard/cardpayment');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }
  return (
    <>
      <Header>Ingresso e pagamento</Header>
      <GreyText>Primeiro, escolha sua modalidade de ingresso</GreyText>
      <Row>
        {ticketType?.map((type) => {
          if (type.isRemote) {
            return (
              <GreyDiv onClick={() => changeSelected(type.price, type.id)} color={selected} key={type.id}>
                {type.name}
                <GreyText>R$ {type.price}</GreyText>
              </GreyDiv>
            );
          }
          if (!type.isRemote && type.name === 'Presencial') {
            return (
              <GreyDiv onClick={() => changeSelected2(type.price, type.id)} color={selected2} key={type.id}>
                {type.name}
                <GreyText>R$ {type.price}</GreyText>
              </GreyDiv>
            );
          }
        })}
      </Row>
      {selected === '#FFEED2' ? (
        <>
          <GreyText>
            Fechado! O total ficou em <strong>R$ {total}</strong>. Agora é só confirmar:
          </GreyText>
          <Button onClick={() => sendInfo()} disabled={saveTicketLoading}>
            RESERVAR INGRESSO
          </Button>
        </>
      ) : (
        ''
      )}
      {selected2 === '#FFEED2' ? (
        <>
          <Row>
            {ticketType?.map((type) => {
              if (type.name === 'Com Hotel') {
                return (
                  <GreyDiv onClick={() => changeSelected3(type.price, type.id)} color={selected3} key={type.id}>
                    {type.name}
                    <GreyText>R$ {type.price}</GreyText>
                  </GreyDiv>
                );
              }
            })}

            {ticketType?.map((type) => {
              if (type.name === 'Sem Hotel') {
                return (
                  <GreyDiv onClick={() => changeSelected4(type.price, type.id)} color={selected4} key={type.id}>
                    {type.name}
                    <GreyText>R$ {type.price}</GreyText>
                  </GreyDiv>
                );
              }
            })}
          </Row>
          <GreyText>
            Fechado! O total ficou em <strong>R$ {total}</strong>. Agora é só confirmar:
          </GreyText>
          <Button onClick={() => sendInfo()} disabled={saveTicketLoading}>
            RESERVAR INGRESSO
          </Button>
        </>
      ) : (
        ''
      )}
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
  color: #8e8e8e;
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

  background-color: ${(props) => props.color};
  border: 1px solid #cecece;
  border-radius: 20px;
`;
