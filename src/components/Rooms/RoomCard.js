import styled from 'styled-components';
import roomsData from './roomData.js';

export default function RoomCard() {
  return (
    <Room/>
  );
};

function Room() {
  const roomData = roomsData[0].rooms.map(element => element);
  console.log(roomData.map(element => element.number));
  const roomDataCapacity = roomData.map(element => element.capacity);
  console.log(roomDataCapacity);

  return(
    <>
      {roomData.map((element) => {
        return(
          <RoomUnit>
            <RoomNumber>{element.number}</RoomNumber>
          </RoomUnit>
        );
      })}
    </>
  );
};
const RoomUnit = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 0 20px;
  width:200px;
  height: 50px;
  background-color: red;
  border-radius: 5px;
  margin: 10px 5px;
`;
const RoomNumber = styled.p`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 20px;
`;
