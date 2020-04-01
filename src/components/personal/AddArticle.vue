<template>
  <div id="add-article">
    <Fuwenben :type="type" :tinymceHtml="tinymceHtml"></Fuwenben>
  </div>
</template>
<script>
import Fuwenben from "@/components/personal/Fuwenben";

export default {
  data() {
    return {
      type: this.$route.params.about,
      tinymceHtml: "请输入内容"
    };
  },
  watch: {
    $route() {
      this.type = this.$route.params.about;
    }
  },
  methods: {},
  components: {
    Fuwenben
  }
};
</script>

<style lang="less" scoped>
#add-article {
  padding: 20px;
  box-sizing: border-box;
  width: 80%;
  float: right;
  .el-form {
    width: 80%;
  }
}
</style>