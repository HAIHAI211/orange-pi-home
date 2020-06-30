<template>
  <view>
    <oph-nav-bar :capsules="capsules" title="花销"/>
    <van-index-bar :index-list="indexList" highlight-color="#343434" :sticky-offset-top="stickyOffsetTop">
      <van-index-anchor index="标题一" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="2" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="3" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="4" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="5" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      capsules: [
        {
          url: '/static/navbar/search.png'
        }
      ],
      indexList: [],
      stickyOffsetTop: 0,
    };
  },
  onShow() {
    console.log('statusBar', getApp().globalData.statusBar)
    console.log('customBar', getApp().globalData.customBar)
    this.stickyOffsetTop = getApp().globalData.customBar
  }
};
</script>

<style scoped>

</style>