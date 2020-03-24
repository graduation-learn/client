<template>
  <el-table :data="tableData">
    <el-table-column prop="title" label="标题" width="180" align="center"></el-table-column>
    <el-table-column prop="content" label="内容" width="180" align="center"></el-table-column>
    <el-table-column prop="time" label="发布时间" align="center"></el-table-column>
    <el-table-column prop="like" label="获赞数" align="center"></el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  handleClick(row) {
    console.log(row);
  },
  data() {
    const item = {
      title: "考研英语",
      content: "考研",
      time: "2020/03/24",
      like: 999
    };
    return {
      tableData: new Array(20).fill(item)
    };
  }
};
</script>

<style>
.el-table {
  width: 80%;
  float: right;
}
</style>