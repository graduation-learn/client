<!--评论模块-->
<template>
  <div class="container">
    <div class="write-reply">
      <i class="el-icon-edit"></i>
      <span class="add-comment">添加新评论</span>
    </div>
    <br />
    <transition name="fade">
      <div class="input-wrapper">
        <el-input
          class="gray-bg-input"
          v-model="firstComment"
          type="textarea"
          :rows="3"
          autofocus
          placeholder="写下你的评论"
        ></el-input>
        <div class="btn-control">
          <el-button class="btn" type="success" round @click="commitComment('firstcomment')">确定</el-button>
        </div>
      </div>
    </transition>

    <div class="comment" v-for="item in comments" :key="item.id">
      <div class="info">
        <!-- <img class="avatar" :src="item.fromAvatar" width="36" height="36" /> -->
        <div class="right">
          <div class="name">{{item.username}}</div>
          <div class="date">{{item.ctime}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <!-- <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{item.like_num > 0 ? item.like_num + '人赞' : '赞'}}</span>
        </span>-->
        <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="reply in item.reply" :key="reply.id">
          <div class="reply-content">
            <span class="from-name">{{reply.from_name}}</span>
            <span>:</span>
            <span class="to-name">@{{reply.to_name}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.ctime}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment"></i>
              <span>回复</span>
            </span>
          </div>
        </div>

        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.id">
            <el-input
              class="gray-bg-input"
              v-model="inputComment"
              type="textarea"
              :rows="3"
              autofocus
              placeholder="写下你的评论"
            ></el-input>
            <div class="btn-control">
              <span class="cancel" @click="cancel">取消</span>
              <el-button class="btn" type="success" round @click="commitComment">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <p v-if="!comments.length" style="color:#999;font-size:15px;text-align:center;">快来抢占第一个沙发吧！</p>
  </div>
</template>

<script>
import Vue from "vue";
import { addComment } from "@/api/comments/comments";
import { addReply } from "@/api/comments/comments";
import { mapState } from "vuex";
export default {
  props: {
    comments: {
      type: Array,
      required: true
    },
    articleId: {
      type: Number,
      require: true
    },
    getDatas: {
      type: Function,
      require: true
    }
  },
  computed: {
    ...mapState("user", ["username", "userId"])
  },
  components: {},
  data() {
    return {
      inputComment: "",
      showItemId: "",
      firstComment: "",
      to_id: "",
      to_name: ""
    };
  },
  methods: {
    /**
     * 点赞
     */
    likeClick(item) {
      if (item.isLike === null) {
        Vue.$set(item, "isLike", true);
        item.like_num++;
      } else {
        if (item.isLike) {
          item.like_num--;
        } else {
          item.like_num++;
        }
        item.isLike = !item.isLike;
      }
    },

    /**
     * 点击取消按钮
     */
    cancel() {
      this.showItemId = "";
    },

    /**
     * 提交评论
     */
    async commitComment(type) {
      if (type === "firstcomment") {
        const result = await addComment({
          article_id: this.articleId,
          user_id: this.userId,
          username: this.username,
          content: this.firstComment,
          ctime: new Date().toLocaleString(),
          likeNum: 0
        });
        result.message === "ok" ? alert("评论成功") : "";
        this.firstComment = "";
        this.getDatas();
      } else {
        // console.log(this.to_id);
        console.log(this.inputComment, this.inputComment.split(" "));
        const result = await addReply({
          comment_id: this.showItemId,
          from_id: this.userId,
          from_name: this.username,
          content: this.inputComment.includes("@")
            ? this.inputComment
                .split(" ")
                .slice(1)
                .join()
            : this.inputComment,
          ctime: new Date().toLocaleString(),
          to_id: this.to_id,
          to_name: this.to_name
        });
        result.message === "ok" ? alert("评论成功") : "";
        this.inputComment = "";
        this.getDatas();
      }
      // console.log(this.inputComment);
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput(item, reply) {
      // console.log(reply);
      if (reply) {
        this.inputComment = "@" + reply.from_name + " ";
        this.to_id = reply.from_id;
        this.to_name = reply.from_name;
      } else {
        this.inputComment = "";
        this.to_id = item.user_id;
        this.to_name = item.username;
      }
      this.showItemId = item.id;
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
@import "../../assets/comment.less";

.container {
  padding: 0 10px;
  width: 80%;
  margin: 20px auto;
  box-sizing: border-box;
  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid @border-fourth;
    .info {
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 50%;
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .name {
          font-size: 16px;
          color: @text-main;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .date {
          font-size: 12px;
          color: @text-minor;
        }
      }
    }
    .content {
      font-size: 16px;
      color: @text-main;
      line-height: 20px;
      padding: 10px 0;
    }
    .control {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: @text-minor;
      .like {
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        &.active,
        &:hover {
          color: @color-main;
        }
        .iconfont {
          font-size: 14px;
          margin-right: 5px;
        }
      }
      .comment-reply {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: @text-333;
        }
        .iconfont {
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }
    .reply {
      margin: 10px 0 10px 30px;
      border-left: 2px solid @border-first;
      .item {
        margin: 0 10px;
        padding: 10px 0;
        border-bottom: 1px dashed @border-third;
        .reply-content {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: @text-main;
          .from-name {
            color: @color-main;
          }
          .to-name {
            color: @color-main;
            margin-left: 5px;
            margin-right: 5px;
          }
        }
        .reply-bottom {
          display: flex;
          align-items: center;
          margin-top: 6px;
          font-size: 12px;
          color: @text-minor;
          .reply-text {
            display: flex;
            align-items: center;
            margin-left: 10px;
            cursor: pointer;
            &:hover {
              color: @text-333;
            }
            .icon-comment {
              margin-right: 5px;
            }
          }
        }
      }
      .write-reply {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: @text-minor;
        padding: 10px;
        cursor: pointer;
        &:hover {
          color: @text-main;
        }
        .el-icon-edit {
          margin-right: 5px;
        }
      }
      .fade-enter-active,
      fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }
      .input-wrapper {
        padding: 10px;
      }
    }
  }
}
.btn-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
  .cancel {
    font-size: 16px;
    color: @text-normal;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: @text-333;
    }
  }
  .confirm {
    font-size: 16px;
  }
}
</style>
