<template>
  <div>
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>


export default {
  // data() {
  //   return {
  //     items: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');

    // var vm = this;
    // // axios.get('https://api.hnpwa.com/v0/news/1.json')
    //   // .then(response => this.items = response)
    // fetchNewsList()
    //   .then(function(response) {
    //     console.log(response)
    //     vm.items = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   })
  }


}
</script>

<style>

</style>