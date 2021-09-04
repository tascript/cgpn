export const handleMouseover = (e: MouseEvent, x: MouseEvent["clientX"], y: MouseEvent["clientY"]) => {

  const dx = e.clientX - x
  const dy = e.clientY - y

  x = e.clientX
  y = e.clientY

  const customEvent = new CustomEvent('jamover', {
    detail: {
      x, y, dx, dy
    }
  })
  window.dispatchEvent(customEvent)
  window.addEventListener('mousemove', handleMouseover as EventListener)
}
