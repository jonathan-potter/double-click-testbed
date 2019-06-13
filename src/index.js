import Canvas, { canvas } from 'js/canvas.js'

Canvas.bindEvents({
  mousedown({ layerX, layerY }) {
    Canvas.drawCircle({ x: layerX, y: layerY, radius: 20 })
  }
})
