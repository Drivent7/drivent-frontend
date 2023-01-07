import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import { CiCircleRemove } from 'react-icons/ci';

export default function Activity(props) {
  // console.log(props);
  // const vagas = 1;
  return (
    <>
      <ActivityBox key={props.key} time={props.iten.endsAt - props.iten.startsAt}>
        <TextBox>
          <h2>{props.iten.title}</h2>
          <p>{props.iten.startsAt}h - {props.iten.endsAt}h </p>
        </TextBox>

        <Vertical></Vertical>
        {props.iten.vagas > 0 ? (
          <Button color={'green'}>
            <BiLogIn size={30} />
            <p>{props.iten.vagas} vagas</p>
          </Button>
        ) : (
          <Button color={'red'}>
            <CiCircleRemove size={30} />
            <p>Esgotado</p>
          </Button>
        )}
      </ActivityBox>
    </>
  );
}

const ActivityBox = styled.div`
  width: 95%;
  /* height: 79px; */
  height: ${(props) => (props.time === 1 ? '79px' : '168px')};
  margin: 5px;
  border-radius: 5px;
  background-color: #f1f1f1;

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

  h2{
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p{
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
