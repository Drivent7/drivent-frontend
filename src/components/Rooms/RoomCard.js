import { useContext, useEffect, useState } from 'react';
import useToken from '../../hooks/useToken.js';
import { getHotelRooms } from '../../services/hotelApi.js';
import { useContextPayment } from '../Payment/useContextPayment.js';
import useHotels from '../../hooks/api/useHotels.js';
import RoomUnit from './RoomUnit.js';
export default function RoomCard() {
  return <Room />;
}

function Room() {
  const [roomData, setRoomData] = useState([]);
  const token = useToken();
  let { hotelId } = useContext(useContextPayment);
  const { hotels } = useHotels();

  useEffect(() => {
    const result = getHotelRooms(token, hotelId)
      .then((r) => {
        setRoomData(r);
      })
      .catch((r) => {});
  }, [hotelId]);
  function showScreen(hotels, roomData) {
    const result = hotels?.filter((v) => {
      if (v.id === roomData?.id) {
        return v;
      }
    });
    return result;
  }
  const seats = showScreen(hotels, roomData);
  return (
    <>
      {seats === undefined ? (
        <>ESCOLHA UM HOTEL.</>
      ) : (
        <>
          {seats[0]?.Rooms?.map((element, index) => {
            return <RoomUnit room={element} key={index} />;
          })}
        </>
      )}
    </>
  );
}
