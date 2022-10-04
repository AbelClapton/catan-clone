class Hexagon {
  constructor(resource, diceRoll) {
    this.resource = resource
    this.diceRoll = diceRoll
  }

  setResource(resource) {
    this.resource = resource
  }
}

const hexagons = []
const resources = map([
  ['wood', 4],
  ['wheat', 4],
  ['sheep', 4],
  ['stone', 3],
  ['clay', 3]
])

const range = (n) => {
  return [...Array(n).keys()]
}

const random = (n) => {
  return Math.floor(Math.random() * n) + 1
}

const getRandomResource = () => {
  const keys = resources.keys()
  const resource = keys[random(keys.length)]
}

const createMap = (rows = [3,4,5,4,3]) => {
  for (let i = 0, r = rows.length; i < r; i++) {
    for (let j = 0, h = range(rows[i]); j++) {

    }
  }
}


