type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

import type { Equal, Expect } from "npm:@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>,
  Expect<Equal<Expected3, MyOmit<Todo1, "description" | "completed">>>,
];

type X = Exclude<Todo, "description">;
type Y = Omit<Todo, "description">;

const _x: X = {
  completed: true,
  description: "Lorem ipsum",
  title: "Lorem",
};

const _y: Y = {
  completed: true,
  description: "Lorem ipsum",
  title: "Lorem",
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

interface Expected3 {
  readonly title: string;
}
