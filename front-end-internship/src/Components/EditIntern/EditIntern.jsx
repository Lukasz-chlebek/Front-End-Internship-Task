import {useParams, useNavigate} from 'react-router';
import {NavLink} from 'react-router-dom';
import {useState, useEffect} from "react";
import Form from "../Form/Form";
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {ReactComponent as Arrow} from "../../Assets/arrow.svg";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styles from "./EditIntern.module.css"

const EditIntern = () => {
    const [interns, setInterns] = useState([]);
    const {id} = useParams();
    const navigation = useNavigate()
    const onSubmit = (data) => {
        fetch(`http://localhost:3001/interns/${id}`, {
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            navigation('/')
        }).catch(err => {
            return (
                <ErrorScreen message={err}/>
            )
        })
    }
    useEffect(() => {
        const fetchInternWithId = async () => {
            const response = await fetch(`http://localhost:3001/interns/${id}`);
            const interns = await response.json();
            setInterns(interns);
        }
        fetchInternWithId();
    }, []);
    if (!interns) {
        return <LoadingScreen aria-hidden="true"/>
    }
    return (
        <div>
            <nav className={styles.header}>
                <Logo className={styles.header__logo} />
                <NavLink className={styles.navLink} to="/">
                    <Arrow className={styles.navLink__icon} aria-label={"arrow-icon"}/>
                    <p className={styles.navLink__text}>Back to list</p>
                </NavLink>
            </nav>
            <main className={styles.container}>
                <h1 className={styles.container__title}>Edit</h1>
                <Form data={interns} onSubmit={onSubmit}/>
            </main>
        </div>
    );
};

export default EditIntern;