import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('classNames', () => {
    test('with only first param', () => {
        render(<Button>TEST BUTTON</Button>);
        expect(screen.getByText('TEST BUTTON')).toBeInTheDocument();
    });
});