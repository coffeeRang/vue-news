<template>
  <div id="app">
    <!-- url이 만약 jobs -->
    <!-- <JobsView></JobsView> -->
    <!-- 1 - Strongly Recommended -->
    <!-- <ToolBar></ToolBar> -->
    <!-- 2 - Essential -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  name: 'app',
  components: {
    ToolBar
  },
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>
