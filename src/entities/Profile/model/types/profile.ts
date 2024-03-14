import { TCurrency } from 'entities/Currency';
import { TCountry } from 'entities/Country';

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
}
