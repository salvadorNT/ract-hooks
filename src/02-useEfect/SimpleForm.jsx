import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'salvador',
        email: 'salvador@mail.com'
    });
    
    const { username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
    //   console.log('useEfect called');
    }, []);
    
    useEffect(() => {
    //   console.log('formState called');
    }, [formState]);
    
    useEffect(() => {
    //   console.log('email called');
    }, [email]);


    
    
    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="user@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username==='salvador') && <Message/>
            }
            
        </>
    )
}
