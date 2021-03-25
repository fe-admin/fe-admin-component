import { getMenuItem } from "../utils";
import "./style.scss";

export default {
  name: "Breadcrumb",
  props: ["menuData", "menuId"],
  data() {
    return {};
  },
  render() {
    console.info(this.menuData, this.$store.getters.menuId);

    return (
      <section class="qd-breadcrumb">
        <el-breadcrumb separator="/">{this.formatBreadcrumb()}</el-breadcrumb>
      </section>
    );
  },
  methods: {
    formatBreadcrumb() {
      const {
        menuData,
        $store: {
          getters: { menuId },
        },
      } = this;
      const list = [
        <el-breadcrumb-item to={{ path: menuData[0].path }}>
          首页
        </el-breadcrumb-item>,
      ];
      const breadList = `${menuId || ""}`.split("-");
      let mentItem = null;
      breadList.forEach((i, index) => {
        i = i * 1;
        mentItem = index === 0 ? menuData[i] : mentItem.children[i];
        const item = getMenuItem(i, mentItem);
        list.push(
          <el-breadcrumb-item to={{ path: item.path }}>
            {item.title}
          </el-breadcrumb-item>
        );
      });
      return list;
    },
    back() {
      this.$router.back();
    },
    to(router) {
      if (router) this.$router.replace(router);
    },
  },
};
