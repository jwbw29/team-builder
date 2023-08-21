import { useState } from "react";

export default function Form(props) {
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    /**
     * const name = event.target.name
     * const value = event.target.value
     */
    props.change(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.submit();
  };

  return (
    /*Add New Member Form*/
    <div className="border p-3 m-2 shadow-md w-3/4 rounded bg-custBeige">
      <h1 className="text-custBlue text-4xl">Add New Member</h1>
      <div className="border p-3 m-2 mb-0.5 shadow-md rounded bg-custBeige">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>
            First Name:{" "}
            <input
              value={props.values.fname}
              type="text"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter First Name"
              name="fname"
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:{" "}
            <input
              value={props.values.lname}
              type="text"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter Last Name"
              name="lname"
              onChange={handleChange}
            />
          </label>
          <label>
            Email:{" "}
            <input
              value={props.values.email}
              type="email"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label>
            Role:{" "}
            <input
              value={props.values.role}
              type="role"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter Role"
              name="role"
              onChange={handleChange}
            />
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
