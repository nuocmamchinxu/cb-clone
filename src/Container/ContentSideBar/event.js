import "./content.css";
import TableEvent from "./table";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Button } from "antd";
import EventAdd from "./eventAdd";

import { useState } from "react";
// Modal

const Event = () => {
  return (
    <>
      {/* <div className="event-header">
        <div className="title">Quản lý chương trình Digital Loyalty</div>
      </div> */}

      <div className="table-event">
        <TableEvent />
      </div>
    </>
  );
};
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export default Event;
// /////

const SearchBTN = () => <Input placeholder="Tên chủ đề" />;

const BtnSearch = () => (
  <Space wrap>
    <Button type="primary">Tìm kiếm</Button>
  </Space>
);
