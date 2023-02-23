import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar tests', () => {
    test('sidebar to be in the document', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar-testId')).toBeInTheDocument();
    });

    test('sidebar toggle test', () => {
        renderWithTranslation(<Sidebar/>);
        const sidebarToggleBtn = screen.getByTestId('sidebar-toggle-btn-testId');
        fireEvent.click(sidebarToggleBtn);
        expect(screen.getByTestId('sidebar-testId')).toHaveClass('collapsed');
    });
});