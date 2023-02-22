import { Cascader } from "antd";
const options = [
  {
    value: "lb1",
    label: "Trung tâm LAB-Sáng Tạo",
  },
  {
    value: "lb2",
    label: "Ứng dụng Mobile",
  },
];
const onChange = (value) => {
  console.log(value);
};
const System = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);
export default System;
