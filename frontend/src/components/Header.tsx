import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const Header = () => {
  const { clearToken, isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();  

  const logout = () => {
    clearToken();
    setIsUserLoggedIn(false)
    navigate("/login");
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
