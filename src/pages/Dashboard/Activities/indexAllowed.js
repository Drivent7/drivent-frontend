import { useEffect, useState } from 'react';
import useEvent from '../../../hooks/api/useEvent';
import useTicket from '../../../hooks/api/useTicket';
import Button from '../../../components/ticket/Button';
import None from '../../../components/Payment/None';
import styled from 'styled-components';
import Activity from './Activity';
export default function IndexAllowed() {
  const { ticket } = useTicket();
  const { event } = useEvent();

  useEffect(() => {}, [event, ticket]);
  const start = new Date(event?.startsAt);
  const daysEvent = start.toLocaleDateString('pt-BR').replaceAll('/2023', '');

  // model Activity {
  //   id                 Int      @id @default(autoincrement())
  //   title              String   @db.VarChar(255)
  //   location           String   @db.VarChar(255)
  //   capacity           Int
  //   dateEntity         DateTime @db.Date()
  //   startsAt           DateTime
  //   endsAt             DateTime
  //   createdAt          DateTime @default(now())
  //   updatedAt          DateTime @updatedAt
  //   @@index([dateEntity])
  // }

  const daysArray = ['05/01', '06/01', '07/01', '08/01'];
  const ActivitiesArray = [
    {
      title: 'Palestra 1',
      location: 'Auditório principal',
      capacity: 20,
      dateEntity: '05/01',
      startsAt: 9,
      endsAt: 10,
      vagas: 15
    },
    {
      title: 'Palestra 11',
      location: 'Auditório principal',
      capacity: 20,
      dateEntity: '05/01',
      startsAt: 9,
      endsAt: 10,
      vagas: 0
    },
    {
      title: 'Palestra 2',
      location: 'Auditório lateral',
      capacity: 20,
      dateEntity: '05/01',
      startsAt: 9,
      endsAt: 11,
      vagas: 0
    },
    {
      title: 'Palestra 22',
      location: 'Auditório lateral',
      capacity: 20,
      dateEntity: '05/01',
      startsAt: 9,
      endsAt: 10,
      vagas: 2
    },
    {
      title: 'Palestra 3',
      location: 'Sala de workshop',
      capacity: 20,
      dateEntity: '05/01',
      startsAt: 9,
      endsAt: 10,
      vagas: 10
    },
  ];
  return (
    <>
      {ticket?.TicketType.isRemote ? (
        <None>
          Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
        </None>
      ) : (
        <ActivitiesWrapper>
          <h1>Escolha de atividades</h1>
          {daysArray.map((day, index) => {
            return <Button key={index}>{day}</Button>;
          })}
          <ScheduleHeader>
            <p>Auditório principal</p>
            <p>Auditório lateral</p>
            <p>Sala de workshop</p>
          </ScheduleHeader>
          <Schedule>
            <DayBox>
              {ActivitiesArray.filter((iten) => iten.location === 'Auditório principal').map((iten, index) => (
                <Activity key={index} time={iten.endsAt - iten.startsAt} iten={iten} />
              ))}
            </DayBox>
            <DayBox>
              {ActivitiesArray.filter((iten) => iten.location === 'Auditório lateral').map((iten, index) => (
                <Activity key={index} time={iten.endsAt - iten.startsAt} iten={iten} />
              ))}
            </DayBox>
            <DayBox>
              {ActivitiesArray.filter((iten) => iten.location === 'Sala de workshop').map((iten, index) => (
                <Activity key={index} time={iten.endsAt - iten.startsAt} iten={iten} />
              ))}
            </DayBox>
          </Schedule>
        </ActivitiesWrapper>
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

