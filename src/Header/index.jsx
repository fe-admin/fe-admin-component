import Logo from '../Logo'
import './style.scss'

export default {
  name: 'Header',
  functional: true,
  components: { Logo },
  render(h, context) {
    const { headerMenu, headerRightContent, logo } = context.scopedSlots
    return (
      <div class="header">
        <router-link class="logo" to="/">
          {(logo && logo()) || <Logo />}
        </router-link>
        {headerMenu && headerMenu()}
        {headerRightContent && headerRightContent()}
      </div>
    )
  },
}
