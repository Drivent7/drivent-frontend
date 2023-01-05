import { useContext, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken.js';
import { useContextPayment } from '../Payment/useContextPayment.js';
import Icon from './Icon.js';
export default function RoomUnit(room) {
  const token = useToken();
  const [selected, setSelected] = useState('#CECECE');
  const [clicked, setClicked] = useState(false);
  const { roomId, setRoomId } = useContext(useContextPayment);
  const [colors, setColors] = useState('#000');
  const [toggle, setToggle] = useState(false);
  function changeSelected(id, room) {
    if (selected === '#CECECE') {
      setSelected('#FFEED2');
      setColors('red');
      setToggle(!toggle);
    } else {
      setSelected('#fff');
      setColors('#000');
      setToggle(!toggle);
    }
    setRoomId(id);
  }
  console.log(roomId);
  return (
    <RoomUnitWrapper
      onClick={() => {
        changeSelected(room.room.id);
        setClicked(!clicked);
      }}
      color={selected}
      selected={roomId}
      id={room.room.id}
      toggle={toggle}
    >
      <RoomNumber>{room.room.capacity}</RoomNumber>
      <RoomVacancy>
        <Icon
          id={room.room.id}
          size={room.room.capacity}
          booking={room.room.Booking}
          color={selected}
          clicked={clicked}
          selected={roomId}
        />
        <Icon />
      </RoomVacancy>
    </RoomUnitWrapper>
  );
}
const RoomUnitWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 200px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 5px;
  cursor: pointer;
  position: relative;

  background-color: ${(props) => (props.id === props.selected ? '#FFEED2' : '#FFF')};

  div {
    color: ${(props) => (props.id === props.selected ? 'red' : '#000')};
  }
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
