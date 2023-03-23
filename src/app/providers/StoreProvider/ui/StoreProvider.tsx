import { Provider } from 'react-redux';
import React from 'react';
import { createReduxStore } from 'shared/config/storeConfig/store';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

interface IStoreProviderProps {
    children: React.ReactNode;
    initialState?: IStateSchema;
}

export const StoreProvider: React.FC<IStoreProviderProps> = (props) => {
    const {
        children,
        initialState
    } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};