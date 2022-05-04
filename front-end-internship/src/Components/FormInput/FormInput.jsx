import {ReactComponent as Error} from "../../Assets/error-icon.svg";
import styles from "./FormInput.module.css"
import "./CalendarIndicator.css"

const FormInput = ({error, type, label, validation, register, name, value}) => {
    const errorStyleIcon = type === "date" ? styles.container__errorIconShort : styles.container__errorIconWide;
    const errorStyleBorder = error ? styles.container__inputWrong : styles.container__input;
    const widthStyle = type === "date" ? styles.container__inputShort : styles.container__inputWide;
    return (
        <div className={styles.container}>
            {error && <Error className={`${styles.container__errorIcon} ${errorStyleIcon}`} aria-label={"error-icon"}/>}
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   name={name}
                   className={`${errorStyleBorder} ${widthStyle}`}
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
