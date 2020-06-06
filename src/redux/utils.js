const types = {}

export const type = (typeName) => {
  if (types[typeName]) {
    throw new Error(`Duplicate action '${typeName}' defined`)
  }

  types[typeName] = true

  return typeName
}

export const createAction = (type, payload) => {
  const newAction = { type }
  if (typeof payload !== 'undefined') {
    newAction['payload'] = payload
  }

  return newAction
}
