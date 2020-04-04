<template>
  <comment :comments="commentData" :articleId="articleId" :getDatas="getDatas"></comment>
</template>

<script>
import * as CommentData from "@/api/mockdata";
import comment from "./comment";

export default {
  components: {
    comment
  },
  props: ["commentData","articleId","getDatas"]
};
</script>