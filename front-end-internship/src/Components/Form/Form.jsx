import {useForm} from "react-hook-form";

const Form = (props)=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return(
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <label>Name</label>
            <input type={"text"} name={"name"} placeholder={"Name"} {...register('name', { required: true })}/>
            <label>Email</label>
            <input type={"text"} name={"email"} placeholder={"Email"} {...register('email', { required: true })}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form