const SvgIcon = {
  name: "SvgIcon",
  props: ["className", "iconName"],
  data() {
    return {};
  },
  render(h) {
    const { className, iconName } = this;
    const icoName = `#${iconName}`;
    return (
      <svg aria-hidden="true" class={className ? className : "icon"}>
        {this.setUse(h, icoName)}
      </svg>
    );
  },
  methods: {
    setUse(h, name) {
      return h("use", {
        attrs: { "xlink:href": name },
      });
    },
  },
};
SvgIcon.install = function(Vue) {
  Vue.component(SvgIcon.name, SvgIcon);
};
export default SvgIcon;
