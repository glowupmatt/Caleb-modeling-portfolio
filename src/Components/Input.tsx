import React, { useState } from "react";
import { inputFormArrayType, userInfoType } from "./InputForm";
type userInfoProps = {
  userInfo: userInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
  input: inputFormArrayType;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
};
const Input = ({
  userInfo,
  setUserInfo,
  input,
  focused,
  setFocused,
}: userInfoProps) => {
  const handleFocus = () => {
    setFocused((prev) => !prev);
  };

  return (
    <>
      <input
        name={input.userInfoKey}
        className="input"
        type={input.inputType}
        placeholder={input.placeHolder}
        required
        value={userInfo[input.userInfoKey]}
        pattern={input.pattern}
        onBlur={handleFocus}
        onChange={(e) =>
          setUserInfo((prev) => {
            return {
              ...prev,
              [input.userInfoKey]: e.target.value,
            };
          })
        }
      ></input>
      <span className={focused ? "focused" : "not-focused"} />
    </>
  );
};

export default Input;
