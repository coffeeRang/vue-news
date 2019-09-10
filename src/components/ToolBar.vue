<template>
  <div class="header">
    <!-- vue 내부적으로 router-link를 사용할때 vue-router에서 브라우저에서 anchor 태그로 변환해준다. -->
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/item">Item</router-link> |
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
  /* scoped : 해당 컴포넌트에만 적용되는 스타일 */
  .header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding:8px;
  }
  .header .router-link-exact-active {
    color: #35495e;
  }
  .header a {
    color: white;
  }
</style>
