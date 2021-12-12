import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #d0d0d0;
  display: flex;
  padding: 10px 2px;
  background-color: #ffffff;
  /* margin: 200px; */
  border-radius: 4px;
  > button {
    outline: none;
    border: none;
    color: transparent;
    width: 20%;
    background-color: transparent;
  }
`;

export const InputStyle = styled.input`
  text-align: start;
  border: none;
  outline: none;
  width: 80%;
  height: 100%;
  color: #8a8a8a;
  font-size: 16px;
  padding: 3px;
  &::placeholder {
    color: #8a8a8a;
  }
`;
