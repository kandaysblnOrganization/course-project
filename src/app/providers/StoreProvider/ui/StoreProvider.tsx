import { Provider } from 'react-redux';
import React from 'react';
import { createReduxStore } from 'shared/config/storeConfig/store';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface IStoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: React.FC<IStoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props;

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>
    );

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};
