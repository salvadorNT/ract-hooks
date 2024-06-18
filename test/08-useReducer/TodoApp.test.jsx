import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/08-useReducer/hooks/useTodo';

jest.mock('../../src/08-useReducer/hooks/useTodo');

describe('Pruebas en <TodoApp/>', () => {

    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Piedra del alma',
                done: false,
            },
            {
                id: 2,
                description: 'Piedra del tiempo',
                done: true,
            }
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('debe mostrar el componente correctamente', () => {
        render(<TodoApp />)
        expect(screen.getByText('Piedra del alma')).toBeTruthy();
        expect(screen.getByText('Piedra del tiempo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

    });
});