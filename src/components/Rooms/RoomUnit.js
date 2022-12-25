import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken.js';
import { useContextPayment } from '../Payment/useContextPayment.js';

export default function RoomUnit(room) {
  const token = useToken();
  const [selected, setSelected] = useState('#CECECE');
  const { roomId, setRoomId } = useContext(useContextPayment);

  function changeSelected(id) {
    if (selected === '#CECECE') {
      setSelected('#FFEED2');
    }
    setRoomId(id);
  }

  return (
    <RoomUnitWrapper 
      onClick = {() => changeSelected(room.room.id)} 
      color = {selected} 
      selected = {roomId} 
      id = {room.room.id}
    >
      <RoomNumber>{room.room.name}</RoomNumber>
      <RoomVacancy>
        {room.room.capacity === 1 ? (
          <>
            <ion-icon name="person"></ion-icon>
          </>
        ) : room.room.capacity === 2 ? (
          <>
            <ion-icon name="person"></ion-icon>
            <ion-icon name="person"></ion-icon>
          </>
        ) : (
          <>
            <ion-icon name="person"></ion-icon>
            <ion-icon name="person"></ion-icon>
            <ion-icon name="person"></ion-icon>
          </>
        )}
      </RoomVacancy>
    </RoomUnitWrapper>
  );
}
const RoomUnitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 200px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 5px;
  cursor: pointer;

  background-color: ${(props) => (props.id === props.selected ? '#FFEED2' : '#FFF')};
`;
const RoomNumber = styled.p`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 20px;
`;

const RoomVacancy = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  ion-icon {
    font-size: 30px;
  }
`;
