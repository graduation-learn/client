<template>
  <div id="personal">
    <Nav></Nav>
    <div class="section clearfix">
      <el-aside style="width:20%;">
        <el-menu :default-openeds="defaultOpeneds">
          <el-submenu index="showArticle">
            <template slot="title">
              <i class="el-icon-s-order"></i>我投稿的文章
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item
                index="1-1"
                @click.native="asideClick('/personal/showArticle/english',1)"
              >考研英语</el-menu-item>
              <el-menu-item
                index="1-2"
                @click.native="asideClick('/personal/showArticle/politics',1)"
              >考研政治</el-menu-item>
              <el-menu-item
                index="1-3"
                @click.native="asideClick('/personal/showArticle/math',1)"
              >考研数学</el-menu-item>
              <el-menu-item
                index="1-4"
                @click.native="asideClick('/personal/showArticle/profession',1)"
              >专业课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="like">
            <template slot="title">
              <i class="el-icon-star-on"></i>我收藏的文章
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item index="2-1" @click.native="asideClick('/personal/like/english')">考研英语</el-menu-item>
              <el-menu-item index="2-2" @click.native="asideClick('/personal/like/politics')">考研政治</el-menu-item>
              <el-menu-item index="2-3" @click.native="asideClick('/personal/like/math')">考研数学</el-menu-item>
              <el-menu-item index="2-4" @click.native="asideClick('/personal/like/profession')">专业课</el-menu-item>
              <el-menu-item index="2-5" @click.native="asideClick('/personal/like/jyxd')">经验心得</el-menu-item>
              <el-menu-item index="2-6" @click.native="asideClick('/personal/like/fszd')">复习备考</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-submenu index="comment">
            <template slot="title">
              <i class="el-icon-chat-dot-round"></i>我评论的文章
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item index="3-1" @click.native="asideClick('/personal/comment/english')">考研英语</el-menu-item>
              <el-menu-item
                index="3-2"
                @click.native="asideClick('/personal/comment/politics')"
              >考研政治</el-menu-item>
              <el-menu-item index="3-3" @click.native="asideClick('/personal/comment/math')">考研数学</el-menu-item>
              <el-menu-item
                index="3-4"
                @click.native="asideClick('/personal/comment/profession')"
              >专业课</el-menu-item>
              <el-menu-item index="3-5" @click.native="asideClick('/personal/comment/jyxd')">经验心得</el-menu-item>
              <el-menu-item index="3-6" @click.native="asideClick('/personal/comment/fszd')">复习备考</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->

          <el-submenu index="addArticle">
            <template slot="title">
              <i class="el-icon-plus"></i>添加稿件
            </template>
            <el-menu-item-group>
              <template slot="title">类型</template>
              <el-menu-item
                index="4-1"
                @click.native="asideClick('/personal/addArticle/english')"
              >考研英语</el-menu-item>

              <el-menu-item
                index="4-2"
                @click.native="asideClick('/personal/addArticle/politics')"
              >考研政治</el-menu-item>
              <el-menu-item index="4-3" @click.native="asideClick('/personal/addArticle/math')">考研数学</el-menu-item>
              <el-menu-item
                index="4-4"
                @click.native="asideClick('/personal/addArticle/profession')"
              >专业课</el-menu-item>
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
    asideClick(url, showArticle) {
      if (showArticle) {
        const result = this.$route.path.split("/");
        const bool = ["fail", "success", "pedding"].includes(
          result[result.length - 1]
        );
        if (bool) {
          !location.pathname.includes(url) &&
            this.$router.push(url + "/" + result[result.length - 1]);
        } else {
          !location.pathname.includes(url) && this.$router.push(url);
        }
      } else {
        !location.pathname.includes(url) && this.$router.push(url);
      }
    }
  },

  data() {
    return {
      defaultOpeneds: [this.$route.name]
    };
  },
  components: {
    Nav
  },
  mounted() {}
};
</script>


<style lang="less" scoped>
.section {
  padding: 20px auto 0;
  margin-top: 50px;
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
