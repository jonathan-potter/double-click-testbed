import Canvas from 'js/canvas.js'
import Click from 'js/click.js'

const DOUBLE_CLICK_TIME_LIMIT = 300 // ms

const DOUBLE_CLICKS = []
const CLICKS = []
let MOVES = []
let clickStatus = false
let lastClick = new Click()

Canvas.bindEvents({
  mousedown({ layerX, layerY }) {
    clickStatus = true
    const time = Date.now()

    const currentClick = new Click({
      x: layerX,
      y: layerY,
      time
    })

    CLICKS.push(currentClick)


    const ageWithinLimit = lastClick && currentClick.time - lastClick.time < DOUBLE_CLICK_TIME_LIMIT
    const distanceWithinLimit = lastClick && currentClick.position.distanceTo(lastClick.position) < 20

    if (ageWithinLimit && distanceWithinLimit) {
      DOUBLE_CLICKS.push(currentClick)
    }

    lastClick = currentClick
  },
  mousemove({ layerX, layerY }) {
    if (!clickStatus) { return }

    MOVES.push(new Click({
      x: layerX,
      y: layerY
    }))
  },
  mouseup() {
    clickStatus = false
    MOVES = []
  }
})



requestAnimationFrame(function render() {
  Canvas.clear()

  CLICKS.forEach(click => {
    const age = (Date.now() - click.time) / 1000

    if (age > .500) { return }

    Canvas.drawCircle({
      ...click,
      radius: 20 * age,
      stroke: true
    })
  })

  MOVES.forEach(move => {
    Canvas.drawCircle({
      ...move,
      fill: true,
      radius: 3
    })
  })

  DOUBLE_CLICKS.forEach(move => {
    Canvas.drawCircle({
      ...move,
      fill: true,
      radius: 20,
      color: 'rgba(255, 128, 128, .2)'
    })
  })

  requestAnimationFrame(render)
})
