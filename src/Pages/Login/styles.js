import styled from "styled-components";
import bg from "../../Asset/images/maskimage.png";
export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Container2 = styled.main`
  border: 2px solid blue;
  padding: 2em;
`;
export const LogoContainer = styled.menu``;

export const Form = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.section`
  align-items: center;
  flex-direction: column;
  width: 350px;
  span {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-self: center;
    margin-bottom: 20px;
    h3 {
      color: #515151;
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 0.5px;
    }
    h5 {
      letter-spacing: 0.5px;
      color: #0098ea;
      font-weight: normal;
      font-weight: 1em;
    }
  }

  form {
    div {
      margin-bottom: 45px;
    }
  }
`;
export const Span = styled.span`
  margin-top: 20px;
  width: 100%;
  p {
    font-style: normal;
    font-weight: normal;
    color: #515151;
  }
  a {
    text-decoration: none;
    font-size: 13px;
    color: #0098ea;
  }
`;
export const Container3 = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d0d0d0;
  &::before,
  ::after {
    content: "";
    width: 96px;
    border: 1px solid #d0d0d0;
  }
  &::before {
    margin-right: 10px;
  }
  &::after {
    margin-left: 10px;
  }
`;

export const BtnContainer = styled.div`
  button {
    margin-top: 30px;
  }
`;

export const CopyRightContainer = styled.div`
  position: relative;
  top: 150px;
  @media (max-width: 800px) {
    top: 50px;
  }
`;
export const BgImgContainer = styled.div`
  background-color: #42a7c3;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgCont {
    width: 70%;
    height: 90%;
    border: 1px solid red;
    border-radius: 16px;
    background: rgba(183, 233, 246, 0.25);
    backdrop-filter: blur(26px);
    h2{
      
    }
    /* img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    } */
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
