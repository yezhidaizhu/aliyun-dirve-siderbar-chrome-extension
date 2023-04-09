import { MessageType } from "@src/pages/content/types/content";

let timer;
(() => {
  if (!window.location.href.startsWith("https://www.aliyundrive.com/")) {
    return;
  }
  console.log("aliyun iframe");

  timer = setInterval(() => {
    const siderBar = getSiderBar();
    if (siderBar) {
      postMsg({ type: MessageType.AliyunPagesIsReady });
      clearInterval(timer);
    }
  }, 100);

  window.addEventListener("message", (ev) => {
    const { type } = ev.data || {};
    console.log("ifram message=======>", type);

    if (type == MessageType.HiddenSiderBar) {
      hiddenSiderBar();
    }
  });
})();

function postMsg(msg: { type: MessageType; data?: { [key: string]: any } }) {
  window.parent.postMessage(msg, "*");
}

function hiddenSiderBar() {
  clearInterval(timer);
  const siderBar = getSiderBar();
  if (siderBar) {
    siderBar.style.width = 0;
    setTimeout(() => {
      postMsg({ type: MessageType.HiddenSiderBarReply });
    }, 900);
  }
}

function showSiderBar() {
  clearInterval(timer);
  const siderBar = getSiderBar();

  if (siderBar) {
    siderBar.style.width = "240px";
  }
}

function getSiderBar() {
  const layout = document.getElementById("layout");
  const siderBar: any = layout?.firstChild;

  return siderBar;
}
