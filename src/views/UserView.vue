<template>
  <div>
    userView
  </div>
</template>

<script>
import axios from 'axios';


export default {
  created() {
    const userName = this.$route.params.id
    axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>