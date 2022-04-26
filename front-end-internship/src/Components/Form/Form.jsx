import {useForm} from "react-hook-form";
import styled from "styled-components";
const Form = (props)=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return(
        <FormWrapper onSubmit={handleSubmit(props.onSubmit)}>
            <NameEmail>
                <label htmlFor={"Input__name"}>Name</label>
                    <DataInput type={"text"}
                               name={"name"}
                               placeholder={"Name"}
                               {...register('name', { required: true })}
                               style={{border:errors.name? '1px solid red' : '1px solid black'}}
                    />
                {errors.name && <p style={{margin:0, color:"red"}}>This field is required</p>}
            </NameEmail>
            <NameEmail>
                <label>Email</label>
                <DataInput type={"text"}
                           name={"email"}
                           placeholder={"Email"}
                           {...register('email', { required: true })}
                           style={{border:errors.email? '1px solid red' : '1px solid black'}}
                />
                {errors.email && <p style={{margin:0, color:"red"}}>This field is required</p>}
            </NameEmail>
            <DateWrapper>
                <Date>
                    <label>Internship start *</label>
                    <DateInput type="date"
                               name={"start"}
                               {...register('start', { required: true })}
                               style={{border:errors.start? '1px solid red' : '1px solid black'}}

                    />
                    {errors.start && <p style={{margin:0, color:"red"}}>This date is incorrect</p>}
                </Date>
                <Date>
                    <label>Internship end *</label>
                    <DateInput type="date"
                               name={"end"}
                               {...register('end', { required: true })}
                               style={{border:errors.end? '1px solid red' : '1px solid black'}}
                    />
                    {errors.end && <p style={{margin:0, color:"red"}}>This date is incorrect</p>}
                </Date>
            </DateWrapper>
            <Button type="submit" value="Submit" />
        </FormWrapper>
    )
}

export default Form

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const DateWrapper = styled.div`
  display: flex;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px;
  padding: 0 0 20px 0;
`;

const DataInput = styled.input`
  width: 494px;
  height: 46px;
  border: 1px solid black;
  &:focus{
    outline: none;
  }
`;

const DateInput = styled.input`
  width: 238px;
  height: 46px;
`;

const Button = styled.input`
  width: 224px;
  height: 48px;
  background-color: #222222;
  color: #FFFFFF;
  margin: 0 0 30px 0;
`;

const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

