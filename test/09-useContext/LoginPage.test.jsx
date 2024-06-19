import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <LoginPage/>', () => {

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

        const buttonLogin = screen.getByRole('button', { name: 'Establecer Usuario' });
        expect(buttonLogin).toBeTruthy();

    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonLogin = screen.getByRole('button', { name: 'Establecer Usuario' });

        fireEvent.click(buttonLogin);
        expect(setUserMock).toHaveBeenCalledWith({ id: 234, name: 'Jose', email: 'jose@mail.com' });
    });
});