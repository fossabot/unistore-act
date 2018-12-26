type BoundAction = () => void|Promise<void>
type BoundActionWithArg = (payload: string) => void|Promise<void>
type AnyBoundAction = BoundAction|BoundActionWithArg


export function act(action: AnyBoundAction) {
  return (ev: Event) => action((ev.target as HTMLInputElement).value)
}

export function cact(action: AnyBoundAction) {
  return (ev: Event) => action((ev.currentTarget as HTMLInputElement).value)
}
