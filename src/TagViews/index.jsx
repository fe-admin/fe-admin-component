import get from 'lodash.get'
import './style.scss'

const TagView = {
  name: 'TagView',
  props: ['menuData'],
  data() {
    return {
      tagViews: [],
      current: '',
    }
  },
  created() {
    let { menuData } = this
    const homePath = get(menuData, '[0].path', '/dashboard')
    const homeTitle = get(menuData, '[0].meta.title', 'home')
    const {
      meta: { title },
      path,
    } = this.$route

    // home
    if (homePath === path) {
      this.tagViews = [
        {
          path: homePath,
          title: homeTitle,
        },
      ]
    } else {
      this.tagViews = [
        {
          path: homePath,
          title: homeTitle,
        },
        {
          path,
          title,
        },
      ]
    }
    this.setCurrent(title)
  },
  watch: {
    $route({ path, meta: { title } }) {
      const { tagViews } = this
      const index = this.getViewsIndex(path)
      if (index === -1) {
        this.$set(this.tagViews, tagViews.length, { path, title })
      }
      this.setCurrent(title)
    },
  },
  render() {
    const { tagViews, tabRemove, tabClick, current } = this
    const tabs = []
    tagViews.forEach((item, index) => {
      tabs.push(<el-tab-pane closable={index !== 0} label={item.title} key={item.path} name={item.title}></el-tab-pane>)
    })

    return (
      <el-tabs class="tag-view" value={current} type="card" v-on:tab-remove={tabRemove} v-on:tab-click={tabClick}>
        {tabs}
      </el-tabs>
    )
  },

  methods: {
    setCurrent(title) {
      this.current = title
    },
    getViewsIndex(value, type = 'path') {
      return this.tagViews.findIndex((item) => item[type] === value)
    },
    async tabRemove(name) {
      const { tagViews, getViewsIndex } = this
      const index = getViewsIndex(name, 'title')
      if (index > -1) {
        tagViews.splice(index, 1)
        await this.$nextTick()
        this.$router.push(tagViews[tagViews.length - 1].path)
      }
    },
    tabClick({ index }) {
      const { tagViews } = this
      this.$router.push(tagViews[index].path)
    },
  },
}

export default TagView
