import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={ theme }>
        <body className={ theme }>
            <div id="root">
                <div className="wrapper">
                    <StoryComponent/>
                </div>
            </div>
        </body>
    </ThemeProvider>
);