import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, ContainerUser, ButtonForm } from "./style";

const List = () => {
  const history = useHistory();
  const getAllUser = useSelector((state) => state.user.payload);

  return (
    <>
      <Container>
        {getAllUser.map(({ name, email, cpf, phone }) => (
          <ContainerUser key={cpf}>
            <p><b>Nome:</b> {name}</p>
            <p><b>E-mail:</b> {email}</p>
            <p><b>Cpf:</b> {cpf}</p>
            <p><b>Telefone:</b> {phone}</p>
          </ContainerUser>
        ))}
      </Container>
      <ButtonForm type="button" onClick={() => history.push("/")}>Ir para Cadastro</ButtonForm>
    </>
  );
};

export default List;
