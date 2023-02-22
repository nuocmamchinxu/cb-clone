import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
const Test = () => {
  return (
    <>
      <Header />
      <div className="side-bar">
        <SideBar />
        <Content />
      </div>
    </>
  );
};
const Header = () => {
  return <div>Header</div>;
};
const SideBar = () => {
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 1", "1"),
      getItem("Option 2", "h2"),
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ];
  return (
    <Menu
      onClick={({ key }) => {
        if (key === "/") {
        } else {
          navigate(key);
        }
      }}
      className="menu"
      //   items={[
      //     { label: "Home", key: "/" },
      //     { label: "Home2", key: "/h2" },
      //     { label: "Home3", key: "/h3" },
      //   ]}
      items={items}
    ></Menu>
  );
};
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<>Home</>}></Route>
        <Route path="/h2" element={<>Home2</>}></Route>
        <Route path="/h3" element={<>Home3</>}></Route>
      </Routes>
    </div>
  );
};
export default Test;
