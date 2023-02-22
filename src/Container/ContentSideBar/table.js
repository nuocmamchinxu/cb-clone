import Item from "./item";
import React from "react";
import { useSelector } from "react-redux";
import { Space, Table, Button, Modal, Input, Pagination } from "antd";
import { deleteEvent, updateData } from "../../Redux/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import System from "./eventSystem";
import EventAdd from "./eventAdd";
import eventUpdate from "./eventUpdate";
import { cancel } from "redux-saga/effects";
const TableEvent = () => {
  // let datas = useSelector((state) => state.app);
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
        <TableTest />
      </div>
    </div>
  );
};
export default TableEvent;

// ----------------------------------

const { Column } = Table;

const TableTest = ({ data }) => {
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
    },
    {
      title: "Mã",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên chủ đề",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Chức Năng",
      key: "action",
      render: (data) => (
        <Space size="middle">
          <Button type="primary" ghost onClick={showModal}>
            Cập Nhật
          </Button>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="title-add">
              <div>Cập nhật chủ đề</div>
            </div>
            <div className="input-add">
              <div>
                <h5>Tên chủ đề</h5>
              </div>
              <div>
                <Input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  className="col-8"
                />
              </div>
            </div>
            <div className="input-system">
              <div>
                <h5>Hệ thống</h5>
              </div>
              <div className="sys">
                <System />
              </div>
            </div>
          </Modal>
          <Button
            danger
            onClick={() => dispatch(deleteEvent({ id: data.key }))}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const [name, setName] = useState(data);
  let dispath = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (data) => {
    setIsModalOpen(false);
    setName(data.name);
    dispatch(
      updateData({
        ...data,
        name: name,
      })
    );

    // viet xu ly submit data, goi den action
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // --------------------

  let datas = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const dt = datas.map((data, index) => {
    return {
      key: data.id,
      firstName: data.name,
      time: data.time,
      index: data.index,
    };
  });

  return (
    <>
      <div className="event-header">
        <div className="title">Quản lý chương trình Digital Loyalty</div>
      </div>
      <div className="function">
        <div className="function">
          <Input
            autoFocus
            placeholder="Tìm chủ đề"
            onPressEnter={() => {}}
            onBlur={() => {}}
          ></Input>
          <Button type="primary">Tìm kiếm</Button>
        </div>
        <div>
          <EventAdd />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={dt}
        scroll={{
          x: 100,
          y: 300,
        }}
      ></Table>
    </>
  );
};
