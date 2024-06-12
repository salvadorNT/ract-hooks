import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
    console.log('Me volvi a ejecutar');
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >incrementar</button>
    )
}
)