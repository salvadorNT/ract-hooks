import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()

    const focusFirstInput = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
            
            ref={inputRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control mt-2" />

            <input 
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control mt-2" />

            <input 
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control mt-2" />

            <input 
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control mt-2" />

            <button className="btn btn-primary mt-2"
            onClick={focusFirstInput}>
                Set Focus
            </button>
        </>

    )
}
