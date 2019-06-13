import forEach from 'lodash/foreach'

const { PI: pi } = Math

export const canvas = document.getElementsByTagName('canvas')[0]
export const context = canvas.getContext('2d');

export default {
  clear() {
    context.clearRect(0, 0, 1e6, 1e6)
  },

  drawCircle({ x, y, radius }) {
    context.beginPath()
    context.arc(x, y, radius, 0, 2 * pi)
    context.stroke()
  },

  bindEvents(events) {
    forEach(events, (eventCallback, eventName) => {
      canvas.addEventListener(eventName, eventCallback)
    })
  }
}
