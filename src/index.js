import Canvas, { canvas } from 'js/canvas.js'
import Click from 'js/click.js'

const CLICKS = []

Canvas.bindEvents({
  mousedown({ layerX, layerY }) {
    CLICKS.push(new Click({
      x: layerX,
      y: layerY,
      time: Date.now()
    }))
  }
})



requestAnimationFrame(function render() {
  Canvas.clear()

  CLICKS.forEach(click => {
    const age = (Date.now() - click.time) / 1000

    if (age > .500) { return }

    Canvas.drawCircle({
      ...click,
      radius: 20 * age
    })
  })

  requestAnimationFrame(render)
})
