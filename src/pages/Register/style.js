import styled from "styled-components";

export const Button = styled.button`
  margin-top: 16px;
  color: #fff;
  background-color: #00c8b3;
  border-radius: 24px;
  border: none;
  width: 240px;
  height: 40px;
  :hover {
    opacity: 70%;
    color: #fff;
  }
  :disabled {
    color: #dddcdc;
    background-color: #f6f6f6;
  }
`;

export const Form = styled.form`
  margin-top: 45px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  div {
    width: 400px;
    height: 45px;
  }
`;

export const DivMargin = styled.div`
  margin: 8px 0px;
`;

export const ButtonList = styled.button`
  color: #00c8b3;
  background-color: #fff;
  border-radius: 24px;
  border: 1px solid #00c8b3;
  width: 150px;
  height: 40px;
  cursor: pointer;
  margin: 0 20%;
`;