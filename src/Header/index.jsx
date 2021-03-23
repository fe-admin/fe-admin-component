import Logo from "../Logo";
import "./style.scss";

export default {
  name: "Header",
  functional: true,
  components: { Logo },
  render(h, context) {
    const { headerMenu, headerRightContent } = context.scopedSlots;
    console.info(context);
    return (
      <div class="header">
        <router-link class="logo" to="/">
          <slot name="logo">
            <Logo />
          </slot>
          <el-divider direction="vertical"></el-divider>
        </router-link>
        {headerMenu()}
        {headerRightContent()}
      </div>
    );
  },
};
