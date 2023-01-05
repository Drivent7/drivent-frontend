import styled from 'styled-components';
export default function RoomUnit({ id, size, booking, color, clicked }) {
  const value = size;
  const bookingQuantity = booking?.length;
  function acomodation(value, bookingQuantity) {
    if (value === 1 && bookingQuantity === 1) {
      return (
        <Icon color={color} disable="1">
          <ion-icon name="person"></ion-icon>
        </Icon>
      );
    } else if (value === 1 && bookingQuantity === 0) {
      return (
        <Icon color={color} clicked={clicked}>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 2 && bookingQuantity === 0) {
      return (
        <Icon color={color} clicked={clicked}>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 2 && bookingQuantity === 1) {
      return (
        <Icon color={color} clicked={clicked}>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon props="3" name="person"></ion-icon>
        </Icon>
      );
    } else if (value === 2 && bookingQuantity === 2) {
      return (
        <Icon color={color} disable="1">
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && bookingQuantity === 0) {
      return (
        <Icon color={color} clicked={clicked}>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && bookingQuantity === 1) {
      return (
        <Icon color={color} clicked={clicked}>
          <ion-icon props="3" name="person="></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && bookingQuantity === 2) {
      return (
        <Icon color={color} clicked={clicked}>
          <ion-icon props="3" name="person="></ion-icon>
          <ion-icon props="3" name="person"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icon>
      );
    } else if (value === 3 && bookingQuantity === 3) {
      return (
        <Icon color={color} disable="1">
          <ion-icon name="person="></ion-icon>
          <ion-icon name="person"></ion-icon>
          <ion-icon name="person"></ion-icon>
        </Icon>
      );
    }
  }
  return <>{acomodation(value, bookingQuantity)}</>;
}

const Icon = styled.div`
  color: ${(props) => (props.clicked === true ? 'red' : '#000')};
  pointer-events: ${(props) => (props.disable === '1' ? 'none' : 'auto')};
  opacity: ${(props) => (props.disable === '1' ? '0.6' : 'none')};
`;
