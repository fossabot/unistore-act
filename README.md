@whitetrefoil/unistore-act
============================

**WARNING: THIS APPLICATION IS STILL DEVELOPING!!!**

Act a action directly from DOM events for unistore.

Why This?
---------

Usually we call an action like: `myAction(payload)`.
While the `payload` often is `ev.target.value`.
So here is a shortcut.

Usage
-----

```ts
act(myAction)
// equals
(ev: Event) => myAction(ev.target.value)

// Here's also a `currentTarget` version:
cact(myAction)
// equals
(ev: Event) => myAction(ev.currentTarget.value)
```

```tsx
import { act } from '@whitetrefoil/unistore-act'

const myAction = // some action

class MyComp {
  // ...
  render() {
    return (
      <div><button onClick={act(myAction)}>Click Me!</button></div>
    )
  }
  // ...
}

```

Changelog
---------

### v0.1.0

* Initial release.
