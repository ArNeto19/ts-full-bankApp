import { Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";

const Home = () => {
  const { authenticate, userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authenticate().then((loggedIn) => {
      if (!loggedIn) {
        navigate("/signup");
        return;
      }
      navigate("/conta");
    });
  }, [authenticate, userData, navigate]);

  return (
    <Flex minH="100vh" align="center" textAlign="center" justify="center">
      <Spinner size="xl" color="white" />
    </Flex>
  );
};

export default Home;
