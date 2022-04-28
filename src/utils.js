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

export function checkAlive({ menuData, menuId }) {
  let falg = false
  if (Array.isArray(menuData)) {
    const item = menuData.find((item) => item.name === menuId)
    if (item) {
      return item.meta.keepAlive
    }
  }
  return falg
}
