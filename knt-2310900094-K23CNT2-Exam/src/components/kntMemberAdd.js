import { useState } from "react";

function KntMemberAdd({kntMemberOnAdd}) {
    const [kntID, kntSetID] = useState("");
    const [kntFullName, kntSetFullName] = useState("");
    const [kntUserName, kntSetUserName] = useState("");
    const [kntPassword, kntSetPassword] = useState("");

    const kntHandleSubmit = (e) => {
        e.preventDefault();
        kntMemberOnAdd({kntID, kntFullName, kntUserName, kntPassword});
        kntSetID("");
        kntSetFullName("");
        kntSetUserName("");
        kntSetPassword("");
    }   

    return (
        <form onSubmit={kntHandleSubmit}>
            <div className="mb-3">
                <label className="form-label">ID: </label>
                <input
                className="form-control"
                type="text"
                value={kntID}
                onChange={(e) => kntSetID(e.target.value)}
                placeholder="Enter ID"
            />
            </div>
            <div className="mb-3">
                <label className="form-label">Full Name: </label>
                <input
                className="form-control"
                type="text"
                value={kntFullName}
                onChange={(e) => kntSetFullName(e.target.value)}
                placeholder="Enter Full Name"
            />
            </div>
            <div className="mb-3">
                <label>User Name: </label>
                <input
                className="form-control"
                type="text"
                value={kntUserName}
                onChange={(e) => kntSetUserName(e.target.value)}
                placeholder="Enter User Name"
            />
            </div>
            <div className="mb-3">
                <label>Password: </label>
                <input
                className="form-control"
                type="password"
                value={kntPassword}
                onChange={(e) => kntSetPassword(e.target.value)}
                placeholder="Enter Password"
            />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add</button>
        </form>
    )
}

export default KntMemberAdd;