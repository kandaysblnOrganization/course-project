import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const AppComponent = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [ dispatch ]);

    return (
        <div className={ classNames('wrapper', {}, []) }>
            <React.Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </React.Suspense>
        </div>
    );
};

export const App = React.memo( AppComponent );
