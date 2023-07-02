import React, { useState } from "react";
import "./InputForm.scss";

export type userInfoType = {
  name: string;
  email: string;
  phoneNumber: string;
};

const InputForm = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [form, setForm] = useState();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(userInfo.name);

  return (
    <div className="parent-input-form">
      <h2 className="form-header-container">Contact</h2>
      <form className="contact-input-form-container" onSubmit={onSubmitHandler}>
        <input
          className={userInfo.name.length > 1 ? "input" : "required-input"}
          type="text"
          placeholder="Name"
          required
          value={userInfo.name}
          onChange={(e) =>
            setUserInfo((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
        />
        <input
          className={userInfo.email.includes("@") ? "input" : "required-input"}
          type="eamil"
          placeholder="Email Address"
          value={userInfo.email}
          onChange={(e) =>
            setUserInfo((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
          required
        />
        <input
          className={
            userInfo.phoneNumber.length > 6 ? "input" : "required-input"
          }
          type="number"
          placeholder="Phone"
          required
          value={userInfo.phoneNumber}
          onChange={(e) =>
            setUserInfo((prev) => {
              return { ...prev, phoneNumber: e.target.value };
            })
          }
        />
        <button className="submit-button-container">SUBMIT</button>
      </form>
    </div>
  );
};

export default InputForm;
