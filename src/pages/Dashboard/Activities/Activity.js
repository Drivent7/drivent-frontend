import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import { BiCheckCircle } from 'react-icons/bi';
import { CiCircleRemove } from 'react-icons/ci';
import { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useContextPayment } from '../../../components/Payment/useContextPayment';

export default function Activity(props) {
  const { listOfActivities, setListOfActivities } = useContext(useContextPayment);
  const [render, setRender] = useState(false);

  useEffect(() => {}, [listOfActivities, render]);

  function unsubscribe(index) {
    listOfActivities.splice(index, 1);
    setRender(!render);
  }

  function handleClick(newId, startsAt, endsAt, day) {
    if (!(props.iten.Reservations.length < props.iten.capacity)) {
      return;
    }
    if (listOfActivities.length === 0) {
      setListOfActivities((prev) => [...prev, props.iten]);
      return;
    }
    for (let i = 0; i < listOfActivities.length; i++) {
      let id = listOfActivities[i].id;
      let start = dayjs(listOfActivities[i].startsAt).format('HH:MM');
      let end = dayjs(listOfActivities[i].endsAt).format('HH:MM');
      let dateEntity = dayjs(listOfActivities[i].dateEntity).format('DD/MM');

      if (newId === id) {
        // criar função delete
        unsubscribe(i);
        return;
      }
      if (day === dateEntity && startsAt < end && endsAt > start) {
        return;
      }
    }
    setListOfActivities((prev) => [...prev, props.iten]);
    setRender(!render);
  }

  return (
    <>
      <ActivityBox
        onClick={() =>
          handleClick(
            props.iten.id,
            dayjs(props.iten.startsAt).format('HH:MM'),
            dayjs(props.iten.endsAt).format('HH:MM'),
            dayjs(props.iten.dateEntity).format('DD/MM'),
          )
        }
        time={dayjs(props.iten.endsAt).format('HH') - dayjs(props.iten.startsAt).format('HH')}
        reserved={listOfActivities.includes(props.iten) ? true : false}
      >
        <TextBox>
          <h2>{props.iten.title}</h2>
          <p>
            {dayjs(props.iten.startsAt).format('HH:mm')}h - {dayjs(props.iten.endsAt).format('HH:mm')}h{' '}
          </p>
        </TextBox>

        <Vertical></Vertical>
        {listOfActivities.includes(props.iten) ? (
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
  background-color: ${(props) => (props.reserved ? '#D0FFDB' : '#f1f1f1')};

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
