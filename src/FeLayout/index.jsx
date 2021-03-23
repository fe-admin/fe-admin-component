import Header from "../Header";
import Footer from "../Footers";
import Aside from "../Aside";
import Collapse from "../Collapse";
import Breadcrumb from "../Breadcrumb";
import { getComponentFromProp } from "../utils";
import "./style.scss";

const FeLayout = {
  name: "FeLayout",
  functional: true,
  render(h, context) {
    const asideTitleRender = getComponentFromProp(context, "asideTitle");
    const footerRender = getComponentFromProp(context, "footer");
    const { isCollapse, ToggleCollapse } = context.props;
    console.info(context);
    return (
      <el-container class={isCollapse ? "fe-layout-collapse" : "fe-layout"}>
        <el-header height="46px">
          <Header
            {...{
              props: { ...context.props },
              scopedSlots: { ...context.scopedSlots },
            }}
          ></Header>
        </el-header>
        <el-container>
          <el-aside class="el-aside-menu" width="200px">
            <Aside {...{ props: { ...context.props } }}>
              {asideTitleRender}
            </Aside>
            <Collapse {...{ props: { ToggleCollapse, isCollapse } }} />
          </el-aside>
          <el-container class="main-content">
            <el-main>
              <Breadcrumb {...{ props: { ...context.props } }}></Breadcrumb>
              <router-view />
            </el-main>
            <el-footer height="38px">
              <Footer>{footerRender}</Footer>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    );
  },
};

FeLayout.install = function(Vue) {
  Vue.component(FeLayout.name, FeLayout);
};

export default FeLayout;
