export const handleMouseover = (e: MouseEvent) => {

  const x = e.clientX
  const y = e.clientY

  const customEvent = new CustomEvent('jamover', {
    detail: {
      x, y
    }
  })
  window.dispatchEvent(customEvent)
}
