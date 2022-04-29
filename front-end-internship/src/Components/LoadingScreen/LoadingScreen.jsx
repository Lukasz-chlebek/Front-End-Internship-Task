import {ReactComponent as Logo} from "../../Assets/logo.svg";
import styles from "./LoadingScreen.module.css"

const LoadingScreen = () => {
    return (
        <section className={styles.container}>
            <Logo className={styles.container__logo}/>
            <p className={styles.container__loading}>Loading</p>
        </section>
    )
}
export default LoadingScreen


