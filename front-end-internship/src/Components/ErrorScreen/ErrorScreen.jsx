import styles from "./ErrorScreen.module.css"

const ErrorScreen = ({message}) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.container__title}>Error during updating data</h1>
            <p>{message}</p>
        </section>
    )
}
export default ErrorScreen