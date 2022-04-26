import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Form from "../Form/Form";
import styled from "styled-components";
import {ReactComponent as Logo} from "../InternList/logo.svg";
import {ReactComponent as Arrow} from "./arrow.svg";

const EditIntern = () => {
    const { id } = useParams();
    const onSubmit = (data)=>{console.log(data)}
    useEffect(() => {
        //TODO: get intern from REST api http://localhost:3001/interns/:id
        console.log(`I want to get intern with id: ${id}!`)
    }, [id]);

    return (
        <div>
            <Header>
                <Logo style={{ marginTop: 20, marginBottom:16, marginLeft:20}}/>
                <NavLink style={{marginLeft:180, display:"flex",textDecoration:"none", color:"black"}} to="/">
                    <Arrow width={24} />
                    <p style={{marginLeft:12}}>Back to list</p>
                </NavLink>
            </Header>
            <Container>
                <Title>Edit</Title>
                <Form onSubmit={onSubmit}/>
            </Container>

        </div>
    );
};

export default EditIntern;

const Container = styled.div`
  max-width: 700px;
  background-color: #F7F7F7;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
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

const Header =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;