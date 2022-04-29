import React, {useEffect, useState} from 'react';
import ParticipantTile from "../ParticipantTile/ParticipantTile";
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styles from "./InternList.module.css"
const InternList = () => {

    const [interns, setInterns] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const fetchInterns = async () => {
            const response = await fetch('http://localhost:3001/interns');
            const interns = await response.json();
            setInterns(interns);
            setisLoading(false);
        }
        fetchInterns();
    }, []);
    if (isLoading) {
        return <LoadingScreen/>
    }
    return (
        <section>
            <nav className={styles.header}>
                <Logo className={styles.header__logo}/>
            </nav>
            <main className={styles.container}>
                <h1 className={styles.container__title}>Participants</h1>
                <div className={styles.container__wrapper}>
                    {
                        interns.map(u => (
                            u.id % 2 === 0 ?
                                <ParticipantTile id={u.id} name={u.name} key={u.id}/> :
                                <ParticipantTile id={u.id} name={u.name} key={u.id} color={"#F2F2F2"}/>
                        ))
                    }
                </div>
            </main>
        </section>
    );
};

export default InternList;
