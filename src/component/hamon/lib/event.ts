import { position, isAnimate } from './store'

export const handleMouseover = (e: MouseEvent) => {

  const x = e.clientX
  const y = e.clientY

  position.set({ x, y })
}

export const handleMousedown = () => {
  isAnimate.set(true)
}
export const handleMouseUp = () => {
  isAnimate.set(false)
}
