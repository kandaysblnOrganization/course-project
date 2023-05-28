import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema, IStoreWithManager } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // // @ts-ignore
    // store.reducerManager = reducerManager;

    return store;
};
