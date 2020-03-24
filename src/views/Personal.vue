<template>
  <div id="personal">
    <Nav></Nav>
    <div class="section clearfix">
      <el-aside style="width:20%">
        <el-menu :default-openeds="defaultOpeneds">
          <el-submenu index="showArtilce">
            <template slot="title">
              <i class="el-icon-s-order"></i>我投稿的文章
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item index="1-1">考研英语</el-menu-item>
              <el-menu-item index="1-2">考研政治</el-menu-item>
              <el-menu-item index="1-3">考研数学</el-menu-item>
              <el-menu-item index="1-4">专业课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="like">
            <template slot="title">
              <i class="el-icon-star-on"></i>我收藏的文章
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item index="2-1">考研英语</el-menu-item>
              <el-menu-item index="2-2">考研政治</el-menu-item>
              <el-menu-item index="2-3">考研数学</el-menu-item>
              <el-menu-item index="2-4">专业课</el-menu-item>
              <el-menu-item index="2-5">经验心得</el-menu-item>
              <el-menu-item index="2-6">复习备考</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="commit">
            <template slot="title">
              <i class="el-icon-chat-dot-round"></i>我评论的文章
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item index="3-1" @click.native='asideClick("/personal/commit/english")'>考研英语</el-menu-item>
              <el-menu-item index="3-2">考研政治</el-menu-item>
              <el-menu-item index="3-3">考研数学</el-menu-item>
              <el-menu-item index="3-4">专业课</el-menu-item>
              <el-menu-item index="3-5">经验心得</el-menu-item>
              <el-menu-item index="3-6">复习备考</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="addArtilce">
            <template slot="title">
              <i class="el-icon-plus"></i>添加稿件
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item index="4-1" @click.native='asideClick("/personal/addartilce/english")'>考研英语</el-menu-item>
             
              <el-menu-item index="4-2">考研政治</el-menu-item>
              <el-menu-item index="4-3">考研数学</el-menu-item>
              <el-menu-item index="4-4">专业课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  methods: {
    
    asideClick(url){
      this.$router.push(url);
    }
  },

  data() {
    const item = {
      title: "考研英语",
      content: "考研",
      time: "2020/03/24",
      like: 999
    };
    
    return {
      tableData: new Array(20).fill(item),
      defaultOpeneds:[this.$route.name]
    };
  },
  components: {
    Nav
  }
};
</script>


<style lang="less" scoped>
.section {
  /* width: 1120px; */
  padding: 20px auto 0;

  .el-icon-star-on {
    vertical-align: 0px;
  }
  .el-icon-s-order {
    vertical-align: -1px;
  }
}

.el-aside {
  width: 20%;
  color: #333;
  float: left;
}
.el-menu {
  background-color: transparent;
}



</style>
