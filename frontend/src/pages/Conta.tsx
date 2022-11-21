import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { AuthContext } from "../context/auth";

export const Conta = () => {
  const { authenticate, userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authenticate().then((loggedIn) => {
      if (!loggedIn) {
        navigate('/signup');
        return
      }
    })
  }, [authenticate, navigate]);

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
