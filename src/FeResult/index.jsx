import { getComponentFromProp } from '../utils'
import './style.scss'

const getResultImg = (h, status) => <svg-icon iconName={`fe-${status}`} />
const FeResult = {
  name: 'FeResult',
  functional: true,
  render(h, context) {
    const extraRender = getComponentFromProp(context, 'extra')
    const { title, subTitle, status } = context.props
    return (
      <section class={`fe-result fe-result-${status}`}>
        <div class="fe-result-img">{getResultImg(h, status)}</div>
        <div class="fe-result-title">{title}</div>
        <div class="fe-result-subtitle">{subTitle}</div>
        {extraRender ? <div class="fe-result-extra">{extraRender}</div> : null}
      </section>
    )
  }
}

FeResult.install = function(Vue) {
  Vue.component(FeResult.name, FeResult)
}

export default FeResult
