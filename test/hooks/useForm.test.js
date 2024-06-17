import { renderHook, act } from "@testing-library/react";

import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Salvador',
        email: 'salvador@mail.com'
    }

    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function)
        });

    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Jose';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Jose';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();

        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});