import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width: 1387px) {
    grid-template-columns: 1fr;
  }
`;

export const Container2 = styled.main`
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
  /* background-color: #42a7c3;
   */
  background: linear-gradient(315deg, #42a7c3 0%, #8adbf0 75.03%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  .imgCont {
    width: 80%;
    height: 80%;
    border: 2px solid #e2f6fc40;
    border-radius: 16px;
    background: rgba(183, 233, 246, 0.25);
    backdrop-filter: blur(26px);

    h1 {
      color: #ffffff;
      position: absolute;
      padding: 40px;
      font-size: 50px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: 0.01em;
    }
    img {
      position: absolute;
      bottom: -4px;
      right: -5px;
      width: 70%;
      height: auto;
      max-width: 477px;
    }
  }

  @media (max-width: 1387px) {
    display: none;
  }
`;

export const Dot = styled.div`
  padding: 8px;
  border-radius: 50%;
  background: #f7f7f7;
  opacity: 0.6;
  border-radius: 16px;
  position: absolute;
  bottom: 20px;
  left: 70px;
  &::before,
  ::after {
    content: "";
    padding: 8px;
    position: absolute;
    opacity: 0.6;
    border-radius: 16px;
  }

  &::before {
    right: 30px;
    bottom: 1px;
    width: 30px;
    background-color: #ffffff;
  }
  &::after {
    left: 30px;
    top: 1px;
    background-color: #f7f7f7;
  }
`;
export const Bubble = styled.div`
  position: absolute;
  background-color: #fa8443;
  padding: 30px;
  border-radius: 50%;
  width: 40px;
  left: 200px;
  top: 200px;
  filter: blur(10px);
  opacity: 0.6;
`;
