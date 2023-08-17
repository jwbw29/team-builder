export default function Form() {
  return (
    /*Add New Member Form*/
    <div className="border p-3 m-2 shadow-md w-3/4 rounded bg-custBeige">
      <h1 className="text-custBlue text-4xl">Add New Member</h1>
      <div className="border p-3 m-2 mb-0.5 shadow-md rounded bg-custBeige">
        <form className="flex flex-col">
          <label>
            First Name:{" "}
            <input
              type="text"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter First Name"
            />
          </label>
          <label>
            Last Name:{" "}
            <input
              type="text"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter Last Name"
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="email"
              className="border rounded-sm my-2 px-2"
              placeholder="Enter Email"
            />
          </label>
          {/* Add Default option
          but the form in a container (inside the div that already exists) */}
          <select>
            <option>Select Role</option>
            <option>Fullstack Engineer</option>
            <option>Backend Engineer</option>
            <option>Frontend Engineer</option>
            <option>Designer</option>
          </select>
          <input
            type="submit"
            className="rounded-md justify-start w-20 h-10 bg-custBlue text-custBeige mt-5 "
          />
        </form>
      </div>
    </div>
  );
}
