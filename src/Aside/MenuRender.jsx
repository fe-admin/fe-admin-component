const MenuRender = {
  name: 'MenuRender',
  functional: true,
  render(h, context) {
    const { defaultActive, defaultOpeneds, uniqueOpened, collapse, collapseTransition, menus, redirect } = context.props
    return (
      <el-menu
        default-active={defaultActive}
        default-openeds={defaultOpeneds}
        unique-opened={uniqueOpened}
        collapse={collapse}
        collapse-transition={collapseTransition}
      >
        {headerRender(h, { menus, redirect })}
      </el-menu>
    )
  },
}

const headerRender = (h, { menus, redirect }) => {
  const domArr = []
  if (!Array.isArray(menus)) return domArr
  menus.forEach((item) => {
    if (item.children && item.children.length) {
      domArr.push(
        <el-submenu index={item.id + ''} key={item.name + item.id}>
          <template slot="title">
            {item.meta.icon ? <svg-icon iconName={item.meta.icon} /> : null}
            {item.meta.title}
            <span slot="title" class="hide">
              <span class="txt">{item.meta.title}</span>
            </span>
          </template>
          {headerRender(h, { menus: item.children, redirect })}
        </el-submenu>
      )
    } else {
      const className = `item-children${item.meta && item.meta.hidden?' hide':''}`
      domArr.push(
        <el-menu-item index={item.id} key={item.name + item.id} class={className} vOn:click={() => redirect(item)}>
          {item.meta.icon ? <svg-icon iconName={item.meta.icon} /> : null}
          <span slot="title" class="hide">
            <span class="txt">{item.meta.title}</span>
          </span>
          {item.meta.title}
        </el-menu-item>
      )
    }
  })
  return domArr
}

export default MenuRender
