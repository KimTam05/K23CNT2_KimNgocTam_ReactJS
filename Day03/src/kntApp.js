import React from "react";
import KntJsxExpression from "./components/KntJsxExpression";
import KntFuncComp from "./components/KntFuncComp";
import KntClassComp from "./components/KntClassComp";

function KntApp(){
  return(
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson 03 - Kim Ngọc Tâm</h1>

      <KntJsxExpression />


      <hr/>
      {/* Sử dụng Function Component */}
      <KntFuncComp />
      
      {/* Sử dụng class component */}
      <KntClassComp />

    </div>
  )
}

export default KntApp;