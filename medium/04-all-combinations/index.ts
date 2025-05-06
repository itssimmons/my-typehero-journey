type Split<S extends string> = S extends `${infer A}${infer B}` ? A | Split<B>
  : "";

type Join<U extends string, S extends string = U> = S extends S
  ? "" | S | `${S}${Join<Exclude<U, S>>}`
  : never;

type AllCombinations<S extends string> = Join<Split<S>>;

type x_debug = [
  //[StringToUnion<"ABC">],
  //[StringToUnion<"12345678">],
  [Join<"A" | "B" | "C">],
];

type cases = [
  [AllCombinations<"">],
  [AllCombinations<"A">],
  [AllCombinations<"AB">],
];
