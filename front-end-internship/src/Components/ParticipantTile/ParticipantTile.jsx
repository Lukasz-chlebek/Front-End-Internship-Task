import {NavLink} from "react-router-dom";
import {ReactComponent as PenIcon} from '../../Assets/pen-icon.svg';
import styles from "./ParticipantTile.module.css"
const ParticipantTile = ({id, name, color}) => {
    return (
        <section className={styles.container} style={{backgroundColor: color}}>
            <p className={styles.container__name}> {name}</p>
            <NavLink className={styles.container__navLink} to={`/interns/${id}`}>
                <div className={styles.editWrapper}>
                    <PenIcon className={styles.editWrapper__icon}/>
                    <p>Edit</p>
                </div>
            </NavLink>

        </section>
    )
}
export default ParticipantTile
