import FeLayout from './FeLayout'
import SvgIcon from './SvgIcon'
import FeResult from './FeResult'

const components = [FeLayout, SvgIcon, FeResult]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '0.0.1',
  install,
  FeLayout,
  SvgIcon,
  FeResult
}
const sdlfsdl = 111
sd = 213
