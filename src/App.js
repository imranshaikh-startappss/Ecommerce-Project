import React from "react";
import LoginHeader from "./component/LoginHeader";
import { Routes, Route } from "react-router-dom";
import Sign from "./component/Sign";
import { useSelector } from "react-redux";
import Registration from "./component/Registration";

const App = () => {
  const data = useSelector((state) => {
    return state.user;
  });

  console.log("getting  data from redux:",data)
  return (
    <>
      {data.isLogin ? (
        <Routes>
          <Route path="/" element={<Sign />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginHeader />} />
          <Route path="/SignUp" element={<Registration />} />

          {/* <Routes path="/" element = {<Login />} /> */}
        </Routes>
      )}
    </>
  );
};

export default App;
