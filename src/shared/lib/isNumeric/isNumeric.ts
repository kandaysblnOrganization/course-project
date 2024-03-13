export const isNumeric = (value: string | number) => {
    return !Number.isNaN( +value );
};
