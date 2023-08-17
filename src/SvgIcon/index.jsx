/*
 * @Author: long
 * @Date: 2021-11-04 09:24:08
 * @LastEditTime: 2022-12-21 15:05:14
 * @LastEditors: long
 * @Description:
 * @FilePath: /website/Users/long/Documents/workspace/fe-admin-component/src/SvgIcon/index.jsx
 *
 */
const SvgIcon = {
  name: 'SvgIcon',
  props: ['className', 'iconName'],
  data() {
    return {}
  },
  render(h) {
    const { className, iconName } = this
    const icoName = `#${iconName}`
    return (
      <svg aria-hidden="true" class={className ? className : 'icon'}>
        {this.setUse(h, icoName)}
      </svg>
    )
  },
  methods: {
    setUse(h, name) {
      return h('use', {
        attrs: { 'xlink:href': name },
      })
    },
  },
}
SvgIcon.install = function (Vue) {
  Vue.component(SvgIcon.name, SvgIcon)
}
export default SvgIcon
