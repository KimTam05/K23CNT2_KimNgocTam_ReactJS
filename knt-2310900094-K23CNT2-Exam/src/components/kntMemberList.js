import React from "react";

const KntMemberList = ({kntMembers}) => {
    const kntData = Array.isArray(kntMembers) ? kntMembers : [kntMembers];
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>User Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <KntMember KntMemberList={kntData}/>
            </tbody>
        </table>
    )
}

const KntMember = ({KntMemberList}) => {
    return (
        <>
            {
                KntMemberList.map((kntItem, kntIndex) => (
                    <tr>
                        <th>{kntIndex + 1}</th>
                        <td>{kntItem.kntID}</td>
                        <td>{kntItem.kntFullName}</td>
                        <td>{kntItem.kntUserName}</td>
                        <td>{kntItem.kntPassword}</td>
                    </tr>
                ))
            }
        </>
    )
}

export default KntMemberList;