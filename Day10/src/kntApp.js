import KntUseEffect from "./components/kntUseEffect";
import KntUseState from "./components/kntUseState";


function KntApp() {
  return (
    <div className="container border mt-3">
      <h1>Hook - Kim Ngoc Tam</h1>
      <KntUseState/>
      <KntUseEffect/>
    </div>
  );
}

export default KntApp;
