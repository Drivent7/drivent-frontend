import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import { BiCheckCircle } from 'react-icons/bi';
import { CiCircleRemove } from 'react-icons/ci';
import { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { useContextPayment } from '../../../components/Payment/useContextPayment';

export default function Activity(props) {
  // const [selected, setSelected] = useState(false);
  // const [registered, setRegistered] = useState(false);
  const { registered, setRegistered } = useContext(useContextPayment);
  const { activityId, setActivityId } = useContext(useContextPayment);

  function handleClick(id, time) {
    setActivityId(id);
    if (id !== activityId) {
      setActivityId(id);
    }
    if (id === activityId) {
      setRegistered(!registered);
      setActivityId(id);
      return;
    }
    // if (activityId === id && registered === true) {
    //   setActivityId(id);
    //   return;
    // }
    // setSelected(!selected);
  }

  return (
    <>
      <ActivityBox
        onClick={() => handleClick(props.iten.id, dayjs(props.iten.startsAt).format('HH:MM'))}
        time={dayjs(props.iten.endsAt).format('HH') - dayjs(props.iten.startsAt).format('HH')}
        registered={registered}
        activityId={activityId}
        iten={props.iten}
      >
        <TextBox>
          <h2>{props.iten.title}</h2>
          <p>
            {dayjs(props.iten.startsAt).format('HH:mm')}h - {dayjs(props.iten.endsAt).format('HH:mm')}h{' '}
          </p>
        </TextBox>

        <Vertical></Vertical>
        {registered && activityId === props.iten.id ? (
          <Button color={'green'}>
            <BiCheckCircle size={30} />
            <p>Inscrito</p>
          </Button>
        ) : (
          <>
            {props.iten.Reservations.length < props.iten.capacity ? (
              <Button color={'green'}>
                <BiLogIn size={30} />
                <p>{props.iten.capacity - props.iten.Reservations.length} vagas</p>
              </Button>
            ) : (
              <Button color={'red'}>
                <CiCircleRemove size={30} />
                <p>Esgotado</p>
              </Button>
            )}
          </>
        )}
      </ActivityBox>
    </>
  );
}

const ActivityBox = styled.div`
  width: 95%;
  height: ${(props) => (props.time === 1 ? '79px' : `calc(${props.time}*79px)`)};
  margin: 5px;
  border-radius: 5px;
  background-color: #f1f1f1;
  background-color: ${(props) =>
    props.registered === true && props.activityId === props.iten.id ? '#D0FFDB' : '#f1f1f1'};

  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
`;

const TextBox = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    font-weight: 300;
  }
`;

const Vertical = styled.div`
  width: 1px;
  height: 80%;
  border: solid 1px #cfcfcf;
`;

const Button = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color === 'green' ? '#078632' : '#CC6666')};

  p {
    font-size: 12px;
  }
`;
