import React from "react";
import { InputStyle } from "./styles";
import { HiddenVisibilityIcon, PasswordEyeIcon } from "../../Asset/svg";

const Index = (props) => {
  return (
    <div>
      <InputStyle type={props.type} {...props} />
      <button type={props.type || "button"} onClick={props.handelclick}>
        {props.showPassword ? <PasswordEyeIcon /> : <HiddenVisibilityIcon />}
      </button>
    </div>
  );
};

export default Index;
