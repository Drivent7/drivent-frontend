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
            <RoomVacancy>
              {(element.capacity===1)?(
                <>
                  <ion-icon name="person"></ion-icon>
                </>
              ):((element.capacity===2)?(
                <>
                  <ion-icon name="person"></ion-icon>
                  <ion-icon name="person"></ion-icon>
                </>
              ):(
                <>
                  <ion-icon name="person"></ion-icon>
                  <ion-icon name="person"></ion-icon>
                  <ion-icon name="person"></ion-icon>
                </>
               
              ))}
            </RoomVacancy>
          </RoomUnit>
        );
      })}
    </>
  );
};
const RoomUnit = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 0 10px;
  width:200px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 5px;
  cursor: pointer;
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
  ion-icon{
    font-size: 30px;
  }
`;
