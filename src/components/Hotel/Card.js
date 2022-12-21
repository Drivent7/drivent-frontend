import styled from 'styled-components';

export default function Card(hotel) {
  return (
    <CardHotel>
      <img src={hotel.image} alt={hotel.name}/>
      <h4>{hotel.name}</h4>
    </CardHotel>
  );
}

const CardHotel = styled`
  margin-top: 8px !important;
`;
