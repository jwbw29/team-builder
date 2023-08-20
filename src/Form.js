import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
  });

  const handleChange = (evt) => {
    setFormValues(evt.target.value);
  };

  return (
    /*Add New Member Form*/
    <div className="border p-3 m-2 shadow-md w-3/4 rounded bg-custBeige">
      <h1 className="text-custBlue text-4xl">Add New Member</h1>
      <div className="border p-3 m-2 mb-0.5 shadow-md rounded bg-custBeige">
        <form className="flex flex-col">
          <label>
            First Name:{" "}
            <input
              value={formValues.fname}
              type="text"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter First Name"
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:{" "}
            <input
              value={formValues.lname}
              type="text"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter Last Name"
            />
          </label>
          <label>
            Email:{" "}
            <input
              value={formValues.email}
              type="email"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter Email"
            />
          </label>
          <label>
            Select Role:
            <select className="ml-2 pl-1 py-0.5 border rounded-sm">
              <option>Select Role</option>
              <option>Fullstack Engineer</option>
              <option>Backend Engineer</option>
              <option>Frontend Engineer</option>
              <option>Designer</option>
            </select>
          </label>
          <input
            type="submit"
            className="rounded-md justify-start w-20 h-10 bg-custBlue text-custBeige mt-5 "
          />
        </form>
      </div>
    </div>
  );
}
