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
    margin-bottom: 30px;
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
      margin-bottom: 40px;
    }
  }
`;

export const BgImgContainer = styled.div`
  border: 2px solid blue;
  /* width: 60%; */
`;
