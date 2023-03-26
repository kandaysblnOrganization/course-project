import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter tests', () => {
    test('counter to be in the document', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-test-id')).toBeInTheDocument();
    });

    test('counter is 10', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title-test-id')).toHaveTextContent('10');
    });

    test('increment counter', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn-test-id'));
        expect(screen.getByTestId('value-title-test-id')).toHaveTextContent('11');
    });

    test('decrement counter', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn-test-id'));
        expect(screen.getByTestId('value-title-test-id')).toHaveTextContent('9');
    });
});