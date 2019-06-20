import Vec2 from 'js/vec2.js'

export default class Click {
  constructor({ x, y, time } = {}) {
    this.x = x
    this.y = y
    this.time = time
  }

  get position () {
    return new Vec2(this)
  }
}
