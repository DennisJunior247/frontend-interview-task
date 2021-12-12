import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button/";
import logo from "../../Asset/images/Travling.jpg";
import { GoogleIcon, FacebookIcon } from "../../Asset/svg";
import {
  Container,
  LogoContainer,
  Container2,
  BgImgContainer,
  Form,
  FormContainer,
  Span,
  Container3,
  BtnContainer,
} from "./styles";

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
              <Input placeholder={"Nomor Ponsel atau Email"} name="Name" />
              <Input
                handleClick={handleClick}
                placeholder={"Kata Sandi"}
                showPassword={showPassword}
                icon
                name={"password"}
                type={showPassword ? "text" : "password"}
              />
              <Button bgColor text={"MUSK"} />
            </form>
            <Span>
              <p>
                Lupa kata sandi? <a href={"#login"}> Klik disini</a>
              </p>
            </Span>
            <Container3>
              <p>atau masuk dengan</p>
            </Container3>
            <BtnContainer>
              <Button color icon={<GoogleIcon />} text={"Google"} />
              <Button color icon={<FacebookIcon />} text={"Facebook"} />
            </BtnContainer>
          </FormContainer>
        </Form>
      </Container2>
      <BgImgContainer></BgImgContainer>
    </Container>
  );
};

export default Index;
