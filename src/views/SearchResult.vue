<template>
  <div id="search-result">
    <Nav />
    <div class="content-list">
      <ul class="box-card">
        <li v-for="(item) in articleList" :key="item.id">
          <router-link :to="{path:'/'+item.type,query: { id: item.id }}">{{item.title}}</router-link>
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
      <Masker :loading="loading" />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Pager from "@/components/Pager/Pager";
import Masker from "@/components/mask/Masker";
import debounce from "@/utils/debounce";
import { queryTitleListByKeyValueAndPage } from "@/api/articles/articles";
export default {
  components: {
    Nav,
    Pager,
    Masker
  },
  data() {
    return {
      articleList: [],
      currentPage: 1,
      total: 0,
      limit: 10,
      loading: false
    };
  },
  methods: {
    async ListByPage(wd, page, limit) {
      const result = await queryTitleListByKeyValueAndPage(wd, page, limit);
      this.total = result.count;
      this.articleList = result.result;
      this.loading = false;
    },
    handleCurrentChange: debounce(function(val) {
      if (val === this.currentPage) return;
      this.loading = true;
      this.$router.push(
        `/search?wd=${this.$route.query.wd}page=${val}&limit=${this.limit}`
      );
      this.currentPage = val;
      this.ListByPage(this.$route.query.wd, val, this.limit);
    }, 100)
  },
  async mounted() {
    this.loading = true;
    this.currentPage = +this.$route.query.page;
    this.limit = +this.$route.query.limit;
    const result = await queryTitleListByKeyValueAndPage(
      this.$route.query.wd,
      this.$route.query.page,
      this.$route.query.limit
    );
    if (result.count === 0) {
      this.$router.replace("/error");
      return;
    }
    this.total = +result.count;
    this.articleList = result.result;
    this.loading = false;
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