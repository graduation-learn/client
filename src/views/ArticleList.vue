<template>
  <div id="aticle-list">
    <Nav />
    <div class="content-list">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{about}}</el-breadcrumb-item>
      </el-breadcrumb>
      <ul class="box-card">
        <li v-for="(item) in articleList" :key="item.id">
          <router-link :to="{path:'/'+$route.params.about,query: { id: item.id }}">{{item.title}}</router-link>
          <span class="time">{{item.ctime}}</span>
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
    <Masker :loading="loading" />
  </div>
</template>

<script>
import { queryArticleByPageAndType } from "@/api/articles/articles";

import Nav from "@/components/Nav";
import Pager from "@/components/Pager/Pager";
import Masker from "@/components/mask/Masker";
import debounce from "@/utils/debounce";

export default {
  components: {
    Nav,
    Pager,
    Masker
  },
  data() {
    return {
      about: "",
      articleList: [],
      currentPage: 5,
      total: 0,
      limit: 10,
      loading: false
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "aaa"
  },
  methods: {
    async aaa() {
      this.currentPage = +this.$route.query.page;
      this.limit = +this.$route.query.limit;
      await this.ListByPage(this.currentPage, this.limit);
    },
    async ListByPage(page, limit) {
      const result = await queryArticleByPageAndType(
        page,
        limit,
        this.$route.params.about
      );
      this.total = result.count;
      this.articleList = result.result;
      this.loading = false;
    },
    handleCurrentChange: debounce(function(val) {
      if (val === this.currentPage) return;
      this.loading = true;
      this.$router.push(
        `/articlelist/${this.$route.params.about}?page=${val}&limit=${this.limit}`
      );
      this.currentPage = val;
      this.ListByPage(val, this.limit);
    }, 100)
  },
  async mounted() {
    this.loading = true;
    if (this.$route.params.about === "jyxd") {
      this.about = "经验心得";
    } else if (this.$route.params.about === "fszd") {
      this.about = "复试备考";
    } else if (this.$route.params.about === "english") {
      this.about = "英语";
    } else if (this.$route.params.about === "politics") {
      this.about = "政治";
    } else if (this.$route.params.about === "math") {
      this.about = "数学";
    } else if (this.$route.params.about === "profession") {
      this.about = "专业课";
    }
    this.aaa();
  }
};
</script>

<style lang="less">
.content-list {
  margin: 70px auto 0px;
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