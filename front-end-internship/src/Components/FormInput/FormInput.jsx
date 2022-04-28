import styled from "styled-components";
import {ReactComponent as Arrow} from "./erorr-icon.svg";
import "./FormInput.css"

const FormInput = ({error, type, label, validation, register, name, value}) =>{
    return(
        <Wrapper>
            {error &&  <Arrow width={24} style={{
                position: "relative",
                left:type==="date"? "170px": "460px",
                top: 57,
                fill:"red"
            }}/>
            }
            <label>{label}</label>
            <Input type={type}
                       name={name}
                       placeholder={label}
                       defaultValue = {value}
                       {...register(name, {
                           required: validation.required,
                           pattern: validation.pattern,
                           min: validation.min
                       })}
                       style={{
                           border:error? '1px solid red' : '1px solid black',
                           width: type==="date"? '238px' :'494px',
                       }}
            />
            {error && <Alert>{error.message}</Alert>}
        </Wrapper>
    )
}

export default FormInput

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
`;
const Input = styled.input`
  height: 46px;
  border: 1px solid black;
  &:focus{
    outline: none;
  }
`;
const Alert = styled.p`
  margin:0; 
  color:red;
`;
