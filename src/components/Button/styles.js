import styled from "styled-components";

export const BtnContainer = styled.button`
  width: 100%;
  background-color: ${({ bgColor }) => (bgColor ? "#D0D0D0" : "#E5E5E5")};
  color: ${({ color }) => (color ? "#505050" : "#ffff")};
  border-radius: 8px;
  padding: 12px;
  outline: none;
  border: none;
  font-size: 13px;
  letter-spacing: 0.5px;
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  > main {
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
    width: 30%;
  }
`;
