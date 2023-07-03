import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/fireBase";
import "./InputForm.scss";
import Input from "./Input";

export type userInfoType = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type inputFormArrayType = {
  userInfoKey: keyof userInfoType;
  inputType: string;
  placeHolder: string;
};

const InputForm = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "client"), {
        name: userInfo.name,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
      });
    } catch (err) {
      console.error(err);
    }
    setUserInfo({
      name: "",
      email: "",
      phoneNumber: "",
    });
  };

  const inputFormArray: inputFormArrayType[] = [
    {
      userInfoKey: "name",
      inputType: "text",
      placeHolder: "Name",
    },
    {
      userInfoKey: "email",
      inputType: "email",
      placeHolder: "Email Address",
    },
    {
      userInfoKey: "phoneNumber",
      inputType: "number",
      placeHolder: "Phone",
    },
  ];

  return (
    <div className="parent-input-form">
      <h2 className="form-header-container">Contact</h2>
      <form className="contact-input-form-container" onSubmit={onSubmitHandler}>
        {inputFormArray.map((input) => (
          <Input
            key={input.userInfoKey}
            input={input}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        ))}
        <button className="submit-button-container" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default InputForm;
