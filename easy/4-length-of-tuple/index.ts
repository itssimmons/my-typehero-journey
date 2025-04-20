type Length<T extends Readonly<Array<any>>> = T['length']

// complex solution
type Mutable<T> = T extends readonly [...infer R] ? R : never;
type x_Length<T extends readonly any[], A extends unknown[] = []> =
	Mutable<T> extends [infer F, ...infer R]
		? x_Length<R, [...A, F]>
		: A['length']