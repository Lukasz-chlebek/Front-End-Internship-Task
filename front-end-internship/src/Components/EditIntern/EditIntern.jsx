import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Form from "../Form/Form";

const EditIntern = () => {
    const { id } = useParams();
    const onSubmit = (data)=>{console.log(data)}
    useEffect(() => {
        //TODO: get intern from REST api http://localhost:3001/interns/:id
        console.log(`I want to get intern with id: ${id}!`)
    }, [id]);

    return (
        <div>
            <NavLink to="/">Back to list </NavLink>
            <Form onSubmit={onSubmit}/>
        </div>
    );
};

export default EditIntern;