import React from "react";

const CountryDetails = ({ users }) => {
    const tableStyle = {
        width: "100%",
        padding: "2%",
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
        border: "3px solid black",
    };
    const odd = {
        width: "100%",
        padding: "2%",
        backgroundColor: "green",
        color: "white",
        textAlign: "center",
        border: "3px solid black",
    };

    const even = {
        width: "100%",
        padding: "2%",
        backgroundColor: "viloet",
        color: "white",
        textAlign: "center",
        border: "3px solid black",
    };

    if (users.length === 0 || users.length === undefined) return null;
    const UserRow = (user, index) => {
        return (
            <tr key={index} style={index % 2 === 0 ? odd : even}>
                <td>{user.name}</td>
                <td>{user.population}</td>
                <td>
                    {user.currencies.map((listValue, index) => {
                        return <div key={index}>{listValue.code}</div>;
                    })}
                </td>
                <td>{user.rate}</td>
            </tr>
        );
    };
    const userTable =
        users.length !== 0
            ? users.map(user =>
                user.map((user, index) => UserRow(user, index)))
            : null;

    return (
        <div>
            <h2>Country Detais </h2>
            <table>
                <thead>
                    <tr style={tableStyle}>
                        <th>Country Name</th>
                        <th>Population</th>
                        <th>Official currencies</th>
                        <th>current exchange rate to SEK</th>
                    </tr>
                </thead>
                <tbody style={tableStyle}>{userTable}</tbody>
            </table>
        </div>
    );
};
export default CountryDetails;
