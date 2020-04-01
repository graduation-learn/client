<template>
<div id="like">敬请期待！</div>
</template>

<script>
export default {
  methods: {
  },
  data() {
    return {
      about: this.$route.params.about,
      type:this.$route.name,
    };
  },
  async mounted() {
  }
};
</script>

<style>
.el-table {
  width: 80%;
  float: right;
}
</style>