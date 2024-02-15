import React from 'react';
import { useStore } from 'react-redux';
import { IReduxStoreWithManager, StateSchemaKey } from 'shared/config/storeConfig/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
};

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
    const dispatch = useAppDispatch();
    const store = useStore() as IReduxStoreWithManager;

    React.useEffect( () => {
        Object.entries( reducers ).forEach( ([ name, reducer ]) => {
            store.reducerManager.add( name as StateSchemaKey, reducer );
            dispatch( { type: `@INIT ${ name } store` } );
        } );

        return () => {
            if (removeAfterUnmount) {
                Object.entries( reducers ).forEach( ([ name, _reducer ]) => {
                    store.reducerManager.remove( name as StateSchemaKey );
                    dispatch( { type: `@DESTROY ${ name } store` } );
                } );
            }
        };
    }, [ removeAfterUnmount, store.reducerManager, dispatch, reducers ] );

    return (
        <>
            { children }
        </>
    );
};
