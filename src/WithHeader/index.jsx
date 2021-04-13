import Breadcrumb from '../Breadcrumb'

import './style.scss'
export default {
  name: 'WithHeader',
  data() {
    return {}
  },
  methods: {
    routeFormat() {
      const routes = this.$route.matched
      const list = []
      routes.forEach((route) => {
        const { meta, name, path, redirect } = route
        list.push({
          meta,
          name,
          path,
          redirect,
        })
      })
      return list
    },
  },
  render() {
    const content = this.$slots.content
    const menuData = this.routeFormat()
    const route = [...menuData].pop(0)
    return (
      <div class="page-header-warp">
        <div class="page-header">
          <Breadcrumb menuData={menuData} />
          <div class="page-header-heading">{route.meta.title}</div>
          {content && <div class="page-header-content">{content}</div>}
        </div>
        {this.$slots.default}
      </div>
    )
  },
}
