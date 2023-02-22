import "./header.css";
import logo from "./logocb.jpg";
import Dropdown2 from "./DropDown";
import { BellOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="lg" src={logo} />
      </div>
      <div className="dropdown">
        <div className="bell-icon">
          <BellOutlined />
        </div>
        <Dropdown2 />
      </div>
    </div>
  );
};
export default Header;
