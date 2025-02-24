import React from "react";
import KntFuncEvent1 from "./components/kntFuncEvent1";
import KntClassEvent1 from "./components/kntClassEvent1";
import KntFuncCompEventProps from "./components/kntFuncCompEventProps";
import KntClassCompEventProps from "./components/kntClassCompEventProps";
import KntClassCompEventState from "./components/kntClassCompEventState";
import KntClassCompEventPostData from "./components/kntClassCompEventPostData";

function KntApp() {
    return (
      <div className="container border mt-3">
        <h2>K23CNT2 - Kim Ngọc Tâm - Event Form</h2>
        <hr/>
        <div>
          <KntFuncEvent1 />
        </div>
        <hr/>
        <div>
          <h2>Class Components - Event</h2>
          <><KntClassEvent1 /></>
        </div>
        <div>
          <h2>Function Component - Props</h2>
          <><KntFuncCompEventProps kntRenderName="Kim Tâm"/></>
        </div>
        <div>
          <h2>Function Component - Class Props</h2>
          <><KntClassCompEventProps kntRenderTitle="Kim Tâm"/></>
        </div>
        <div>
          <h2>Function Component - Class State</h2>
          <><KntClassCompEventState /></>
        </div>
        <div>
          <h2>Function Component - Post Data</h2>
          <><KntClassCompEventPostData onKntDataToApp={this.kntHandleDataToApp}/></>
        </div>
      </div>
    );
  }


export default KntApp;
