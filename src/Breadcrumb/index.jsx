import "./style.scss";
export default {
  name: "Breadcrumb",
  props: ["dataInfo", "menuData", "menuId"],
  data() {
    return {};
  },
  render() {
    return (
      <section class="qd-breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="{ path: '/' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </section>
    );
  },
  methods: {
    back() {
      this.$router.back();
    },
    to(router) {
      if (router) this.$router.replace(router);
    },
  },
};
