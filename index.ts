function match<T extends Record<string, unknown>>(
  item: T,
  condition: Partial<T>
): boolean {
  return Object.keys(condition).every((key) => item[key] === condition[key])
}

export function find<T extends Record<string, any>>(
  collection: T[],
  condition: Partial<T>
): T | undefined {
  return collection.find((item) => match(item, condition))
}

export function filter<T extends Record<string, any>>(
  collection: T[],
  condition: Partial<T>
): T[] {
  return collection.filter((item) => match(item, condition))
}

export function count<T extends Record<string, any>>(
  collection: T[],
  condition: Partial<T>
): number {
  return collection.reduce((s, i) => (match(i, condition) ? s + 1 : s), 0)
}

export function every<T extends Record<string, any>>(
  collection: T[],
  condition: Partial<T>
): boolean {
  return collection.every((item) => match(item, condition))
}

export function some<T extends Record<string, any>>(
  collection: T[],
  condition: Partial<T>
): boolean {
  return collection.some((item) => match(item, condition))
}

export function map<T extends object, P extends keyof T>(
  collection: T[],
  key: P
): Array<T[P]> {
  return collection.map((item) => item[key])
}

export function sum(collection: number[]): number {
  return collection.reduce((s, i) => s + i, 0)
}

export function isEqual(one: any[], another: any[]): boolean {
  if (one === another) return true
  if (one.length !== another.length) return false
  return one.every((_, i) => one[i] === another[i])
}
