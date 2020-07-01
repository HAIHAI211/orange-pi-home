<template>
  <view class="oph-nav-cell">
    <view class="button-action" hover-class="button-action-active" @click="onPress">
      <image :src="url" />
    </view>
    <view class="button-v-line" v-if="showLine"/>
  </view>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: ''
        },
        showLine: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onPress() {
            this.$emit('onPress')
        }
    }
};
</script>

<style lang="scss" scoped>
.oph-nav-cell {
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  .button-v-line {
    flex: 0 0 auto;
    width: 1px;
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
    // background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>