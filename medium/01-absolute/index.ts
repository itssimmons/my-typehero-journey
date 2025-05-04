type ToString<T extends number | string | bigint> = `${T}` 
type Absolute<T extends number | string | bigint> = ToString<T> extends `-${infer R}` ? R : ToString<T>