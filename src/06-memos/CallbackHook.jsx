import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    const increment = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    )

    useEffect(() => {
    //   increment();
    }, [increment])
    


    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>CallbackHook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />

        </>
    )
}
