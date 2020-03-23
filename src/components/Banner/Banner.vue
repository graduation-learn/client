<template>
  <div id="banner-container">
    <LeftList />
    <RightList />
  </div>
</template>

<script>
import LeftList from "./LeftList";
import RightList from "./RightBanner";
export default {
  components: {
    LeftList,
    RightList
  }
};
</script>
<style lang="less">
#banner-container {
  display: flex;
  width: 1120px;
  height: 400px;
  // border: 1px solid black;
  margin: 0 auto;
}
</style>