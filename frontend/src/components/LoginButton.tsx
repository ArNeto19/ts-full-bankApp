import { Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginButton = (props: any) => {
  const navigate = useNavigate();

  const handleClick = (username: string, password: string) => {
    axios
      .post("http://localhost:8080/authenticate", { username: username, password: password })
      .then( async (res) => {
        await res.data
        
        if (res.data.error) {
          alert(res.data.error);
        } else {          
          localStorage.setItem("token", `Bearer ${res.data.token}`);
          navigate("/");
        }
        
      });
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
      Login
    </Button>
  </Stack> 
  );
};
