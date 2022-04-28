import {ReactComponent as Logo} from "../../Assets/logo.svg";
import styled from "styled-components";
import {keyframes} from "styled-components";

const LoadingScreen = () => {
    return (
        <Container>
            <LogoWrapper>
                <Logo/>
            </LogoWrapper>
            <Loading>Loading</Loading>
        </Container>
    )
}
export default LoadingScreen
const bounce = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(200px) scale(1, 0.7);
  }
`;

const dots = keyframes`
  0%, 20% {
    color: rgba(1, 1, 1, 0);
    text-shadow: .25em 0 0 rgba(1, 1, 1, 0),
    .5em 0 0 rgba(1, 1, 1, 0);
  }
  40% {
    color: black;
    text-shadow: .25em 0 0 rgba(1, 1, 1, 0),
    .5em 0 0 rgba(1, 1, 1, 0);
  }
  60% {
    text-shadow: .25em 0 0 black,
    .5em 0 0 rgba(1, 1, 1, 0);
  }
  80%, 100% {
    text-shadow: .25em 0 0 black,
    .5em 0 0 black;
  }
`;

const Loading = styled.p`
  font-size: 50px;
  font-weight: bold;
  position: absolute;
  top: 300px;
  left: calc(50% - 90px);

  &:after {
    content: ' .';
    animation: ${dots} 2s steps(5, end) infinite;
  }
`;

const Container = styled.div`
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: calc(50% - 48px / 2);
  animation: ${bounce} 1s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite;
`;


