import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useGetRooms from '../../hooks/api/useRoom.js';
import useToken from '../../hooks/useToken.js';
import { getHotelRooms } from '../../services/hotelApi.js';
import { useContextPayment } from '../Payment/useContextPayment.js';

export default function RoomCard() {
  return <Room />;
}

function Room() {
  const [roomData, setRoomData] = useState([]);
  const token = useToken();
  let { hotelId } = useContext(useContextPayment);
  useEffect(() => {
    const result = getHotelRooms(token, hotelId)
      .then((r) => {
        setRoomData(r);
      })
      .catch((r) => {});
  }, [hotelId]);

  return (
    <>
      {roomData.Rooms?.map((element) => {
        return (
          <RoomUnit>
            <RoomNumber>{element.number}</RoomNumber>
            <RoomVacancy>
              {element.capacity === 1 ? (
                <>
                  <ion-icon name="person"></ion-icon>
                </>
              ) : element.capacity === 2 ? (
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
          </RoomUnit>
        );
      })}
    </>
  );
}
const RoomUnit = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 200px;
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
  ion-icon {
    font-size: 30px;
  }
`;
