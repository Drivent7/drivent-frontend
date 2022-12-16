import styled from 'styled-components';
import useTicketType from '../../hooks/api/useTicketType';
import Header from './header';
export default function Ticket() {
  const { ticketType } = useTicketType();

  console.log(ticketType);
  return (
    <>
      <Header>Ingresso e pagamento</Header>
      <GreyText>Primeiro, escolha sua modalidade de ingresso</GreyText>
      <Row>
        {ticketType?.map(type => (
          type.isRemote ?
            <GreyDiv>Online<GreyText>R$ {type.price}</GreyText></GreyDiv> :
            <GreyDiv>Presencial<GreyText>R$ {type.price}</GreyText></GreyDiv>

        ))}
      </Row>
    </>
  );
}

const Row = styled.div`
display: flex;
flex-direction: row;
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

border: 1px solid #CECECE;
border-radius: 20px;
`;

