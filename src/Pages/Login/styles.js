import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  /* background-color: red; */
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-template-rows: auto;
`;

export const Container2 = styled.main`
  /* background-color: blue; */
  border: 2px solid green;
  /* width: 40%; */
`;
export const LogoContainer = styled.menu`
  /* border: 2px solid red; */
  padding: 2em;
`;

export const Form = styled.div`
  /* border: 1px solid red; */
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
  /* border: 1px solid black; */
  span {
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
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
export const BgImgContainer = styled.div`
  border: 2px solid blue;
  /* width: 60%; */
`;
