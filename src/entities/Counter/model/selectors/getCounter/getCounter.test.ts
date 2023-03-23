import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

describe('Get counter test', () => {
    test('should return counter', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 }
        };

        expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
    });
});