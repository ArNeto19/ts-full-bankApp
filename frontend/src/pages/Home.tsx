import { Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";

const Home = () => {
  const { isUserLogged, userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLogged && userData?.username) {
      navigate(`/conta/${userData.username}`);
    } else {
      navigate("/signup");
    }
  }, [navigate, isUserLogged, userData]);

  return (
    <Flex minH="100vh" align="center" textAlign="center" justify="center">
      <Spinner size="xl" color="white" />
    </Flex>
  );
};

export default Home;
