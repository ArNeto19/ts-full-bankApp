import { Button, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const LoginButton = (props: any) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (username: string, password: string) => {
    login(username, password).then((res) => {
      if (res) {
        navigate("/");
      }
    });
  };

  return (
    <Stack spacing={10} pt={2}>
      <Button
        onClick={() => handleClick(props.username, props.password)}
        size="lg"
        bg="purple.500"
        color="white"
        _hover={{
          bg: "green.500",
        }}>
        Login
      </Button>
    </Stack>
  );
};
