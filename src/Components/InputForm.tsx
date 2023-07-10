import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/fireBase";
import "./InputForm.scss";
import Input from "./Input";

export type userInfoType = {
  name: string;
  email: string;
  phoneNumber: string;
  moreInfo: string;
};

export type inputFormArrayType = {
  userInfoKey: keyof userInfoType;
  inputType: string;
  placeHolder: string;
  pattern?: string;
};

const InputForm = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    name: "",
    email: "",
    phoneNumber: "",
    moreInfo: "",
  });

  const [focused, setFocused] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "client"), {
        name: userInfo.name,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        moreInfo: userInfo.moreInfo,
      });
    } catch (err) {
      console.error(err);
    }
    setUserInfo({
      name: "",
      email: "",
      phoneNumber: "",
      moreInfo: "",
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
      placeHolder: "Phone (012-345-1234)",
      pattern: "^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$",
    },
    {
      userInfoKey: "moreInfo",
      inputType: "textfield",
      placeHolder: "Your Message",
    },
  ];

  return (
    <div className="parent-input-form">
      <form className="contact-input-form-container" onSubmit={onSubmitHandler}>
        <h2 className="form-header-container">Contact</h2>
        {inputFormArray.map((input, index) => (
          <Input
            key={input.userInfoKey}
            input={input}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            focused={focused}
            setFocused={setFocused}
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
