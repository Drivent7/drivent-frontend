import { useState, useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken.js';
import * as BookingApi from '../../services/bookingApi';
export default function RoomUnit({ id, size, color, clicked }) {
  const token = useToken();
  const value = size;
  const [r, setR] = useState();
  useEffect(() => {
    BookingApi.getBookings(id, token)
      .then((a) => {
        a.bookings?.map((v) => {
          if (!v[0]) {
            setR(a);
          }
        });
      })
      .catch((r) => {});
  }, []);
  console.log(r);
  function godHelpUs(r) {
    if (value === 1 && r?.bookings[0]?.roomId === id && r?.count === 0) {
      return (
        <Icon color={color}>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 1 && r?.bookings[0]?.roomId === id && r?.count === 1) {
      return (
        <Icon color={color}>
          <ion-icon name="person"></ion-icon>
        </Icon>
      );
    } else if (value === 2 && r?.bookings[0]?.roomId === id && r?.count === 0) {
      return (
        <Icon color={color}>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 2 && r?.bookings[0]?.roomId === id && r?.count === 1) {
      return (
        <Icon color={color}>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 2 && r?.bookings[0]?.roomId === id && r?.count === 2) {
      return (
        <Icon color={color}>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && r?.bookings[0]?.roomId === id && r?.count === 0) {
      return (
        <Icon color={color}>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && r?.bookings[0]?.roomId === id && r?.count === 1) {
      return (
        <Icon color={color}>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && r?.bookings[0]?.roomId === id && r?.count === 2) {
      return (
        <Icon color={color}>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && r?.bookings[0]?.roomId === id && r?.count === 3) {
      return (
        <Icon color={color}>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person"></ion-icon>
        </Icon>
      );
    }
  }
  // function acomodation(value) {
  //   if (value === 1) {
  //     return (
  //       <Icon color={color}>
  //         <ion-icon name="person-outline"></ion-icon>
  //       </Icon>
  //     );
  //   } else if (value === 2) {
  //     return (
  //       <Icon color={color}>
  //         <ion-icon name="person-outline"></ion-icon>
  //         <ion-icon name="person-outline"></ion-icon>
  //       </Icon>
  //     );
  //   } else if (value === 3) {
  //     return (
  //       <Icon color={color}>
  //         <ion-icon name="person-outline"></ion-icon>
  //         <ion-icon name="person-outline"></ion-icon>
  //         <ion-icon name="person-outline"></ion-icon>
  //       </Icon>
  //     );
  //   }
  // }
  return <>{godHelpUs(r)}</>;
}

const Icon = styled.div`
  color: ${(props) => (props.clicked === true ? '#000' : '#000')};
`;
