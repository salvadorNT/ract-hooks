import { useEffect, useReducer } from "react";
import { todoReducer } from "../TodoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {


    const [todos, dispatchTodos] = useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatchTodos(action);
    }

    const handleDeleteTodo = (id) => {

        dispatchTodos({
            type: 'Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatchTodos({
            type: 'Toggle Todo',
            payload: id
        });
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
