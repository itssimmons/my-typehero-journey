type MyReturnType<T> = T extends (...args: any[]) => infer F ? F : never;
