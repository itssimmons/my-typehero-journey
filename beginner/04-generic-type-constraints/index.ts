type AllowString<T extends string,> = T;
type AllowNumber<T extends number,> = T;

type CreateLogger<F extends (a: number) => void,> = { exit: () => void, log: F };
