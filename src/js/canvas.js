import forEach from 'lodash/foreach'

const { PI: pi } = Math

export const canvas = document.getElementsByTagName('canvas')[0]
export const context = canvas.getContext('2d');

canvas.width = window.outerWidth
canvas.height = window.outerHeight

export default {
  clear() {
    context.clearRect(0, 0, 1e6, 1e6)
  },

  drawCircle({ x, y, radius = 20, stroke, fill, color }) {
    context.save()
    context.beginPath()
    context.strokeStyle = color
    context.fillStyle = color

    context.arc(x, y, radius, 0, 2 * pi)

    if (stroke) {
      context.stroke()
    }

    if (fill) {
      context.fill()
    }
    context.restore()
  },

  bindEvents(events) {
    forEach(events, (eventCallback, eventName) => {
      canvas.addEventListener(eventName, eventCallback)
    })
  }
}
