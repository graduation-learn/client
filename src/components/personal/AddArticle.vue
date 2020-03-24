<template>
  <div id="add-article">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <!-- <el-form-item label="内容">
        <el-input type="textarea" v-model="form.content" class="textarea"></el-input>
      </el-form-item>-->
      <editor id="tinymce" v-model="tinymceHtml" :init="init"></editor>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
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
export default {
  data() {
    return {
      form: {
        content: "",
        title: "",
        
      },
      tinymceHtml: "请输入内容",
      init: {
        language_url: '@/langs/zh_CN.js',
        language: "zh_CN",
        height: 500,
        plugins:
          "link lists image code table colorpicker textcolor wordcount contextmenu save", //自定义配置功能
        toolbar:
          "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat | save", //自定义配置功能
        branding: false,
        autoRefresh: true,
        inputStyle: "textarea"
      }
    };
  },
  methods: {
    onSubmit() {
      const result = tinymce.activeEditor.getContent();
      var activeEditor = tinymce.activeEditor;
      var editBody = activeEditor.getBody();
      activeEditor.selection.select(editBody);
      var text = activeEditor.selection.getContent({ format: "text" });
      console.log(result); //带有html标签的内容
      console.log(text); //纯文本内容
    }
  },
  components: {
    Editor
  },

  mounted() {
    tinymce.init({});
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