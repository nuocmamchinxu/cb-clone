import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Item = ({ data }) => {
  // const [name, setName] = useState(data.name);
  const dispath = useDispatch();
  const [name, setName] = useState(data.name);
  console.log("check data", data.name);
  return (
    <div>
      <div>#{Math.trunc(data.id * 10)}</div>
      <h4>{data.name}</h4>
    </div>
  );
};
export default Item;
