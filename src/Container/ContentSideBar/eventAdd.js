import { Button, Modal, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Input } from "antd";
import System from "./eventSystem";
import { addEvent } from "../../Redux/action";
import { connect } from "react-redux";

const EventAdd = () => {
  const [name, setName] = useState("");
  let dispath = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);

    dispath(addEvent({ id: Math.floor(Math.random() * 1001), name }));
    setName("");
    // viet xu ly submit data, goi den action
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        ADD
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="title-add">
          <div>Thêm chủ đe</div>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state,
});
export default connect(mapStateToProps, null)(EventAdd);
