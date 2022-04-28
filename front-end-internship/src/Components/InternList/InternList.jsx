import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ParticipantTile from "../ParticipantTile/ParticipantTile";
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const InternList = () => {

    const [interns, setInterns] = useState([]);
    useEffect(() => {
        const fetchInterns = async () => {
            const response = await fetch('http://localhost:3001/interns');
            const interns = await response.json();
            setInterns(interns);
        }
        fetchInterns();
    }, []);
    if(!interns){
        return <LoadingScreen/>
    }
    return (
        <div>
            <Header>
                <Logo style={{marginTop: 20, marginBottom:16}}/>
            </Header>
            <Container>
                <Title>Participants</Title>
                <div style={{ marginBottom:80}}>
                    {
                        interns.map(u => (
                            u.id % 2 === 0?
                                <ParticipantTile id={u.id} name={u.name} key={u.id}/>:
                                <ParticipantTile id={u.id} name={u.name} key={u.id} color={"#F2F2F2"}/>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default InternList;

const Container = styled.div`
  background-color: #F7F7F7;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 0 auto 0 auto;
`;

const Title = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #222222;
  margin-bottom: 40px;
`;

const Header = styled.header`
  display:flex;
  justify-content:center;
`;