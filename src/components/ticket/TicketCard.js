import styled from 'styled-components';

export const TicketCard = styled.div`
font-family: 'Roboto';
box-sizing: border-box;

margin: 0px 24px 0 0;
display: flex;
flex-direction: column;
justify-content: center;
width: 145px;
height: 145px;
text-align: center;

background-color: ${props => props.color};
border: 1px solid #CECECE;
border-radius: 20px;
border-width: ${props => props.color === 'white' ? '1px' : '0'};
`;
