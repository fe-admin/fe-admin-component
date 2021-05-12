import './style.scss'

export default {
  name: 'Collapse',
  functional: true,
  data() {
    return {}
  },
  render(h, context) {
    const { isCollapse, toggleCollapse } = context.props
    return (
      <div
        class="collapse"
        vOn:click={() => {
          toggleCollapse(!isCollapse)
        }}
      >
        <svg-icon className="collapse-icon" iconName={isCollapse ? 'fe-menu-open' : 'fe-menu-close'} />
      </div>
    )
  },
}
