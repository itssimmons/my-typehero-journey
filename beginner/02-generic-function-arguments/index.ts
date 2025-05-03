const identity = <T,>(t: T) => t;

const mapArray = <T, U>(arr: T[], fn: (t: T) => U) => arr.map(fn);