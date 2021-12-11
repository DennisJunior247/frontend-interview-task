import React from "react";
import { InputStyle, Container } from "./styled";
import { HiddenVisibilityIcon, PasswordEyeIcon } from "../../Asset/svg";

const Index = (props) => {
  return (
    <Container>
      <input type={props.type} {...props} />
      {props.icon ? (
        <button type={props.type || "button"} onClick={props.handelclick}>
          {props.showPassword ? (
            <PasswordEyeIcon color={"#D0D0D0"} width="20px" height="20px" />
          ) : (
            <HiddenVisibilityIcon
              color={"#D0D0D0"}
              width="10px"
              height="10px"
            />
          )}
        </button>
      ) : null}
    </Container>
  );
};

export default Index;
