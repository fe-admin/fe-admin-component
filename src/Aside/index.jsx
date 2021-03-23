import MenuRender from "./MenuRender.jsx";
import "./style.scss";

export default {
  name: "Aside",
  components: { MenuRender },
  props: ["menuId", "menuData", "isCollapse"],
  data() {
    return {
      menus: [...this.menuData],
      activeId: "0",
      defaultOpeneds: [0],
      flag: false,
    };
  },
  created() {
    this.listFilter();
    this.setIndex();
  },
  mounted() {
    this.redirect = this.redirect.bind(this);
  },
  updated() {
    this.setIndex();
  },
  render() {
    const { activeId, defaultOpeneds, isCollapse, menuData, redirect } = this;
    return (
      <el-scrollbar class="fe-aside">
        {this.$scopedSlots.default()}
        <MenuRender
          defaultActive={activeId}
          defaultOpeneds={defaultOpeneds}
          uniqueOpened={true}
          collapse={isCollapse}
          collapseTransition={false}
          menus={menuData}
          redirect={redirect}
        ></MenuRender>
      </el-scrollbar>
    );
  },
  methods: {
    setIndex() {
      this.activeId = `${this.ergodic(this.menus, this.menuId)}`;
      this.flag = false;
    },

    ergodic(list, id) {
      let mid = 0;
      if (this.flag) return;
      for (let index = 0; index < list.length; index += 1) {
        const item = list[index];
        if (this.flag) break;
        if (item.name === id) {
          mid = item.id;
          this.flag = true;
          break;
        } else if (item.children) {
          mid = this.ergodic(item.children, id);
        }
      }
      return mid;
    },

    redirect({ path, menuId }) {
      // if (/http:/g.test(url)) return;
      // const path = menuId ? `${url}?mid=${menuId}` : url;
      this.$router.push(path);
    },
    formatId(menu, parent) {
      menu.forEach((item, index) => {
        if (parent) {
          item.id = `${parent.id}-${index}`;
        } else {
          item.id = `${index}`;
        }
        if (item.children) this.formatId(item.children, item);
      });
    },
    listFilter() {
      this.formatId(this.menus);
    },
  },
};
