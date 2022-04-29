import {useForm} from "react-hook-form";
import React from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./Form.module.css"


const Form = ({onSubmit, data}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();
    const watchStartInternship = watch('start')
    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
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
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        message: "Email is incorrect",
                    }
                }}
            />
            <div className={styles.formContainer__DateWrapper}>
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
            </div>
            <button className={styles.formContainer__button} type="submit">Submit</button>
        </form>
    )
}

export default Form

