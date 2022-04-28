import styled from "styled-components";

const ErrorScreen = ({message}) => {
    return (
        <Container>
            <Title>Error during updating data</Title>
            <p>{message}</p>
        </Container>
    )
}
export default ErrorScreen

const Container = styled.div`
  margin: auto;
  width: 50%;
  padding: 50px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
`;