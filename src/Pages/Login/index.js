import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button/";
import { GoogleIcon } from "../../Asset/svg";
import {
  Container,
  LogoContainer,
  Container2,
  BgImgContainer,
  Form,
  FormContainer,
} from "./styles";
import logo from "../../Asset/images/Travling.jpg";
const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);
  console.log(showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Container2>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
        <Form>

        <FormContainer>
          <span className="formTitle">
            <h3>Masuk</h3>
            <h5>Daftar</h5>
          </span>
          <form onSubmit={handleSubmit}>
            <Input placeholder={"Name"} name="Name" />
            <Input
              handleClick={handleClick}
              placeholder={"Password"}
              showPassword={showPassword}
              icon
              name={"password"}
              type={showPassword ? "text" : "password"}
            />
            <Button  bgColor text={"MUSK"} />
          </form>
        </FormContainer>
        </Form>
        <Span></Span>
      </Container2>
      <BgImgContainer></BgImgContainer>
    </Container>
  );
};

export default Index;
