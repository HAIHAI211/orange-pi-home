<template>
  <view>
    <oph-nav-bar title="花销">
      <oph-nav-cell :url="dataShowIcon" @onPress="toggleDataShowType"/>
      <oph-nav-cell url="/static/navbar/search.png" :showLine="false"/>
    </oph-nav-bar>
    <van-index-bar
      :index-list="indexList"
      highlight-color="#343434"
      :sticky-offset-top="stickyOffsetTop"
    >
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
      dataShowType: 'list',
      indexList: [],
      stickyOffsetTop: 0
    };
  },
  computed: {
    dataShowIcon() {
      switch (this.dataShowType) {
        case 'list':
          return `/static/navbar/chart.png`
        case 'chart':
          return `/static/navbar/list.png`
      }
    }
  },
  methods: {
    toggleDataShowType() {
      this.dataShowType = this.dataShowType === 'list' ? 'chart' : 'list'
    }
  },
  onShow() {
    console.log("statusBar", getApp().globalData.statusBar);
    console.log("customBar", getApp().globalData.customBar);
    this.stickyOffsetTop = getApp().globalData.customBar;
  }
};
</script>

<style scoped>
</style>