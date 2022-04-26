import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ParticipantTile from "../ParticipantTile/ParticipantTile";
import {ReactComponent as Logo} from "./logo.svg";

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

    return (
        <div>
            <Logo/>
            <Container>
                <Title>Participants</Title>
                <Wrapper>
                    {
                        interns.map(u => (
                            u.id % 2 === 0?
                                <ParticipantTile id={u.id} name={u.name} key={u.id}/>:
                                <ParticipantTile id={u.id} name={u.name} key={u.id} color={"#F2F2F2"}/>
                        ))
                    }
                </Wrapper>

            </Container>
        </div>

    );
};

export default InternList;

const Container = styled.div`
  background-color: #F7F7F7;
  width: 700px;
  margin: auto;
  padding:50px 0 80px 0;;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 50px 0 80px 0;
`;

const Title = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #222222;
  
`;