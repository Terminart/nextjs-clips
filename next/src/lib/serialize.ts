import { Timestamp } from '@firebase/firestore'

const hasOwnProperty = (obj: unknown, key: string) => {
  return !!obj && Object.prototype.hasOwnProperty.call(obj, key)
}

const hasOwnProperties = (obj: unknown, keys: string[]) => {
  for (const key of keys) {
    if (!hasOwnProperty(obj, key)) {
      return false
    }
  }
  return true
}

export const serialize = <T>(value: T) => {
  return JSON.parse(JSON.stringify(value))
}

export const deserialize = <T>(value: T) => {
  return JSON.parse(JSON.stringify(value), (key, value) => {
    if (hasOwnProperties(value, ['seconds', 'nanoseconds'])) {
      return new Timestamp(value.seconds, value.nanoseconds)
    }
    return value
  }) as T
}
