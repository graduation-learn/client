<template>
  <div id="fuwenben">
    <div class="title-container">
      <span class="title">标题：</span>
      <el-input v-model="titleState"></el-input>
    </div>

    <editor id="tinymce" v-model="html" :init="init"></editor>
    <br />
    <br />
    <el-button type="primary" @click="onSubmit">上传</el-button>
  </div>
</template>

<script>
import { addArticle, updateArticleById } from "@/api/articles/articles";
import tinymce from "tinymce/tinymce";

import "tinymce/themes/silver/theme";

import Editor from "@tinymce/tinymce-vue";
import "tinymce/skins/ui/oxide/skin.min.css";

import "@/assets/langs/zh_CN.js";

import "tinymce/plugins/image";

import "tinymce/plugins/link";

import "tinymce/plugins/code";

import "tinymce/plugins/table";

import "tinymce/plugins/lists";

import "tinymce/plugins/contextmenu";

import "tinymce/plugins/wordcount";

import "tinymce/plugins/colorpicker";

import "tinymce/plugins/textcolor";

import "tinymce/plugins/save";
import { mapState } from "vuex";
export default {
  data() {
    return {
      init: {
        language_url: "@/langs/zh_CN.js",
        language: "zh_CN",
        height: 500,
        plugins:
          "link lists image code table colorpicker textcolor wordcount contextmenu save", //自定义配置功能
        toolbar:
          "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat | save", //自定义配置功能
        branding: false,
        autoRefresh: true,
        inputStyle: "textarea"
      },
      html: this.tinymceHtml,
      titleState: this.title
    };
  },
  computed: {
    ...mapState("user", ["username", "userId"])
  },
  props: {
    type: {
      type: String,
      require: true
    },
    tinymceHtml: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    id: {
      type: Number
    }
  },
  methods: {
    async onSubmit() {
      const result = tinymce.activeEditor.getContent();
      var activeEditor = tinymce.activeEditor;
      var editBody = activeEditor.getBody();
      activeEditor.selection.select(editBody);
      var text = activeEditor.selection.getContent({ format: "text" });
      // console.log(result); //带有html标签的内容
      // console.log(text); //纯文本内容

      if (!this.titleState.trim() || !result.trim()) {
        alert("标题或内容不能为空！");
      } else {
        if (this.id !== -1 && this.id !== undefined) {
          //修改文章

          await updateArticleById({
            ctime: new Date(Date.now()).toLocaleDateString(),
            title: this.titleState,
            content: result,
            text,
            id: this.id
          });
          alert("重新上传成功，等待管理员审核");
          this.$emit("hidden");
        } else {
          //上传文章
          const addResult = await addArticle({
            ctime: new Date(Date.now()).toLocaleDateString(),
            title: this.titleState,
            from: this.$store.state.user.username,
            content: result,
            text,
            user_id: this.$store.state.user.userId,
            type: this.type
          });
          console.log(addResult);
          // alert("上传成功,等待管理员审核");
        }
      }
    }
  },
  mounted() {
    tinymce.init({});
  },
  components: {
    Editor
  }
};
</script>

<style lang="less" scoped>
#fuwenben {
  width: 100%;
  .title-container {
    font-size: 18px;
    margin-bottom: 10px;
  }
}
</style>