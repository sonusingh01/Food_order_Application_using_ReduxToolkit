import React from "react";

import { useDispatch, useSelector } from "react-redux";
import userStatus, { updateName } from "../Redux/action";

function Home() {
  const { status, name, age } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const updateAge = (age) => {
    dispatch({ type: "UPDATE_AGE", payload: age });
  };
  const updateNames = async () => {
    dispatch(updateName());
  };

  const UpdateStatus = (status) => {
    dispatch(userStatus(status));
  };
  return (
    <div>
      Home
      <h1>hello my age is {age}</h1>
      <button onClick={() => updateAge(40)}>Click</button>
      <h1>hello my name is {name}</h1>
      <button onClick={() => updateNames([0].name)}>Click</button>
      <h1>{status}</h1>
      <button onClick={() => UpdateStatus("single")}>Click</button>
    </div>
  );
}

export default Home;
