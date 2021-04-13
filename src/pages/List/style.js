import styled from "styled-components";

export const ContainerUser = styled.div`
  font-family: Arial;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  padding: 16px;
  width: 30%;
  border-radius: 10px;
  border: 1px solid #00c8b3;
  color: rgba(0, 0, 0, 0.75);
  p {
    margin: 8px;
    font-size: 17px;
    letter-spacing: 0.5px;
    :last-child {
      margin-bottom: 16px;
    }
    b {
      font-weight: bold;
      color: #00c8b3;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ButtonForm = styled.button`
  color: #00c8b3;
  background-color: #fff;
  border-radius: 24px;
  border: 1px solid #00c8b3;
  width: 150px;
  height: 40px;
  cursor: pointer;
  margin: 0 20%;
`;
