// import { request } from 'shared';
// request.get()
// // 发送 Token 到其他子域
const targetOrigin = 'http://localhost:5174'; // 修改为你的另一个端口

createIframe(targetOrigin);
function createIframe(origin: string) {
  const iframe = document.createElement('iframe');
  iframe.src = origin;
  iframe.style.display = 'none';

  document.body.append(iframe);

  const token = getAuthToken();
  iframe.onload = () => {
    postMessageToIframe(iframe, { token });
  };
}
function postMessageToIframe(iframe: HTMLIFrameElement, message: any) {
  iframe.contentWindow?.postMessage(message, iframe.src);
}
// // 在这里可以处理跨域通信的逻辑，监听消息事件等
function getAuthToken() {
  // 假设这是获取 Token 的逻辑
  return 'your_token_zi';
}
