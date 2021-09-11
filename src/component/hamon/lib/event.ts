import { position } from './store'
export const handleMouseover = (e: MouseEvent) => {

  const x = e.clientX
  const y = e.clientY

  position.set({ x, y })
}
