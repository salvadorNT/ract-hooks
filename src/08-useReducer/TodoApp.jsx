import { useReducer } from "react"
import { todoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del poder',
        done: false,
    },
];

export const TodoApp = () => {

    const [todos, dispatchTodos] = useReducer(todoReducer, initialState);


    const handleNewTodo = (todo) => {
        const action = {
        type: 'Add Todo',
        payload: todo
        }
        dispatchTodos(action);
    }
    return (
        <>
            <h1>Todo App: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}
