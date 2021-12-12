import React from "react";
import { BtnContainer } from "./styles";

const Index = (props) => {
  return (
    <BtnContainer color={props.color} icon={props.icon} bgColor={props.bgColor}>
      <main>
        {props.icon ? props.icon : null}
        {props.text}
      </main>
    </BtnContainer>
  );
};

export default Index;
