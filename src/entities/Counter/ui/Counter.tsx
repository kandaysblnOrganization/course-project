import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter-test-id">
            <h2 data-testid="value-title-test-id">
                { t('counter-title') } = { counterValue }
            </h2>
            <Button
                data-testid="increment-btn-test-id"
                onClick={ increment }
            >
                { t('counter-increment') }
            </Button>
            <Button
                data-testid="decrement-btn-test-id"
                onClick={ decrement }
            >
                { t('counter-decrement') }
            </Button>
        </div>
    );
};