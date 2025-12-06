import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    person.name = nameInputRef.current!.value;
    person.age = parseInt(ageInputRef.current!.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          ref={nameInputRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          ref={ageInputRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
