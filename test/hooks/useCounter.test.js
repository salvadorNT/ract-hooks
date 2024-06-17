import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter', () => {
    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el valor counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('debe de incrementar el contador', () => {
        const defautlValue = 10;
        const { result } = renderHook(() => useCounter(defautlValue));
        const { increment } = result.current;

        act(() => {
            increment();
            increment(4)
        });
        expect(result.current.counter).toBe(15);

    });


    test('debe de decrementar el contador', () => {
        const defautlValue = 10;
        const { result } = renderHook(() => useCounter(defautlValue));
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(4)
        });
        expect(result.current.counter).toBe(5);

    });

    test('debe de regresar el contador al valor predefinido', () => {
        const defautlValue = 100;
        const { result } = renderHook(() => useCounter(defautlValue));
        const { increment, reset } = result.current;

        act(() => {
            increment();
            reset();
        });
        expect(result.current.counter).toBe(defautlValue);

    });

});