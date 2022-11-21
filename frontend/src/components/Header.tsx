import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const Header = () => {
  const { authenticate, clearToken } = useContext(AuthContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | undefined>(false);
  const navigate = useNavigate();

  useEffect(() => {
    authenticate().then((isLoggedIn) => setIsUserLoggedIn(isLoggedIn));
  }, [authenticate]);

  const logout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <Flex maxH="25vh" align="center" justify="center">
      <Box p="5">
        <Heading fontSize="4xl" color="white">
          BankApp
        </Heading>
        {isUserLoggedIn && (
          <Box p="10">
            <Button
              onClick={logout}
              size="sm"
              bg="purple.500"
              color="white"
              _hover={{
                bg: "red.400",
              }}>
              Sair
            </Button>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
