<template>
  <div class="index-row part03 clearfix">
    <div class="part-head clearfix">
      <h3 class="part-title-bkzn">备考指南</h3>
    </div>

    <div class="part-body">
      <!-- yz-left start -->
      <div class="yz-left">
        <div class="side-head">
          <span class="i-title">经验交流</span>
          <span class="more">
            <router-link :to="{path:'/articlelist/jyxd',query:{page:1,limit:10}}">更多 +</router-link>
          </span>
        </div>
        <div class="side-body">
          <ul class="index-list">
            <li v-for="item in jyxdList" :key="item.id">
              <router-link :to="{path:'/jyxd',query: { id: item.id }}">{{item.title}}</router-link>
            </li>
          </ul>
          <ul v-show="loading">
            <li :class="`bar${i}`" v-for="i in 5" :key="i"></li>
          </ul>
        </div>
        <div style="height: 80px; margin-top: 31px; overflow: hidden;">
          <img src="https://t3.chei.com.cn/axvert/img/1863806306.jpg" width="100%" height="100%" />
        </div>
      </div>
      <!-- yz-left end -->

      <!-- yz-right start -->
      <div class="yz-main">
        <div class="side-head">
          <span class="i-title">复试备考</span>
          <span class="more">
            <router-link :to="{path:'/articlelist/fszd',query:{page:1,limit:10}}">更多 +</router-link>
          </span>
        </div>
        <div class="side-body">
          <ul class="index-list">
            <li v-for="item in fszdList" :key="item.id">
              <router-link :to="{path:'/fszd',query: { id: item.id }}">{{item.title}}</router-link>
            </li>
          </ul>
          <ul v-show="loading">
            <li :class="`bar${i}`" v-for="i in [5,4,3,2,1]" :key="i"></li>
          </ul>
        </div>

        <div style="height: 80px; margin-top: 30px; overflow: hidden;">
          <a
            target="_blank"
            href="http://axvert.chsi.com.cn/goo.action?aid=1894248583&evtype=adv_https:_yz.chsi.com.cn"
          >
            <img src="https://t2.chei.com.cn/axvert/img/2413477876.jpg" width="100%" height="100%" />
          </a>
        </div>
      </div>
      <!-- yz-right end -->

      <!-- yz-main start -->
      <div class="yz-right">
        <div class="side-head">
          <span class="i-title">公共课</span>
        </div>
        <ul class="list-content clearfix">
          <li class="clearfix">
            <a href="/articlelist/politics?page=1&limit=10" target="_blank">
              <span class="index-label index-red">政治</span>
            </a>
            <a href="/politics?id=19931" target="_blank">2020考研政治近代史纲大纲考点梳理：党的土地政策方面</a>
          </li>

          <li class="clearfix">
            <a href="/articlelist/politics?page=1&limit=10" target="_blank">
              <span class="index-label index-red">政治</span>
            </a>
            <a href="/politics?id=19932" target="_blank">2020考研政治：中共二大主要内容回顾</a>
          </li>

          <li class="clearfix">
            <a href="/articlelist/english?page=1&limit=10" target="_blank">
              <span class="index-label index-green">英语</span>
            </a>
            <router-link to="/english?id=15703" target="_blank">2020考研：英语历年真题怎么复习？</router-link>
          </li>

          <li class="clearfix">
            <a href="/articlelist/english?page=1&limit=10" target="_blank">
              <span class="index-label index-green">英语</span>
            </a>
            <a href="/english?id=15704" target="_blank">2020考研英语：如何做好阅读的基础工作？</a>
          </li>

          <li class="clearfix">
            <a href="/articlelist/math/?page=1&limit=10" target="_blank">
              <span class="index-label index-blue">数学</span>
            </a>
            <a href="/math?id=21437" target="_blank">2020考研：396数学和199数学区别</a>
          </li>

          <li class="clearfix">
            <a href="/articlelist/math/?page=1&limit=10" target="_blank">
              <span class="index-label index-blue">数学</span>
            </a>
            <a href="/math?id=21438" target="_blank">2020考研数学冲刺：二重积分的计算思路</a>
          </li>
        </ul>
      </div>
      <!-- yz-main end -->
    </div>
  </div>
</template>

<script>
import { queryArticleByPageAndType } from "@/api/articles/articles";
export default {
  data() {
    return {
      jyxdList: [],
      fszdList: [],
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    const jyxdList = await queryArticleByPageAndType(1, 5, "jyxd").then(
      res => res.result
    );
    const fszdList = await queryArticleByPageAndType(1, 5, "fszd").then(
      res => res.result
    );
    this.loading = false;
    this.jyxdList = jyxdList;
    this.fszdList = fszdList;
  }
};
</script>

<style lang="less" scoped>
.part03 {
  color: #333;
  text-align: left;
  font: 14px/1.8 "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft YaHei",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", Arial, sans-serif;
  zoom: 1;
  clear: both;
  width: 1120px;
  margin: 30px auto;
}
.part-head {
  border-bottom: 3px solid #1787e0;
  h3.part-title-bkzn {
    background-position: 0 -100px;
  }
  h3 {
    float: left;
    width: 350px;
    height: 56px;
    line-height: 200px;
    overflow: hidden;
    background: url(../../assets/yz-icon.png) no-repeat 0 0;
  }
}

.part-body {
  padding-top: 28px;
}
.side-head .more {
  position: absolute;
  bottom: 8px;
  right: 0;
}
.yz-left {
  width: 330px;
  float: left;
}
.index-list {
  font-size: 14px;
  line-height: 32px;
  li {
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    a {
      color: #333;
    }
  }
}

.side-head {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
}
.side-body {
  padding: 10px 0;
}

.i-title {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding-bottom: 13px;
  border-bottom: 1px solid #1787e0;
  margin-bottom: -1px;
  font-size: 20px;
  font-weight: 700;
}
.yz-main {
  width: 350px;
  float: left;
  margin-left: 40px;
}
.side-head {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  .list-content {
    padding: 12px 0;
    margin-bottom: 10px;
  }
  .list-content {
    padding: 10px 0;
  }
  .clearfix {
    zoom: 1;
  }
}
.list-content {
  padding: 12px 0;
  margin-bottom: 10px;
  li {
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #d8d8d8;
    a {
      color: #333;
    }
    .index-red {
      background-color: #ee6464;
    }
    .index-green {
      background-color: #4cbc96;
    }
    .index-blue {
      background-color: #3681d7;
    }
    .index-label {
      display: inline-block;
      width: 30px;
      height: 18px;
      line-height: 18px;
      margin-right: 8px;
      text-align: center;
      font-size: 12px;
      vertical-align: 2px;
      color: #fff;
    }
  }
}

.yz-right {
  width: 330px;
  float: right;
  .side-head {
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    .more {
      position: absolute;
      bottom: 8px;
      right: 0;
    }
  }
  .side-body {
    padding: 10px 0;
    .index-list {
      font-size: 14px;
      line-height: 32px;
      li {
        height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a {
          color: #333;
          &:hover {
            color: lightblue;
          }
        }
      }
    }
  }
}
.bar1,
.bar2,
.bar3,
.bar4,
.bar5 {
  height: 25px;
  background-color: #ccc;
  margin: 5px 0;
}
.bar1 {
  animation: bar1 0.5s infinite alternate-reverse;
}
.bar2 {
  animation: bar2 0.5s infinite alternate-reverse;
}
.bar3 {
  animation: bar3 0.5s infinite alternate-reverse;
}
.bar4 {
  animation: bar4 0.5s infinite alternate-reverse;
}
.bar5 {
  animation: bar5 0.5s infinite alternate-reverse;
}
@keyframes bar1 {
  from {
    width: 150px;
  }
  to {
    width: 100px;
  }
}
@keyframes bar2 {
  from {
    width: 70px;
  }
  to {
    width: 250px;
  }
}
@keyframes bar3 {
  from {
    width: 200px;
  }
  to {
    width: 70px;
  }
}
@keyframes bar4 {
  from {
    width: 60px;
  }
  to {
    width: 200px;
  }
}
@keyframes bar5 {
  from {
    width: 10px;
  }
  to {
    width: 120px;
  }
}
</style>