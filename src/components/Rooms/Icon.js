import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken.js';
import { useContextPayment } from '../Payment/useContextPayment.js';

export default function RoomUnit({ color, clicked }) {
  const token = useToken();

  return (
    <Icon color={color}>
      <ion-icon name="person"></ion-icon>
    </Icon>
  );
}

const Icon = styled.div`
  color: ${(props) => (props.clicked === true ? '#000' : '#000')};
`;
