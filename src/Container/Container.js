import { TeamOutlined } from "@ant-design/icons";
import {
  AiOutlineAliyun,
  AiFillCodepenCircle,
  AiOutlineGlobal,
} from "react-icons/ai";
import { HiCubeTransparent } from "react-icons/hi";

import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Event from "./ContentSideBar/event";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Chương trình Digital Loyalty", "h1", <HiCubeTransparent />),
  getItem("Giải thưởng", "h2", <AiFillCodepenCircle />),
  getItem("Vòng Quay", "h3", <AiOutlineGlobal />),
  getItem("Quản lý tỷ lệ trúng thưởng", "sub1", <AiOutlineAliyun />, [
    getItem("Tom", "h3", <AiOutlineAliyun />),
    getItem("Bill", "4", <AiOutlineAliyun />),
    getItem("Alex", "5", <AiOutlineAliyun />),
  ]),
  getItem("Quản lý Admin", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Quản lý hệ thống tích điểm", "sub3", <AiOutlineAliyun />, [
    getItem("Tom", "h3", <AiOutlineAliyun />),
    getItem("Bill", "4", <AiOutlineAliyun />),
    getItem("Alex", "5", <AiOutlineAliyun />),
  ]),
];
const Container = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          onClick={({ key }) => {
            if (key === "/") {
            } else {
              navigate(key);
            }
          }}
          theme="dark"
          defaultSelectedKeys={["h1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content>
          <Routes>
            <Route path="/h1" element={<Event />}></Route>
            <Route path="/h2" element={<>Home2</>}></Route>
            <Route path="/h3" element={<>Home3</>}></Route>
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Container;
