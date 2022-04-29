import {ReactComponent as Error} from "../../Assets/error-icon.svg";
import styles from "./FormInput.module.css"
import "./CalendarIndicator.css"
//TODO reformate code
const FormInput = ({error, type, label, validation, register, name, value}) => {
    return (
        <div className={styles.container}>
            {error && <Error className={`${styles.container__errorIcon} ${(type==="date"? styles.container__errorIconShort:styles.container__errorIconWide)}`}/>}
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   name={name}
                   className={`${(error?styles.container__inputWrong:styles.container__input)} ${(type==="date"? styles.container__inputShort:styles.container__inputWide)}`}
                   placeholder={label}
                   defaultValue={value}
                   {...register(name, {
                       required: validation.required,
                       pattern: validation.pattern,
                       min: validation.min
                   })}
            />
            {error && <p className={styles.container__alert}>{error.message}</p>}
        </div>
    )
}

export default FormInput
