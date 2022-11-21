import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { TransferForm } from "../components/TransferForm";
import { AuthContext } from "../context/auth";

export const Conta = () => {
  const { userData, isUserLoggedIn } = useContext(AuthContext);
  const currencyBalance = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(userData?.accountId.balance);
  const navigate = useNavigate();

  !isUserLoggedIn && navigate("/");

  return (
    <Flex minH="50vh" align="center" textAlign="center" justify="center">
      <SimpleGrid columns={1} spacing={8} paddingTop={16}>
        <>
          <CardInfo
            mainContent={`Bem vindx @${userData?.username}`}
            content={currencyBalance}
          />
          <TransferForm />
        </>
      </SimpleGrid>
    </Flex>
  );
};
