export type RecursiveValueOf<T extends object> = {
  [K in keyof T]: T[K] extends unknown[]
    ? T[K]
    : T[K] extends object
    ? RecursiveValueOf<T[K]>
    : T[K]
}[keyof T]
