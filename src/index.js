import FeLayout from './FeLayout'
import WithHeader from './WithHeader'
import SvgIcon from './SvgIcon'
import FeResult from './FeResult'

const components = [FeLayout, SvgIcon, FeResult, WithHeader]

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
  FeResult,
  WithHeader
}
