import React from "react";
import LoginHeader from "./component/LoginHeader";
import { Routes, Route } from "react-router-dom";
import Sign from "./component/Sign";
import { useSelector } from "react-redux";



function App() {

  const data = useSelector((state)=>{
    return state.user
  })

  

  
return (<>
  
  {data.isLogin ? 
    <Routes>
      <Route path="/" element={<Sign/>} />
    </Routes>
  :
  <Routes>
  <Route path="/" element={<LoginHeader/>} />
  
  {/* <Route path="/" element = {<Login />} /> */}

  
  </Routes>}
  </>
  );
}

export default App;
