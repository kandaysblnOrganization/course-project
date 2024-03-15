import { IProfile, TValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile: IProfile) => {
    const {
        country,
        avatar,
        currency,
        age,
        city,
        username,
        lastname,
        firstname
    } = profile;

    const errors: TValidateProfileError[] = [];

    if (!firstname || !lastname) {
        errors.push( 'INCORRECT_USER_DATA' );
    }

    if (!username) {
        errors.push( 'INCORRECT_USERNAME' );
    }

    if (!age || !Number.isInteger( age )) {
        errors.push( 'INCORRECT_AGE' );
    }

    if (!city) {
        errors.push( 'INCORRECT_CITY' );
    }

    if (!currency) {
        errors.push( 'INCORRECT_CURRENCY' );
    }

    if (!avatar) {
        errors.push( 'INCORRECT_AVATAR' );
    }

    if (!country) {
        errors.push( 'INCORRECT_COUNTRY' );
    }

    return errors;
};
