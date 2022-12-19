import { TicketCard } from './TicketCard';
import { GreyText } from './GreyText';

export default function TicketType({ name, price, id, isRemote, confirm, setConfirm, setTicketId, setTotal, selected, setSelected }) {
  function changeSelected(name, price, id) {
    if (isRemote) {
      setConfirm(true);
    }
    if (confirm && selected !== name) {
      setConfirm(false);
    }
    setSelected(name);
    setTotal(price);
    setTicketId(id);
  }

  return (
    <TicketCard onClick={() => changeSelected(name, price, id)} color={selected === name ? '#FFEED2' : 'white'}>
      {name}
      <GreyText>R$ {price}</GreyText>
    </TicketCard>
  );
}
