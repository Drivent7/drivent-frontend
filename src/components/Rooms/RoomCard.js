import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken.js';
import { getHotelRooms } from '../../services/hotelApi.js';
import { useContextPayment } from '../Payment/useContextPayment.js';
import RoomUnit from './RoomUnit.js';

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
          <RoomUnit room={element} />
        );
      })}
    </>
  );
}
