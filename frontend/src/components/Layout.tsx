import { Box, Center } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props: any) => {
  return (
    <>
      <Box minH="100vh" backgroundColor="gray.800" padding="25px">
        <Header />
        {props.children}
        <Center color="white" mt="10">
          <Footer />
        </Center>
      </Box>
    </>
  );
};
