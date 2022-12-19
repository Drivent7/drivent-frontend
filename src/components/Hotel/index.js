import styled from 'styled-components';
import { useState } from 'react';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import Button from './Button';
import { toast } from 'react-toastify';
import useHotels from '../../hooks/api/useHotels';

export default function Ticket() {
  const [selected, setSelected] = useState('white');
  const [hotelId, setHotelId] = useState(0);
  const { hotels } = useHotels();

  function changeSelected(id) {
    if (selected === 'white') {
      setSelected('#FFEED2');
    } else {
      setSelected('white');
    }
    setHotelId(id);
  }
  return (
    <>
      <Header>Escolha de hotel e quarto</Header>
      <GreyText>Primeiro, escolha seu hotel</GreyText>
      <Row>
        {hotels?.map(hotel => (
          <GreyDiv onClick={() => changeSelected(hotel.id)} color={selected} key={hotel.id}> <img src={hotel.image} alt={hotel.name}/>{hotel.name}<GreyText> ..... </GreyText></GreyDiv>
        ))}
      </Row>

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

const Header = styled.h1`
font-family: 'Roboto';
font-size: 34px;
margin-bottom:40px;
`;
