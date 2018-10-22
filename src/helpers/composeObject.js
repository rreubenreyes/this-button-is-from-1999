export default function composeObject({ keys, values }) {
  if (!keys.length || !values.length) {
    throw new Error('Key and value sources must be arrays.')
  }
  if (keys.length !== values.length) {
    throw new Error('Key and value source arrays must be of equal length.')
  }

  const obj = {}
  keys.forEach((key, index) => {
    obj[key] = values[index]
  })

  return obj
}
