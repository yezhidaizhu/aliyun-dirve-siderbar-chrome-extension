import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { onMsg } from "../utils/message";
import { MessageType } from "../types/content";

export default function Ali() {
  const [loading, setloading] = useState(true);

  const iframeRef = useRef<any>();

  useEffect(() => {
    onMsg(({ type }) => {
      console.log("wpane========>", type);

      if (type == MessageType.AliyunPagesIsReady) {
        iframeRef.current?.contentWindow?.postMessage?.(
          { type: MessageType.HiddenSiderBar },
          "*"
        );
      } else if (type == MessageType.HiddenSiderBarReply) {
        setloading(false);
      }
    });
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        src="https://www.aliyundrive.com/drive"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
      ></iframe>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: loading ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
          background: "#fff",
          top: 0,
          zIndex: 2,
        }}
      >
        <Spin size="large" />
      </div>
    </>
  );
}
