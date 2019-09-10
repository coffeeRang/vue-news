<template>
  <div>
    <p v-for="item in fetchedAsks">
      <a :href="item.url">{{ item.title }}</a>
      <small> {{item.time_ago}}, {{item.user}}</small>


    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {

    // #4
    ...mapGetters([
      'fetchedAsks'
    ])
    // #3
    // ...mapGetters({
    //   askedItems: 'fetchedAsks'
    // })

    // #2
    // ...mapState({
    //   asks: state => state.asks
    // }),

    // #1
    // asks() {
    //   return this.$store.state.asks;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }


    // data() {
    //   return {
    //     ask: []
    //   }
    // },
    // var vm = this;
    // console.log('호출 전 this : ', this)
    // fetchAskList()
    //   .then( response => {
    //     console.log('호출 후 this : ', this);
    //     // console.log(response)
    //     // vm.ask = response.data;

    //   })
    //   .catch(function(error) {
    //     console.log(error);

    //   })

  

}
</script>

<style>

</style>