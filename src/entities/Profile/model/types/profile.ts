import { TCurrency } from 'entities/Currency';
import { Country } from 'shared/const/common';

export interface IProfile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: TCurrency;
    country?: Country;
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
}
