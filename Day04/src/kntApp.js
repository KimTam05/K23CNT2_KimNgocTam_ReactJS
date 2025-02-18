import KntFuncComp from "./components/kntFuncComp";
import KntFuncComp1 from "./components/kntFuncComp1";
import KntClassComp from "./components/kntClassComp";

function KntApp() {
    // Object
    const users = {
        fullname: "Kim Ngọc Tâm",
        age: 20,
        phone: "0987422491",
    }

    return (
        <div className="container border mt-3">
            <h1>Demo Component - Props - State - Kim Ngọc Tâm</h1>
            <hr/>
            <div className="alert alert-primary">
                <KntFuncComp name="Kim Tâm" address="Thanh Trì" company="Đại học Nguyễn Trãi"/>
                <hr/>
                <KntFuncComp name="Kim Tâm" address="K23CNT2" company="Đại học Nguyễn Trãi" note="Xin chào"/>
            </div>

            <div className="alert alert-info">
                <KntFuncComp1 renderInfo = {users}/>
            </div>
            <KntClassComp   />
            {/* Chuyển dữ liệu từ kntApp về kntClassComp */}
            <KntClassComp renderName="K23CNT2" renderUsers = {users}/>

        </div>
    )
}

export default KntApp;