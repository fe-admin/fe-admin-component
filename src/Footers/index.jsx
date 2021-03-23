import "./style.scss";
export default {
  name: "Footer",
  data() {
    return {};
  },
  render(h) {
    return (
      <div class="footer">
        <slot>Copyright &copy; 2021 fe-admim</slot>
      </div>
    );
  },
};
