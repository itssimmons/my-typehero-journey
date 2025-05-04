type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type All<T extends Array<unknown>, K extends unknown> = 
	T extends [infer F, ...infer R]
	? Equal<F, K> extends true
		? All<R, K>
		: false
	: true

type x_cases = [
	All<[1, 1, 2], 1>,
	All<[number, number, string], number>
]
