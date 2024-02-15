import { Provider } from 'react-redux';
import React from 'react';
import { createReduxStore } from 'shared/config/storeConfig/store';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        navigate
    );

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};
