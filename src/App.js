import "./index.css";
import { useState } from "react";
import Form from "./Form";

export default function App() {
  const [teamMember, setTeamMember] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
  });
  return (
    <>
      <div className="border p-3 m-2 shadow-md w-3/4 rounded bg-custBeige">
        <h1 className="text-custBlue text-4xl">Our Team</h1>
        <div className="border m-2 mb-0.5 shadow-md rounded bg-custBeige">
          <table className="m-2 text-left">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
            <tr>
              <td className="pr-5">
                {" "}
                {teamMember.fname} {teamMember.lname}
              </td>
              <td className="pr-5"> {teamMember.email}</td>
              <td> {teamMember.role}</td>
            </tr>
          </table>
        </div>
      </div>
      <Form />
    </>
  );
}
