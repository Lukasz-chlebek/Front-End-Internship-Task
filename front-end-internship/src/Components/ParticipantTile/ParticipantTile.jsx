import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as PenIcon} from './pen-icon.svg';

const ParticipantTile = (props) =>{
    return(
        <Tile style={{backgroundColor:props.color}}>
            <p style={{padding:24}}>{props.name}</p>
            <NavLink style={{textDecoration:"none", color:"black"}} to={`/interns/${props.id}`}>
                <EditIconWrapper>
                    <PenIcon style={{padding:8}}/>
                    <p>Edit</p>
                </EditIconWrapper>
            </NavLink>
        </Tile>
    )
}
export default ParticipantTile

const Tile = styled.div`
  background-color: #EDEDED;
  width: 500px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditIconWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 20px;
`;