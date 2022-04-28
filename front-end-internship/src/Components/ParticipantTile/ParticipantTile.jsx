import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as PenIcon} from '../../Assets/pen-icon.svg';

const ParticipantTile = ({id, name,color}) =>{
    return(
        <Tile style={{backgroundColor:color}}>
            <p style={{padding:24}}>{name}</p>
                <NavLink style={{textDecoration:"none", color:"black"}} to={`/interns/${id}`}>
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

  &:hover{
    border: 2px solid black;
  }
`;

const EditIconWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 20px;
`;
