export const Currency = {
    RUB: 'RUB',
    EUR: 'EUR',
    USD: 'USD',
} as const;

export type Currency = keyof typeof Currency;

export const Country = {
    Russia: 'Russia',
    USA: 'USA',
    Germany: 'Germany',
} as const;

export type Country = keyof typeof Country;
