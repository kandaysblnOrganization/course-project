import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // ASYNC REDUCERS
    loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface IStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManage: string;
}
