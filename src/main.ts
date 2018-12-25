type IBoundAction<P> = (payload?: P) => void

export function act(action: IBoundAction<string>|IBoundAction<void>) {
  return (ev: Event) => (action as IBoundAction<string>)((ev.target as HTMLInputElement).value)
}

export function cact(action: IBoundAction<string>|IBoundAction<void>) {
  return (ev: Event) => (action as IBoundAction<string>)((ev.currentTarget as HTMLInputElement).value)
}
