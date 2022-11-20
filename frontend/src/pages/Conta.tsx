import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { AuthContext } from "../context/auth";

export const Conta = () => {
  const { isUserLogged, userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLogged) {
      navigate("/signup");
    }
  }, [isUserLogged, navigate] );

  return (
    <Flex minH="50vh" align="center" textAlign="center" justify="center">
      <SimpleGrid columns={1} spacing={8} paddingTop={16}>
        <>
          <CardInfo
            mainContent={`Bem vindx @${userData?.username}`}
            content={`Saldo: R$${userData?.accountId.balance}`}
          />
          <CardInfo mainContent="Transações" content="" />
        </>
      </SimpleGrid>
    </Flex>
  );
};
