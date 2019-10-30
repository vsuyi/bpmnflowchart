import zrender from 'zrender'

const StartEvent = zrender.Path.extend({
  type: 'startEvent',
  shape: {
    // x, y, width, height
  },
  buildPath (path, shape) {
    path.moveTo(shape.x, shape.y)
    path.lineTo(shape.x + shape.width, shape.y)
    path.lineTo(shape.x + shape.width, shape.y + shape.height)
    path.lineTo(shape.x, shape.y + shape.height)
    path.closePath()
  }
})

export default StartEvent
