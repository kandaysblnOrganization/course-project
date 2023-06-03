import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface IBugButtonProps {
    className?: string;
}

export const BugButton: React.FC<IBugButtonProps> = (props) => {

    const { t } = useTranslation();
    const [ error, setError ] = React.useState(false);

    const onThrow = () => setError(true);

    React.useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [ error ]);

    return (
        <Button
            onClick={ onThrow }
        >
            { t('throw_error') }
        </Button>
    );
};
