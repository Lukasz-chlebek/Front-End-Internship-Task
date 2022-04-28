import {useParams, useNavigate} from 'react-router';
import {useQueryClient} from "react-query";
import {NavLink} from 'react-router-dom';
import {useState, useEffect} from "react";
import Form from "../Form/Form";
import styled from "styled-components";
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {ReactComponent as Arrow} from "../../Assets/arrow.svg";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const EditIntern = () => {
    const [interns, setInterns] = useState([]);
    const query = useQueryClient();
    const {id} = useParams();
    const navigation = useNavigate()
    const onSubmit = (data) => {
        fetch(`http://localhost:3001/interns/${id}`, {
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            query.refetchQueries(`interns/${id}`)
            navigation('/')
        }).catch(err => {
            return (
                <ErrorScreen message={err}/>
            )
        })
    }
    useEffect(() => {
        const fetchInternWithId = async () => {
            const response = await fetch(`http://localhost:3001/interns/${id}`);
            const interns = await response.json();
            setInterns(interns);
        }
        fetchInternWithId();
    }, []);
    if (!interns) {
        return <LoadingScreen/>
    }
    return (
        <div>
            <Header>
                <Logo style={{marginTop: 20, marginBottom: 16, marginLeft: 20}}/>
                <NavLink style={{marginLeft: 180, display: "flex", textDecoration: "none", color: "black"}} to="/">
                    <Arrow width={24}/>
                    <p style={{marginLeft: 12}}>Back to list</p>
                </NavLink>
            </Header>
            <Container>
                <Title>Edit</Title>
                <Form data={interns} onSubmit={onSubmit}/>
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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;