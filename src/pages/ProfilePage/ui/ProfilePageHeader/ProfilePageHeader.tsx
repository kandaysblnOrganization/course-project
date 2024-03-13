import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<IProfilePageHeaderProps> = (props) => {
    const {
        className,
    } = props;

    const { t: profileT } = useTranslation( 'profile' );
    const { t } = useTranslation();

    const readonly = useSelector( getProfileReadonly );
    const dispatch = useAppDispatch();

    const onEdit = useCallback( () => {
        dispatch( profileActions.setReadonly( false ) );
    }, [ dispatch ] );

    const onCancelEdit = useCallback( () => {
        dispatch( profileActions.cancelEdit() );
    }, [ dispatch ] );

    const onSaveEdit = useCallback( () => {
        dispatch( updateProfileData() );
    }, [ dispatch ] );

    return (
        <div className={ classNames( classes.profileHeader, {}, [ className ] ) }>
            <Text title={ profileT( 'profile_title' ) }/>
            <div className={ classes.actions }>
                { readonly
                    ? (
                        <Button
                            theme={ ButtonTheme.OUTLINED }
                            onClick={ onEdit }
                        >
                            { t( 'edit_button_text' ) }
                        </Button>
                    )
                    : <>
                        <Button
                            theme={ ButtonTheme.OUTLINED_ERROR }
                            onClick={ onCancelEdit }
                        >
                            { t( 'cancel_button_text' ) }
                        </Button>
                        <Button
                            theme={ ButtonTheme.OUTLINED }
                            onClick={ onSaveEdit }
                        >
                            { t( 'save_button_text' ) }
                        </Button>
                    </>
                }
            </div>
        </div>
    );
};
