<template>
  <view class="panel-page">
    <view v-for="grid in GRIDS" :key="grid.id">
      <uni-section :title="grid.title" type="line" ></uni-section>
      <view class="example-body">
        <uni-grid :column="3" :highlight="true" @change="change(grid, $event)" :show-border="true" :square="true">
          <uni-grid-item v-for="(item, index) in grid.list" :key="item.id" :index="index">
            <view class="grid-item-box">
              <!-- <view class="iconfont icon-Cash"/> -->
              <image class="icon" :src="item.imgSrc" mode="heightFix"/>
              <text class="text">{{ item.text }}</text>
              <text class="desc">{{ item.desc }}</text>
            </view>
          </uni-grid-item>
        </uni-grid>
      </view>
    </view>
  </view>
</template>

<script>
import { GRIDS } from "./data";
export default {
  data() {
    return {
      GRIDS
    };
  },
  methods: {
    change(grid, e) {
      const title = grid.title
      const item = grid.list[e.detail.index]
      console.log(title, item)
    }
  }
};
</script>

<style>
/* 头条小程序组件内不能引入字体 */
/* #ifdef MP-TOUTIAO */
/* @font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	} */

/* #endif */

page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100%;
  height: auto;
}

.example-body {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  font-size: 14px;
  background-color: #ffffff;
}



.icon {
  margin-top: 30rpx;
  width: 64rpx;
  height: 64rpx;
}

.text {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.2px;
  margin-top: 34rpx;
}
.desc {
  font-size: 12px;
  line-height: 1.3;
  color: #cccccc;
  text-align: center;
}

.grid-item-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 15rpx 0; */
  overflow: hidden;
}
</style>