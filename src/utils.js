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

export function getAlive({ menuData }) {
  let list = ['xxx']
  if (Array.isArray(menuData)) {
    menuData.forEach((item) => {
      if (item.meta.keepAlive) {
        list.push(item.name)
      }
    })
  }
  return list.join(',')
}
