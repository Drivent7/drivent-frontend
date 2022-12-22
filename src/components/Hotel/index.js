import styled from 'styled-components';
import { useContext, useState } from 'react';
import useHotels from '../../hooks/api/useHotels';
import { useContextPayment } from '../Payment/useContextPayment';

export default function Hotels() {
  const [selected, setSelected] = useState('#CECECE');
  const { hotelId, setHotelId } = useContext(useContextPayment);
  const { hotels } = useHotels();

  function changeSelected(id) {
    if (selected === '#CECECE') {
      setSelected('#FFEED2');
    }
    setHotelId(id);
  }

  return (
    <>
      <GreyText>Primeiro, escolha seu hotel</GreyText>
      <Row>
        {hotels?.map((hotel) => {
          const { Rooms } = hotel;
          let bookingCount = 0;
          let totalCapacity = 0;
          const types = {};
          let type = '';
          for (let i = 0; i < Rooms.length; i++) {
            const { Booking } = Rooms[i];
            totalCapacity += Rooms[i].capacity;
            bookingCount += Booking.length;
            if (Rooms[i].capacity === 1) {
              types.single = true;
            } else if (Rooms[i].capacity === 2) {
              types.double = true;
            } else {
              types.triple = true;
            }
          }
          const available = totalCapacity - bookingCount;
          if (types.single && types.double && types.triple) {
            type = 'Single, Double e Triple';
          }
          if (types.single && types.double && !types.triple) {
            type = 'Single e Double';
          }
          if (types.single && !types.double && types.triple) {
            type = 'Single e Triple';
          }
          if (!types.single && types.double && types.triple) {
            type = 'Double e Triple';
          }
          if (types.single && !types.double && !types.triple) {
            type = 'Single';
          }
          if (!types.single && !types.double && types.triple) {
            type = 'Triple';
          }
          if (!types.single && types.double && !types.triple) {
            type = 'Double';
          }
          return (
            <GreyDiv
              onClick={() => changeSelected(hotel.id)}
              color={selected}
              selected={hotelId}
              id={hotel.id}
              key={hotel.id}
            >
              <img src={hotel.image} alt={hotel.name} />
              <h4>{hotel.name}</h4>
              <h5>Tipos de acomodação:</h5>
              <h6>{type}</h6>
              <h5>Vagas disponíveis:</h5>
              <h6>{available}</h6>
            </GreyDiv>
          );
        })}
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
  color: #8e8e8e;
`;

const GreyDiv = styled.div`
  font-family: 'Roboto';
  box-sizing: border-box;

  margin: 0px 24px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 195px;
  height: 245px;

  background-color: ${(props) => (props.id === props.selected ? props.color : '#CECECE')};
  border: 1px solid #cecece;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 170px;
    height: 100px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  h4 {
    font-family: 'Lexend Deca';
    font-size: 16px;
    width: 170px;
    margin-bottom: 5px;
  }
  h5 {
    font-family: 'Lexend Deca';
    margin-top: 7px;
    font-size: 12px;
    width: 170px;
    font-weight: bold;
  }
  h6 {
    font-family: 'Lexend Deca';
    margin-top: 5px;
    font-size: 11.5px;
    width: 170px;
  }
`;
