import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe('Pruebas en TodoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe de agregar un Todo', () => {
        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo #2',
                done: false,
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un Todo', () => {
        const action = {
            type: 'Remove Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('debe de realizar el toggle del Todo', () => {
        const action = {
            type: 'Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
        
        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    })
});