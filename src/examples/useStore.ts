import { useStore } from "../useStore/useStore"

export const useWindowSize = () => {

  const initialSize: {
    height: number | undefined
    width: number | undefined
  } = {
    height: undefined,
    width: undefined
  }

  const windowSize = useStore((set)=>{

    function handleResize() {
      set({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, initialSize)

  return windowSize
}