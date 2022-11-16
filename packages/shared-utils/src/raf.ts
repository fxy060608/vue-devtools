
let pendingCallbacks: Array<(time: number) => void> = []

/**
 * requestAnimationFrame that also works on non-browser environments like Node.
 */
export const raf = typeof requestAnimationFrame === 'function'
  ? requestAnimationFrame
  : typeof setImmediate === 'function'
    ? (fn: (time: number) => void) => {
        if (!pendingCallbacks.length) {
          setImmediate(() => {
            const now = performance.now()
            const cbs = pendingCallbacks
            // in case cbs add new callbacks
            pendingCallbacks = []
            cbs.forEach(cb => cb(now))
          })
        }

        pendingCallbacks.push(fn)
      }
    : function (callback) {
      return setTimeout(function () {
        callback(Date.now())
      }, 1000 / 60)
    }
