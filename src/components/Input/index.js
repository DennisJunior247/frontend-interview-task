import React from "react";
import { InputStyle, Container } from "./styled";
import { HiddenVisibilityIcon, PasswordEyeIcon } from "../../Asset/svg";

const Index = (props) => {
  return (
    <Container>
      <InputStyle
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.icon ? (
        <button onClick={props.handleClick}>
          {props.showPassword ? (
            <PasswordEyeIcon color={"#778699"} width="20px" height="20px" />
          ) : (
            <HiddenVisibilityIcon
              color={"#778699"}
              width="20px"
              height="20px"
            />
          )}
        </button>
      ) : null}
    </Container>
  );
};

export default Index;
