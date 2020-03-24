<template>
  <div id="aticle-list">
    <Nav />
    <div class="content-list">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{about}}</el-breadcrumb-item>
      </el-breadcrumb>
      <ul class="box-card">
        <li v-for="(item) in aticleList" :key="item.id">
          <router-link
            :to="{path:'/'+$route.params.about,query: { titleId: item.id }}"
          >{{item.title}}</router-link>
          <span class="time">{{item.time}}</span>
        </li>
      </ul>
      <div class="block">
        <Pager
          :current="currentPage"
          :total="total"
          @changePage="handleCurrentChange"
          :limit="limit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getjyxdListByPage } from "@/api/jyxd/jyxdList";
import { getfszdListByPage } from "@/api/fszd/fszdList";
import { getenglishListByPage } from "@/api/english/englishList";
import { getpoliticsListByPage } from "@/api/politics/politicsList";
import { getmathListByPage } from "@/api/math/mathList";
import { getprofessionListByPage } from "@/api/profession/professionList";
import Nav from "@/components/Nav";
import Pager from "@/components/Pager/Pager";
const debounce = function(func, delay) {
  let timer = null;
  return function() {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func.apply(this, arguments);
      timer = null;
    }, delay);
  };
};

export default {
  components: {
    Nav,
    Pager
  },
  data() {
    return {
      about: "",
      aticleList: [],
      currentPage: 5,
      total: 0,
      limit: 10
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "aaa"
  },
  methods: {
    getjyxdListByPage,
    getfszdListByPage,
    getenglishListByPage,
    getpoliticsListByPage,
    getmathListByPage,
    getprofessionListByPage,
    async aaa() {
      this.currentPage = +this.$route.query.page;
      this.limit = +this.$route.query.limit;
      await this.ListByPage(this.currentPage, this.limit);
    },
    async ListByPage(page, limit) {
      const result = await this[
        "get" + this.$route.params.about + "ListByPage"
      ](page, limit);
      this.total = result.count;
      this.aticleList = result.result.map(item => {
        item.time = new Date(item.time).toLocaleDateString();
        return item;
      });
    },
    handleCurrentChange: function(val) {
      if (val === this.currentPage) return;
      this.$router.push(
        `/aticlelist/${this.$route.params.about}?page=${val}&limit=${this.limit}`
      );
      this.currentPage = val;
      this.ListByPage(val, this.limit);
    }
  },
  async mounted() {
    if (this.$route.params.about === "jyxd") {
      this.about = "经验心得";
    } else if (this.$route.params.about === "fszd") {
      this.about = "复试备考";
    } else if (this.$route.params.about === "english") {
      this.about = "英语";
    } else if (this.$route.params.about === "politics") {
      this.about = "政治";
    }else if (this.$route.params.about === "math") {
      this.about = "数学";
    }
    else if (this.$route.params.about === "profession") {
      this.about = "专业课";
    }
    this.aaa();
  }
};
</script>

<style lang="less">
.content-list {
  margin: 20px auto 0px;
  width: 1120px;
  .box-card {
    padding: 20px;
    box-sizing: border-box;
    li {
      list-style: none;
      font-size: 18px;
      border-bottom: 1px solid #999;
      line-height: 3;
    }
  }
}
.block {
  margin: 20px auto;
}
.time {
  float: right;
}
</style>