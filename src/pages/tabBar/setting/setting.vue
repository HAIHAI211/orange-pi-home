<template>
  <view>
    <van-index-bar
      :index-list="indexList"
      highlight-color="#343434"
      :sticky-offset-top="stickyOffsetTop"
    >
      <block>
        <van-index-anchor index="标题一" />
        <van-cell title="文本" is-link />
      </block>
    </van-index-bar>
  </view>
</template>

<script>
export default {};
</script>

<style>
</style>