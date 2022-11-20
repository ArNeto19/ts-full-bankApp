import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const Header = () => {
  const { isUserLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Flex maxH="25vh" align="center" justify="center">
      <Box p="5">
        <Heading fontSize="4xl" color="white">
          BankApp
        </Heading>
        {isUserLogged && (
          <Box p="10">
            <Button
              onClick={() => {
                logout();
                navigate("/");
              }}>
              Sair
            </Button>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
