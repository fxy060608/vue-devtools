import { initBackend } from '@back/index'
import { Bridge, target } from '@vue-devtools/shared-utils'

interface DevtoolsSocket {
  on: (
    type:
      | 'connect'
      | 'disconnect'
      | 'vue-message'
      | 'vue-devtools-disconnect-backend',
    callback: (data: unknown) => void
  ) => void
  emit: (type: 'vue-message' | 'vue-devtools-init', data?: unknown) => void
  disconnect: () => void
}

target.__VUE_DEVTOOLS_ON_SOCKET_READY__(() => {
  const socket = target.__VUE_DEVTOOLS_SOCKET__ as DevtoolsSocket

  const connectedMessage = () => {
    if (target.__VUE_DEVTOOLS_TOAST__) {
      target.__VUE_DEVTOOLS_TOAST__('Remote Devtools Connected', 'normal')
    }
  }

  const disconnectedMessage = () => {
    if (target.__VUE_DEVTOOLS_TOAST__) {
      target.__VUE_DEVTOOLS_TOAST__('Remote Devtools Disconnected', 'error')
    }
  }

  socket.on('connect', () => {
    connectedMessage()
    initBackend(bridge)
    socket.emit('vue-devtools-init')
  })

  // Global disconnect handler. Fires in two cases:
  // - after calling above socket.disconnect()
  // - once devtools is closed (that's why we need socket.disconnect() here too, to prevent further polling)
  socket.on('disconnect', () => {
    socket.disconnect()
    disconnectedMessage()
  })

  // Disconnect socket once other client is connected
  socket.on('vue-devtools-disconnect-backend', () => {
    socket.disconnect()
  })

  const bridge = new Bridge({
    listen (fn) {
      socket.on('vue-message', (data) => fn(data))
    },
    send (data) {
      socket.emit('vue-message', data)
    },
  })

  bridge.on('shutdown', () => {
    socket.disconnect()
    disconnectedMessage()
  })
})
