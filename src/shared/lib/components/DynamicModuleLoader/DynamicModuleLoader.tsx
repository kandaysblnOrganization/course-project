import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { IReduxStoreWithManager, StateSchemaKey } from 'shared/config/storeConfig/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
};

type ReducersListEntry = [ StateSchemaKey, Reducer ];

interface IDynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<IDynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = false
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as IReduxStoreWithManager;

    React.useEffect(() => {
        Object.entries(reducers).forEach(([ name, reducer ]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${ name } store` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([ name, reducer ]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${ name } store` });
                });
            }
        };

        //eslint-disable-next-line
    }, []);

    return (
        <>
            { children }
        </>
    );
};
