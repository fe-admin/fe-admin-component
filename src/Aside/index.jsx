import get from 'lodash.get'
import MenuRender from './MenuRender'
import './style.scss'

export default {
  name: 'Aside',
  components: { MenuRender },
  props: ['menuId', 'menuData', 'isCollapse', 'updateMenuId'],
  data() {
    return {
      activeId: '0',
      defaultOpeneds: [0],
      flag: false,
    }
  },
  created() {
    this.listFilter()
    this.setIndex()
  },
  mounted() {
    this.redirect = this.redirect.bind(this)
  },

  updated() {
    this.listFilter()
    this.setIndex()
  },

  render() {
    const { activeId, defaultOpeneds, isCollapse, menuData, redirect } = this
    return (
      <el-scrollbar class="fe-aside">
        {this.$scopedSlots.default && this.$scopedSlots.default()}
        <MenuRender
          defaultActive={activeId}
          defaultOpeneds={defaultOpeneds}
          uniqueOpened={true}
          collapse={isCollapse}
          collapseTransition={false}
          menus={menuData}
          redirect={redirect}
        ></MenuRender>
      </el-scrollbar>
    )
  },
  methods: {
    setIndex() {
      this.activeId = `${this.ergodic(this.menuData, this.menuId)}`
      this.flag = false
      this.updateMenuId(this.activeId)
    },
    getRelation(list, name) {
      var id = 0
      for (var i = 0; i < list.length; i += 1) {
        if (list[i].name === name) {
          id = list[i].id
          break
        }
      }
      return id
    },
    ergodic(list, id) {
      let mid = 0
      if (this.flag) return
      for (let index = 0; index < list.length; index += 1) {
        const item = list[index]
        if (this.flag) break
        if (item.name === id) {
          if (item.meta.relation) {
            mid = this.getRelation(list, item.meta.relation)
          } else {
            mid = item.id
          }
          this.flag = true
          break
        } else if (item.children) {
          mid = this.ergodic(item.children, id)
        }
      }
      return mid
    },
    checkHidden(submenu, id) {
      return submenu.find((item) => item.id === id && item.meta.hidden)
    },
    redirect({ path, meta: { title } }) {
      this.$router.push(path)
    },
    formatId(menu, parent) {
      menu.forEach((item, index) => {
        if (parent) {
          item.id = `${parent.id}-${index}`
        } else {
          item.id = `${index}`
        }
        if (item.children) this.formatId(item.children, item)
      })
    },
    listFilter() {
      this.formatId(this.menuData)
    },
  },
}
