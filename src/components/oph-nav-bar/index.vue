<template>
  <uni-nav-bar :status-bar="true" :fixed="true">
    <view style="text-align:center; width:100%;">{{title}}</view>
    <view slot="left">
      <view class="navigation-bar-capsule">
        <oph-nav-cell url="/static/navbar/back.png" :showLine="true" @onPress="back"/>
        <slot></slot>
      </view>
    </view>
  </uni-nav-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation-bar-capsule {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 32px;
  height: 32px;
  font-size: 30rpx;
  min-width: 89px;
  padding: 2px 5px;
  left: 10px;
  border: 0.5px solid #dedede;
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 9;
}
</style>