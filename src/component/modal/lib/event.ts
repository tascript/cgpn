import { isDisplay } from './store'


export const handleMousedown = (v: boolean) => {
  isDisplay.set(v)
}
