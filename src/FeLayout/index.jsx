/*
 * @Author: long
 * @Date: 2021-11-04 09:24:08
 * @LastEditTime: 2023-06-20 10:30:50
 * @LastEditors: long
 * @Description:
 * @FilePath: /website/Users/long/Documents/workspace/fe-admin-component/src/FeLayout/index.jsx
 *
 */
import Header from '../Header'
import Footer from '../Footers'
import Aside from '../Aside'
import Collapse from '../Collapse'
import { getComponentFromProp, getAlive } from '../utils'
import './style.scss'

const FeLayout = {
  name: 'FeLayout',
  functional: true,
  render(h, context) {
    const asideTitleRender = getComponentFromProp(context, 'asideTitle')
    const asideExtraRender = getComponentFromProp(context, 'asideExtra')
    const extraRender = getComponentFromProp(context, 'extra')
    const footerRender = getComponentFromProp(context, 'footer')
    const { isCollapse, toggleCollapse } = context.props
    return (
      <el-container class="fe-container">
        <el-header class="fe-header">
          <Header
            {...{
              props: { ...context.props },
              scopedSlots: { ...context.scopedSlots },
            }}
          ></Header>
        </el-header>
        <el-container class={isCollapse ? 'fe-layout-collapse' : 'fe-layout'}>
          <el-aside class="el-aside-menu" width="220px">
            <Aside
              {...{
                props: { ...context.props },
                scopedSlots: {
                  default: () => asideTitleRender,
                  extra: () => asideExtraRender,
                },
              }}
            ></Aside>
            <Collapse {...{ props: { toggleCollapse, isCollapse } }} />
          </el-aside>
          <el-container class="main-content">
            <el-main>
              <keep-alive {...{ props: { max: 5, include: getAlive(context.props) } }}>
                <router-view />
              </keep-alive>
            </el-main>
            <el-footer height="38px">
              <Footer>{footerRender}</Footer>
            </el-footer>
          </el-container>
          <div>{extraRender}</div>
        </el-container>
      </el-container>
    )
  },
}

FeLayout.install = function (Vue) {
  Vue.component(FeLayout.name, FeLayout)
}

export default FeLayout
