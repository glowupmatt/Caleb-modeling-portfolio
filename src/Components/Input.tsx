import React from "react";
import { inputFormArrayType, userInfoType } from "./InputForm";
type userInfoProps = {
  userInfo: userInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
  input: inputFormArrayType;
};
const Input = ({ userInfo, setUserInfo, input }: userInfoProps) => {
  return (
    <>
      <label></label>
      <input
        name={input.userInfoKey}
        className={userInfo.name.length > 1 ? "input" : "required-input"}
        type={input.inputType}
        placeholder={input.placeHolder}
        required
        value={userInfo[input.userInfoKey]}
        onChange={(e) =>
          setUserInfo((prev) => {
            return {
              ...prev,
              [input.userInfoKey]: e.target.value,
            };
          })
        }
      ></input>
    </>
  );
};

export default Input;
