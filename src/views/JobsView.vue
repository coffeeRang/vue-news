<template>
  <div>
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <small> {{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }

  // data() {
  //   return {
  //     jobs: []
  //   }
  // },
  // created() { // vue life-cycle hook
  //   // 화살표 함수에서는 this 를 변경하지 않아도 된다 : 이전 - var vm = this; 처리가 필요했음
  //   fetchJobsList()
  //     .then(response => this.jobs = response.data)
  //     .catch(error => console.log(error));
  // },
}
</script>

<style>

</style>