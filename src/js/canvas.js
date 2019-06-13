import forEach from 'lodash/foreach'

const { PI: pi } = Math

export const canvas = document.getElementsByTagName('canvas')[0]
export const context = canvas.getContext('2d');

export default {
  drawCircle({ x, y, radius }) {
    context.beginPath()
    context.arc(x, y, radius, 0, 2 * pi)
    context.fill()
  },

  bindEvents(events) {
    forEach(events, (eventCallback, eventName) => {
      canvas.addEventListener(eventName, eventCallback)
    })
  }
}
