<template>
  <div id="container">
    <h1>게시글 리스트</h1>
    <div id="buttenWrap">
      <button id="writeBtn">글 작성하기</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "List_Top",
};
</script>

<style scoped>
#container {
  position: relative;
  width: 60rem;
}

#buttonWrap {
  width: 100%;
  position: relative;
}

#writeBtn {
  width: 8rem;
  height: 2.5rem;
  color: #fff;
  font-weight: 600;
  float: right;
  border: none;
  border-radius: 10px;
  background-color: #474747;
}
</style>
