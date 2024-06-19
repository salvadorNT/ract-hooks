import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">
        {JSON.stringify(user, null, 2)}
      </pre>

      <button onClick={() => setUser({ id: 234, name: 'Jose', email: 'jose@mail.com' })} className="btn btn-primary">
        Establecer Usuario
      </button>
    </>

  )
}
