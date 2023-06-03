import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button tests', () => {
    test('with only first param', () => {
        render(<Button>TEST BUTTON</Button>);
        expect(screen.getByText('TEST BUTTON')).toBeInTheDocument();
    });

    test('with only first param', () => {
        render(<Button theme={ ButtonTheme.CLEAR }>TEST BUTTON</Button>);
        expect(screen.getByText('TEST BUTTON')).toHaveClass('clear');
        screen.debug();
    });
});
