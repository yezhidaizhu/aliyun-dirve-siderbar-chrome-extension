import { MessageType } from "@src/pages/content/types/content";

export function postMsg(msg: {
  type: MessageType;
  data?: { [key: string]: any };
}) {
  window.postMessage(msg, "*");
}

export function onMsg(
  fn: (msg: { type: MessageType; data?: { [key: string]: any } }) => void
) {
  window.addEventListener("message", (ev) => {
    const { type, data } = ev.data || {};
    fn?.({ type, data });
  });
}
