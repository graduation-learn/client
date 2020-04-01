<template>
  <div id="fail">
    <table class="tab">
      <thead>
        <tr>
          <th>文章标题</th>
          <th>文章内容</th>
          <th>上传时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="result.length !== 0">
        <tr v-for="item in result" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.text}}</td>
          <td>{{item.ctime}}</td>
          <td>
            <el-button type="warning" size="mini" @click="check(item.fail_reason)">查看未过审原因</el-button>
            <el-button
              type="info"
              size="mini"
              @click="updateArticle(item.id,item.title,item.content,item.type)"
            >修改文章</el-button>
            <el-button type="danger" size="mini" @click="deleteArticle(item.id)">删除</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="result.length===0" style="text-align:center">暂无数据</div>
    <div id="modeler" v-if="show">
      <Fuwenben :type="type" :tinymceHtml="tinymceHtml" :title="title" :id="id" @hidden="hidden" />
      <br />
      <el-button @click="show=false">取消</el-button>
    </div>
    <Masker :loading="loading" />
  </div>
</template>

<script>
import {
  queryArticleByUserIdAndType,
  deleteArticleById
} from "@/api/articles/articles";
import Fuwenben from "../Fuwenben";
import Masker from "@/components/mask/Masker";
export default {
  components: {
    Fuwenben,
    Masker
  },
  data() {
    return {
      about: this.$route.params.about,
      result: [],
      show: false,
      tinymceHtml: "请输入内容",
      type: this.$route.params.about,
      title: "",
      id: -1,
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    this.result = await queryArticleByUserIdAndType(this.$store.state.user.userId, this.about, 0);
    this.loading = false;
  },
  methods: {
    async hidden() {
      this.show = false;
      this.result = await queryArticleByUserIdAndType(this.$store.state.user.userId, this.about, 0);
    },
    check(reason) {
      this.$alert(reason, "未过审原因", {
        confirmButtonText: "确定",
        callback: () => {}
      });
    },
    deleteArticle(id) {
      deleteArticleById(id);
    },
    updateArticle(id, title, content, type) {
      this.id = id;
      this.show = true;
      this.title = title;
      this.tinymceHtml = content;
      this.type = type;
    }
  },
  watch: {
    async $route() {
      this.loading = true;
      this.about = this.$route.params.about;
      this.result = await queryArticleByUserIdAndType(
        this.$store.state.user.userId,
        this.about,
        0
      );
      this.loading = false;
    }
  }
};
</script>

<style lang="less" scoped>
#modeler {
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  right: 0;
  background-color: #999;
}
</style>