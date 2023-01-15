import { useEffect, useState } from 'react';
import useEvent from '../../../hooks/api/useEvent';
import useTicket from '../../../hooks/api/useTicket';
import Button from '../../../components/ticket/Button';
import None from '../../../components/Payment/None';
import styled from 'styled-components';
import Activity from './Activity';
import useToken from '../../../hooks/useToken';
import { getActivities } from '../../../services/ActivityApi';
import dayjs from 'dayjs';

export default function IndexAllowed() {
  const { ticket } = useTicket();
  const { event } = useEvent();
  const token = useToken();
  const [activities, setActivities] = useState([]);
  const [day, setDay] = useState();

  useEffect(() => {
    const promise = getActivities(token);
    promise
      .then((res) => {
        setActivities(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [event, ticket]);

  let days = activities.map((iten) => {
    return dayjs(iten.dateEntity).format('dddd DD/MM');
  });
  days = days.filter((iten, index) => {
    return days.indexOf(iten) === index;
  });

  return (
    <>
      {!activities ? (
        <> loading... </>
      ) : (
        <>
          {ticket?.TicketType.isRemote ? (
            <None>
              Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
            </None>
          ) : (
            <ActivitiesWrapper>
              <h1>Escolha de atividades</h1>
              {days.map((iten, index) => {
                return <Button onClick={() => setDay(iten)}>{iten}</Button>;
              })}
              <ScheduleHeader>
                <p>Auditório principal</p>
                <p>Auditório lateral</p>
                <p>Sala de workshop</p>
              </ScheduleHeader>
              <Schedule>
                <DayBox>
                  {activities
                    .filter((iten) => iten.location === 'Auditório principal')
                    .filter((iten) => dayjs(iten.dateEntity).format('dddd DD/MM') === day)
                    .map((iten, index) => (
                      <Activity key={index} iten={iten} />
                    ))}
                </DayBox>
                <DayBox>
                  {activities
                    .filter((iten) => iten.location === 'Auditório lateral')
                    .filter((iten) => dayjs(iten.dateEntity).format('dddd DD/MM') === day)
                    .map((iten, index) => (
                      <Activity key={index} iten={iten} />
                    ))}
                </DayBox>
                <DayBox>
                  {activities
                    .filter((iten) => iten.location === 'Sala de workshop')
                    .filter((iten) => dayjs(iten.dateEntity).format('dddd DD/MM') === day)
                    .map((iten, index) => (
                      <Activity key={index} iten={iten} />
                    ))}
                </DayBox>
              </Schedule>
            </ActivitiesWrapper>
          )}
        </>
      )}
    </>
  );
}

const ActivitiesWrapper = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

const ScheduleHeader = styled.div`
  width: 864px;

  display: flex;
  justify-content: space-around;

  p {
    width: 288px;
    margin-bottom: 10px;

    color: #7b7b7b;

    display: flex;
    justify-content: center;
  }
`;

const Schedule = styled.div`
  height: 392px;
  width: 864px;
  border: solid 3px #d7d7d7;
  border-radius: 5px;

  display: flex;
`;

const DayBox = styled.div`
  width: 288px;
  height: 100%;
  border-right: solid 0.5px #d7d7d7;
  border-left: solid 0.5px #d7d7d7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
