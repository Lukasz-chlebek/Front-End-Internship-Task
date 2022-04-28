import styled from "styled-components";


const FormInput = ({error, type, label, validation, register, name}) =>{
    return(
        <Wrapper>
            <label>{label}</label>
            <Input type={type}
                       name={name}
                       placeholder={label}
                       {...register(name, {
                           required: validation.required,
                           pattern: validation.pattern,
                           min: validation.min
                       })}
                       style={{
                           border:error? '1px solid red' : '1px solid black',
                           width: type==="date"? '238px' :'494px'
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
