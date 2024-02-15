import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

describe('getCounterValue.test', () => {
    test('should return 10', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 }
        };
        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
