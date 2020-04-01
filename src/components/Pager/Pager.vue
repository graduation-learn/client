<template>
  <div id="pager">
    <span class="number" :class="current === 1? 'disabled':''" @click="changePage(1)">首页</span>
    <span class="number" :class="current === 1? 'disabled':''" @click="changePage(current - 1)">上一页</span>
    <span
      v-for="(item,i) in getPanelNumbers"
      :key="i"
      :class="current === item?'active':''"
      class="number"
      @click="changePage(item)"
    >{{item}}</span>
    <span
      class="number"
      :class="current === totalPage? 'disabled':''"
      @click="changePage(current+1)"
    >下一页</span>
    <span
      class="number"
      :class="current === totalPage? 'disabled':''"
      @click="changePage(totalPage)"
    >尾页</span>
    <span>{{current}}/{{totalPage}}</span>
    跳到第
    <input type="number" ref="inp" :value="current" @input="changePage($event.target.value)" />页
  </div>
</template>

<script>
export default {
  data() {
    return {
      panelNumber: 5
    };
  },
  props: ["current", "total", "limit"],
  methods: {
    changePage(val) {
      val = +val;

      if (val === this.current) {
        return;
      }
      if (val > this.totalPage) {
        this.$refs.inp.value = this.totalPage;
        val = this.totalPage;
      }
      if (val < 1) {
        this.$refs.inp.value = 1;
        val = 1;
      }
      this.$emit("changePage", val);
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit);
    },
    getPanelNumbers() {
      let min = this.current - Math.floor(this.panelNumber / 2);
      if (min < 1) min = 1;
      let max = min + this.panelNumber - 1;
      if (max > this.totalPage) max = this.totalPage;
      let arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    }
  }
};
</script>

<style lang="less">
.number {
  display: inline-block;
  border: 1px solid lightblue;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  text-align: center;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #f40;
  }
  &.disabled {
    cursor: not-allowed;
    border: 1px solid #ccc;
  }
  &.active {
    border: 1px solid transparent;
    font-weight: bold;
    color:#f40;
  }
}
</style>