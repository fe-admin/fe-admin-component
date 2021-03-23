import "./style.scss";

export default {
  name: "Collapse",
  functional: true,
  data() {
    return {};
  },
  render(h, context) {
    const { isCollapse, ToggleCollapse } = context.props;
    console.info(ToggleCollapse);
    return (
      <div
        class="collapse"
        vOn:click={() => {
          ToggleCollapse(!isCollapse);
        }}
      >
        <svg-icon
          className="collapse-icon"
          iconName={isCollapse ? "fe-menu-open" : "fe-menu-close"}
        />
      </div>
    );
  },
};
