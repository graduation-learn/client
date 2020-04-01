<template>
  <div id="success">
    <table class="tab">
      <thead>
        <tr>
          <th>文章标题</th>
          <th>文章内容</th>
          <th>上传时间</th>
          <th>浏览量</th>
          <th>审核通过时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="result.length !== 0">
        <tr v-for="(item) in result" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.text}}</td>
          <td>{{item.ctime}}</td>
          <td>{{item.views}}</td>
          <td>{{item.success_time}}</td>
          <td>
            <el-button type="primary" @click="toTitleDetail(item.id,item.type)" size="mini">文章详情</el-button>
            <el-button type="danger" size="mini" @click="deleteArticle(item.id)">删除</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="result.length===0" style="text-align:center">暂无数据</div>
    <Masker :loading="loading" />
  </div>
</template>

<script>
import {
  queryArticleByUserIdAndType,
  deleteArticleById
} from "@/api/articles/articles";
import Masker from "@/components/mask/Masker";
export default {
  components: {
    Masker
  },
  data() {
    return {
      about: this.$route.params.about,
      result: [],
      loading:false
    };
  },
  async mounted() {
    this.loading = true;
    this.result = await queryArticleByUserIdAndType(this.$store.state.user.userId, this.about, 1);
    this.loading = false;
  },
  methods: {
    toTitleDetail(id,type) {
      console.log(id);
      this.$router.push(`/${type}?id=${id}`);
    },
    deleteArticle(id) {
      deleteArticleById(id);
    }
  },
  watch: {
    async $route() {
      this.loading = true;
      this.about = this.$route.params.about;
      this.result = await queryArticleByUserIdAndType(this.$store.state.user.userId, this.about, 1);
      this.loading = false;
    }
  }
};
</script>

<style lang="less" scoped>
</style>