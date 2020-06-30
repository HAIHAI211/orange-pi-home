<template>
  <uni-nav-bar :status-bar="true" :fixed="true">
    <view style="text-align:center; width:100%;">{{title}}</view>
    <view slot="left">
      <view class="navigation-bar-capsule">
        <view
          class="button-action"
          hover-class="button-action-active"
          @click="back"
          v-if="backShow"
        >
          <image src="/static/navbar/back.png" />
        </view>
        <view class="button-v-line"></view>
        <template v-for="(item,index) in capsules">
          <view class="button-action" hover-class="button-action-active" :key="index + 'button'">
            <image :src="item.url" />
          </view>
          <view class="button-v-line" v-if="index !== capsules.length - 1" :key="index"></view>
        </template>
      </view>
    </view>
  </uni-nav-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    backShow: {
      type: Boolean,
      default: true
    },
    capsules: {
      type: Array,
      default: []
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
  width: 89px;
  left: 10px;
  border: 0.5px solid #dedede;
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 9;
  .button-v-line {
    width: 0.5px;
    height: 18px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .button-action {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 60rpx;
      height: 60rpx;
      padding: 10rpx;
      box-sizing: border-box;
    }
  }
  .button-action-active {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>