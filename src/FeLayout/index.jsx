/*
 * @Author: long
 * @Date: 2021-11-04 09:24:08
 * @LastEditTime: 2022-04-28 11:51:01
 * @LastEditors: long
 * @Description:
 * @FilePath: /website/Users/long/Documents/workspace/fe-admin-component/src/FeLayout/index.jsx
 *
 */
import Header from '../Header'
import Footer from '../Footers'
import Aside from '../Aside'
import Collapse from '../Collapse'
import TagView from '../TagViews'
import { getComponentFromProp, checkAlive } from '../utils'
import './style.scss'

const FeLayout = {
  name: 'FeLayout',
  functional: true,
  render(h, context) {
    const asideTitleRender = getComponentFromProp(context, 'asideTitle')
    const asideExtraRender = getComponentFromProp(context, 'asideExtra')
    const extraRender = getComponentFromProp(context, 'extra')
    const footerRender = getComponentFromProp(context, 'footer')
    const { isCollapse, toggleCollapse, showTagViews } = context.props
    return (
      <el-container class={isCollapse ? 'fe-layout-collapse' : 'fe-layout'}>
        <el-header class="fe-header" height="48px">
          <Header
            {...{
              props: { ...context.props },
              scopedSlots: { ...context.scopedSlots },
            }}
          ></Header>
        </el-header>
        <el-container class="fe-container">
          <el-aside class="el-aside-menu" width="180px">
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
              {showTagViews ? <TagView {...{ props: { ...context.props } }}></TagView> : null}
              {checkAlive(context.props) ? (
                <transition>
                  <keep-alive>
                    <router-view />
                  </keep-alive>
                </transition>
              ) : (
                <router-view />
              )}
            </el-main>
            <el-footer height="38px">
              <Footer>{footerRender}</Footer>
            </el-footer>
          </el-container>
        </el-container>
        <div>{extraRender}</div>
      </el-container>
    )
  },
}

FeLayout.install = function (Vue) {
  Vue.component(FeLayout.name, FeLayout)
}

export default FeLayout
