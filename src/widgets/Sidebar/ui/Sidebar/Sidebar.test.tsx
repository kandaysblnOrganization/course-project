import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar tests', () => {
    test('sidebar to be in the document', () => {
        componentRender( <Sidebar/> );
        expect(screen.getByTestId('sidebar-testId')).toBeInTheDocument();
    });

    test('sidebar toggle test', () => {
        componentRender( <Sidebar/> );
        const sidebarToggleBtn = screen.getByTestId('sidebar-toggle-btn-testId');
        fireEvent.click(sidebarToggleBtn);
        expect(screen.getByTestId('sidebar-testId')).toHaveClass('collapsed');
    });
});