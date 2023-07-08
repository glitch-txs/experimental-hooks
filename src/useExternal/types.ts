/**
 * Callback function to initialize the listener and change the state
 */
export type External<T> = (set:(value: T)=>void)=>()=>void