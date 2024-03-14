export const Country = {
    Russia: 'Russia',
    USA: 'USA',
    Germany: 'Germany',
} as const;

export type Country = keyof typeof Country;
