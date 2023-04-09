import { FloatButton, Drawer } from "antd";
import { useState } from "react";
import cloudDiskIcon from "./icons/cloud_disk.png";
import Ali from "./Ali";

export default function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        title="阿里云盘"
        placement="right"
        onClose={onClose}
        open={open}
        mask={false}
        bodyStyle={{ padding: 0, overflow: "hidden", position: "relative" }}
      >
        <Ali />
      </Drawer>

      <FloatButton
        style={{ right: 24 }}
        onClick={showDrawer}
        icon={<img src={cloudDiskIcon} width={18} />}
      ></FloatButton>
    </div>
  );
}
