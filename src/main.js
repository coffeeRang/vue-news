import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';


Vue.config.productionTip = false

// main.js에서 router를 다 선언하고 사용하면 main.js에서 router의 비중이 너무 커지기 때문에 별도 js로 분리해 관리하는게 좋다.


// main.js는 일반적으로 application의 설정들을(플러그인, 라이브러리, 구조) 파악할 수 있는 청사진이다.
// 구조도가 눈에 보여야 한다.
// main.js

new Vue({
  render: h => h(App),
  router,             // router: router -> 축약문법
  store,
}).$mount('#app')
