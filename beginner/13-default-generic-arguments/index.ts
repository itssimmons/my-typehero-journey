type ApiRequest<D, M extends 'GET' | 'POST' = 'GET'> = { data: D, method: M };

type TSConfig<O = { strict: true }> = O;