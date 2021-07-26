import React from "react";
import CompanyGenerator from "../app/generate/company";
import UserGenerator from "../app/generate/user";

const state = [
  "PageOne",
  "PageTwo",
  "PageThree",
  "PageFour",
  "PageFive",
  "PageSix",
  "PageSeven",
  "PageEight",
  "PageNine",
  "PageTen",
  "PageEleven",
  "PageTwelve",
];
const tableBorder: React.CSSProperties = { border: "1px solid black" };
const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  margin: "16px auto",
};

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserGenerator />
      <CompanyGenerator />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <table style={{ width: "100%", maxHeight: "90vh", ...tableBorder }}>
          <thead>
            <tr>
              <th style={{ ...tableBorder, width: "200px" }}>
                <h2>Page</h2>
              </th>
              <th style={tableBorder}>
                <h2>Premisions</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {state.map((item) => (
              <tr style={tableBorder} key={item}>
                <td style={{ ...tableBorder, width: "200px" }}>
                  <h3>{item}</h3>
                </td>
                <td
                  style={{
                    ...tableBorder,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <label style={fieldStyle} htmlFor={`${item}-read`}>
                    Read
                    <input type="checkbox" name="" id={`${item}-read`} />
                  </label>
                  <label style={fieldStyle} htmlFor={`${item}-write`}>
                    Write
                    <input type="checkbox" name="" id={`${item}-write`} />
                  </label>
                  <label style={fieldStyle} htmlFor={`${item}-update`}>
                    Update
                    <input type="checkbox" name="" id={`${item}-update`} />
                  </label>
                  <label style={fieldStyle} htmlFor={`${item}-delete`}>
                    Delete
                    <input type="checkbox" name="" id={`${item}-delete`} />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AdminDashboard;
