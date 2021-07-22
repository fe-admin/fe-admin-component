import './style.scss'

export default {
  name: 'FeFooter',
  render(h) {
    const footerDefault = <div class="footer-bd">Copyright &copy; 2021 <a href="https://github.com/fe-admin/fe-admin">fe-admim</a></div>
    return (
      <div class="footer">
        {this.$slots.default ? this.$slots.default :footerDefault}
      </div>
    )
  },
}
