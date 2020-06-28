<template>
  <view class="panel-page">
    <view v-for="grid in GRIDS" :key="grid.id">
      <uni-section :title="grid.title" type="line" ></uni-section>
      <view class="example-body">
        <uni-grid :column="3" :highlight="true" @change="change" :show-border="true" :square="true">
          <uni-grid-item v-for="(item, index) in grid.list" :index="index" :key="item.id">
            <view class="grid-item-box">
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
  }
};
</script>

<style scoped>
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

view {
  font-size: 14px;
  line-height: inherit;
}
.example-body {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  font-size: 14px;
  background-color: #ffffff;
}



.image {
  width: 50rpx;
  height: 50rpx;
}

.text {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.2px;
  margin-top: 66rpx;
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
  padding: 15rpx 0;
  overflow: hidden;
}
</style>