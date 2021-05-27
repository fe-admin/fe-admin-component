import './style.scss'
export default {
  name: 'FeFooter',
  data() {
    return {}
  },
  render(h) {
    return (
      <div class="footer">
        <slot>
          Copyright &copy; 2021 <a href="https://github.com/fe-admin/fe-admin">fe-admim</a>
        </slot>
      </div>
    )
  },
}
