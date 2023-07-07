import { useMemo, useSyncExternalStore } from 'react'
import { External } from './types'
import { createStore } from './store'

export const useStore = <T>(fn: External<T>, initial: T)=>{
  const store = useMemo(()=>{
    return createStore<T>(fn, initial)
  }, [])

  return useSyncExternalStore(store.subscribe, store.getValue,()=>initial)
}