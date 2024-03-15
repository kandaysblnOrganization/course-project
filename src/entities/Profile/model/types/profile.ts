import { TCurrency } from 'entities/Currency';
import { TCountry } from 'entities/Country';
import { validateProfileErrors } from '../../const/validateProfileErrors';

export type TValidateProfileError = keyof typeof validateProfileErrors;

export interface IProfile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: TCurrency;
    country?: TCountry;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: TValidateProfileError[];
}
