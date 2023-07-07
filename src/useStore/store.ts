import { External } from "./types";

export const createStore = <TValue>(fn: External<TValue>, initial: TValue)=>{
  const external: External<TValue> = fn;
  let callback: ()=>void;

  let value: TValue = initial;
  const getValue = ()=> value;
  const setter = (newValue: TValue)=>{
    value = newValue
    callback()
  }

  const subscribe = (cb: ()=>void)=>{
    callback = cb
    return external(setter)
  }

  return {
    subscribe,
    getValue
  }
}