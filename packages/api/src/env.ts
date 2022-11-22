import type { PluginDescriptor, SetupFunction } from './index.js'
import type { ApiProxy } from './proxy.js'

export interface PluginQueueItem {
  pluginDescriptor: PluginDescriptor
  setupFn: SetupFunction
  proxy?: ApiProxy
}

interface GlobalTarget {
  __VUE_DEVTOOLS_PLUGINS__?: PluginQueueItem[]
  __VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__?: boolean
}

export function getDevtoolsGlobalHook (): any {
  return (getTarget() as any).__VUE_DEVTOOLS_GLOBAL_HOOK__
}
// fixed by xxxxxx
declare const my: any
declare const __global__:any
export function getTarget (): GlobalTarget {
  // @ts-ignore
  return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
    ? window
    : typeof globalThis !== 'undefined'
      ? globalThis
      : typeof __global__ !== 'undefined'
        ? __global__
        : typeof my !== 'undefined'
          ? my
          : {}
}

export const isProxyAvailable = typeof Proxy === 'function'
