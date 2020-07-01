<script>
export default {
  onLaunch() {
    uni.getSystemInfo({
      success: (e) => {
        // #ifdef MP-WEIXIN
        this.$scope.globalData.statusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.$scope.globalData.customBar =
          custom.bottom + custom.top - e.statusBarHeight;
        // #endif

        // #ifdef MP-ALIPAY
        this.$scope.globalData.customBar = e.statusBarHeight + e.titleBarHeight;
        // #endif
      }
    });
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
  globalData: {
    test: "",
    statusBar: 0,
    customBar: 0
  }
};
</script>

<style>
/* #ifndef APP-PLUS-NVUE */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import "./common/uni.css";
/* @import './common/iconfont.css'; */
/* @import url("static/font/iconfont.css"); */
/* 以下样式用于 hello uni-app 演示所需 */
page {
  background-color: #f8f8f8;
  height: 100%;
  font-size: 28rpx;
  line-height: 1.8;
}

.uni-header-logo {
  padding: 30rpx;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rpx;
}

.uni-header-image {
  width: 100px;
  height: 100px;
}

.uni-hello-text {
  color: #7a7e83;
}

.uni-hello-addfile {
  text-align: center;
  line-height: 300rpx;
  background: #fff;
  padding: 50rpx;
  margin-top: 10px;
  font-size: 38rpx;
  color: #808080;
}

/* #endif*/

/* #ifdef MP-360 */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: transparent;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
}
::-webkit-scrollbar-thumb:active {
  background-color: #bbb;
}
::-webkit-scrollbar-corner {
  background: #ffffff;
}
/* #endif*/
</style>
