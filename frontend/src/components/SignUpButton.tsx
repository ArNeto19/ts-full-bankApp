import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUpButton = (props: any) => {
  const navigate = useNavigate();

  const handleClick = (username: string, password: string) => {
    axios
      .post("http://localhost:8080/register", { username: username, password: password })
      .then((res) => {
        navigate("/login");
      })
  };

  return (
    <Stack spacing={10} pt={2}>
      <Button
        onClick={() => handleClick(props.username, props.password)}
        loadingText="Submitting"
        size="lg"
        bg="purple.500"
        color="white"
        _hover={{
          bg: "green.500",
        }}>
        Sign up
      </Button>
    </Stack> 
  );
};
