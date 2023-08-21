import "./index.css";
import { useState } from "react";
import Form from "./Form";

export default function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
  });

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ fname: "", lname: "", email: "", role: "" });
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <Form values={values} change={onChange} submit={onSubmit} />
      <div className="border p-3 m-2 shadow-md w-3/4 rounded bg-custBeige">
        <h1 className="text-custBlue text-4xl">Our Team</h1>
        <div className="border m-2 mb-0.5 shadow-md rounded bg-custBeige">
          <table className="m-2 text-left">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
              {members.map((member, key) => {
                return (
                  <div key={key}>
                    <tr>
                      <td className="pr-5">
                        {" "}
                        {member.fname} {member.lname}
                      </td>
                      <td className="pr-5"> {member.email}</td>
                      <td> {member.role}</td>
                    </tr>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
