import { getMenuItem } from '../utils'
import './style.scss'

export default {
  name: 'Breadcrumb',
  props: ['menuData'],
  data() {
    return {}
  },
  render() {
    return (
      <section class="fe-breadcrumb">
        <el-breadcrumb separator="/">{this.formatBreadcrumb()}</el-breadcrumb>
      </section>
    )
  },
  methods: {
    formatBreadcrumb() {
      const { menuData } = this
      const list = []
      menuData.forEach((item) => {
        item = getMenuItem(item)
        list.push(<el-breadcrumb-item to={{ path: item.path }}>{item.title}</el-breadcrumb-item>)
      })
      return list
    },
  },
}
