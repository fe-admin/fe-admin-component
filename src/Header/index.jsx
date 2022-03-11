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
        <span class="logo">{(logo && logo()) || <Logo />}</span>
        {headerMenu && headerMenu()}
        {headerRightContent && headerRightContent()}
      </div>
    )
  },
}
