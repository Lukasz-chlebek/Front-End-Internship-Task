import {useForm} from "react-hook-form";
import styled from "styled-components";
import FormInput from "../FormInput/FormInput";
const Form = ({onSubmit})=>{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const watchStartInternship = watch('start')
    return(
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label={"Full Name"}
                type={"text"}
                name={"name"}
                error={errors.name}
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Name is required",
                    },
                }}/>
            <FormInput
                label={"Email"}
                type={"text"}
                name={"email"}
                error={errors.email}
                register={register}
                validation={{
                    required:{
                        value: true,
                        message: "Email is required",
                    },
                    pattern:{
                        value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        message:"Email is incorrect",
                    }
                }}
            />
            <DateWrapper>
                <FormInput
                label={"Start Internship"}
                type={"date"}
                name={"start"}
                error={errors.start}
                register={register}
                validation={{
                    required:{
                        value:true,
                        message:"Date is required",
                    }
                }}
                />
                <FormInput
                    label={"End Internship"}
                    type={"date"}
                    error={errors.end}
                    register={register}
                    name={"end"}
                    validation={{
                        required:{
                            value:true,
                            message:"Date is required",
                        },
                        min:{
                            value:watchStartInternship,
                            message:"End should be after internship start"
                        }
                    }}/>
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

const Button = styled.input`
  width: 224px;
  height: 48px;
  background-color: #222222;
  color: #FFFFFF;
  margin: 0 0 30px 0;
`;

