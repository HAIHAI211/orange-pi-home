<template>
  <view class="setting-page">
    <van-index-bar
      :index-list="indexList"
      highlight-color="#343434"
    >
      <block v-for="item in settingList" :key="item.id">
        <van-index-anchor :index="item.text" />
        <van-cell :title="cell.text" is-link v-for="cell in item.list" :key="cell.id"/>
      </block>
    </van-index-bar>
  </view>
</template>

<script>
import { settingList, indexList } from './data'
export default {
  data() {
    return {
      indexList,
      settingList
    }
  }
};
</script>

<style lang="scss" scoped>
  .setting-page{
    height: 100%;
  }
</style>