import { counterActions, counterReducer } from './counterSlice';
import { ICounterSchema } from 'entities/Counter';

describe('counterSlice', () => {
    test('counter slice decrement', () => {
        const state: ICounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('counter slice increment', () => {
        const state: ICounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});