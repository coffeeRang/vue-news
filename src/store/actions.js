import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';
export default {
  // mutation에 접근할수 있게 context라는 인자가 제공된다.
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, 
  FETCH_ASKS(context) {
    fetchAskList()
      .then(({data}) => {
        context.commit('SET_ASKS', data);
      })
      .catch(error => {
        console.error(error);
      })
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => {
        console.log(response.data)
        context.commit('SET_JOBS', response.data);
      })
      .catch(error => {
        console.error(error);
      })
  },
  FETCH_USER() {
    
  }

}