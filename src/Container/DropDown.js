import { DownOutlined, BellOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Log out
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Setting
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  //   {
  //     label: "3rd menu item（disabled）",
  //     key: "3",
  //     disabled: true,
  //   },
];
const Dropdown2 = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>Admin</Space>
    </a>
  </Dropdown>
);
export default Dropdown2;
