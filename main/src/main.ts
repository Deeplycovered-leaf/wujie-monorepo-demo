import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Wujie from 'wujie-vue3';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Wujie)

app.mount('#app')


//首先我们需要创建一个iframe标签
// const bIframe = document.createElement('iframe')
// bIframe.src=targetOrigin // src需要指向我们要传递数据的目标地址
// bIframe.style.display = 'none';  // 使该标签儿不在界面上进行显示
// document.body.append(bIframe)  // 将标签插入到页面上
// // 这个load事件是必须要加的不加，信息无法传递
// bIframe.onload =()=>{
//     bIframe.contentWindow?.postMessage(
//      {token: getAuthToken()},
//      targetOrigin
//     )
// }
 