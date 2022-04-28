import {useForm} from "react-hook-form";
import styled from "styled-components";
import React from "react";
import FormInput from "../FormInput/FormInput";

const Form = ({onSubmit, data}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();
    const watchStartInternship = watch('start')
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label={"Full Name"}
                type={"text"}
                name={"name"}
                value={data.name}
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
                value={data.email}
                error={errors.email}
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Email is required",
                    },
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        message: "Email is incorrect",
                    }
                }}
            />
            <DateWrapper>
                <FormInput
                    label={"Start Internship"}
                    type={"date"}
                    name={"start"}
                    value={data.start}
                    error={errors.start}
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: "Date is required",
                        }
                    }}
                />
                <FormInput
                    label={"End Internship"}
                    type={"date"}
                    error={errors.end}
                    register={register}
                    name={"end"}
                    value={data.end}
                    validation={{
                        required: {
                            value: true,
                            message: "Date is required",
                        },
                        min: {
                            value: watchStartInternship,
                            message: "End should be after internship start"
                        }
                    }}/>
            </DateWrapper>
            <Button type="submit" value="Submit"/>
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
  margin: 30px 0 30px 0;
`;

