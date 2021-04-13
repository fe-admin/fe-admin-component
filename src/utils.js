export const getComponentFromProp = (instance, prop) => {
  const slots = instance.slots && instance.slots()
  return slots[prop] || instance.props[prop]
}

export function getMenuItem(item) {
  return {
    path: item.path || '/',
    title: item.meta?.title || '',
  }
}
