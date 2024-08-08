import React, { useId, useState } from "react";

const App = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textArea: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  const id = useId();
  console.log("id", id);

  const handleData = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValue((pre) => ({
      ...pre,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("raju", formValue);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleData}
          name="firstName"
          value={formValue.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleData}
          name="lastName"
          value={formValue.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={handleData}
          name="email"
          value={formValue.email}
        />
        <br />
        <br />
        <textarea
          value={formValue.textArea}
          name="textArea"
          id="isFriendly"
          placeholder="Comments"
          onChange={handleData}
        />
        <br />
        <input
          name="isFriendly"
          id="isFriendly"
          type="checkbox"
          checked={formValue.isFriendly}
          onChange={handleData}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />

        <fieldset>
          <legend>Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formValue.employment === "unemployed"}
            onChange={handleData}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formValue.employment === "part-time"}
            onChange={handleData}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            checked={formValue.employment === "full-time"}
            value="full-time"
            onChange={handleData}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
        <br />

        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select
          value={formValue.favColor}
          id="favColor"
          name="favColor"
          onChange={handleData}
        >
          <option value="">-- Select --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
