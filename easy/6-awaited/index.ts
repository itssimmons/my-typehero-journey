type MyAwaited<T> = T extends Promise<infer U>
  ? MyAwaited<U>
  : T extends PromiseLike<infer V>
    ? V
    : T;
