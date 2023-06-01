<template>
  <table id="table">
    <thead>
      <tr>
        <th width="10%">번호</th>
        <th width="45%">제목</th>
        <th width="20%">작성자</th>
        <th width="10%">작성일</th>
        <th width="15%">조회수</th>
      </tr>
    </thead>
    <tbody>
      <tr class="posts" v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.writer }}</td>
        <td>{{ item.day }}</td>
        <td>{{ item.view }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
interface Item {
  id: number;
  title: string;
  writer: string;
  day: string;
  view: number;
}

export default {
  name: "List_Main",
  data() {
    return {
      items: [
        {
          id: 2,
          title: "안녕",
          writer: "난",
          day: "2023-01-04",
          view: 0,
        },
        {
          id: 1,
          title: "더미",
          writer: "더미임",
          day: "2023-01-03",
          view: 0,
        },
      ] as Item[],
    };
  },
};
</script>

<style scoped>
#table {
  width: 60rem;
  margin-top: 1rem;
  border-spacing: 0;
  border-collapse: collapse;
}

thead {
  background-color: #474747;
  height: 3rem;
}

th {
  color: #fff;
  padding: 0;
}

.posts {
  height: 3rem;
  text-align: center;
  border-bottom: 1px solid #dedede;
}

.posts:nth-child(even) {
  background-color: #f8f8f8;
}
</style>
