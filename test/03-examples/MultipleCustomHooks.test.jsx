import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas a MultipleCutomHooks', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
        })

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Cargando'));
        expect(screen.getByText('Información de Pokémon'));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton).toBeTruthy();

        const prevButton = screen.getByRole('button', { name: 'Anterior' });
        expect(prevButton).toBeTruthy();


    });

    test('debe de mostrar un pokemon', () => {
        const pokemon = 'bulbasaur';
        const id = 1;
        useFetch.mockReturnValue({
            data:
            {
                name: 'bulbasaur',
                id: 1,
                sprites: {
                    front_default: 'front_url',
                    back_default: 'back_url',
                    front_shiny: 'front_url_shiny',
                    back_shiny: 'back_url_shiny'
                }
            },
            isLoading: false,
            hasError: false,
        })

        render(<MultipleCustomHooks />);
        expect(screen.getByText(`#${id} - ${pokemon}`)).toBeTruthy();

    });

    test('debe de llamar la funcion de incementar', () => {

        const pokemon = 'bulbasaur';
        const id = 1;
        useFetch.mockReturnValue({
            data:
            {
                name: 'bulbasaur',
                id: 1,
                sprites: {
                    front_default: 'front_url',
                    back_default: 'back_url',
                    front_shiny: 'front_url_shiny',
                    back_shiny: 'back_url_shiny'
                }
            },
            isLoading: false,
            hasError: false,
        });



        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });

});