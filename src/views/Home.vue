<template>
  <el-container>
    <el-header>
      <Nav />
    </el-header>
    <el-main>
      <Serach />
      <Banner />
      <ContentContainer />
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Serach from "@/components/Serach.vue";
import Banner from "@/components/Banner/Banner.vue";
import ContentContainer from "@/components/content/ContentContainer";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Nav,
    Serach,
    Banner,
    ContentContainer,
    Footer
  }
};
</script>

<style scoped>
.el-header,.el-footer  {
  padding: 0;
}
</style>
