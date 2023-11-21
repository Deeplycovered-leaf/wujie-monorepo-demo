import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
// 监听消息
receiverCorsMessage();
function receiverCorsMessage() {
  window.addEventListener('message', event => {
    // 确保消息来自正确的源
    if (event.origin === 'http://localhost:5173') { // 修改为你的另一个端口
      const { token } = event.data;
      console.log("token =>", token);

      // 在这里可以使用获取到的 Token 进行其他操作
      // 例如存储到 localStorage
      localStorage.setItem('token', token);

      // 在这里可以触发你的登录成功逻辑
      // 例如重新加载页面或者更新应用状态
    }
  });
}

