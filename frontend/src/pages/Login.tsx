import React from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { Form } from "../components/Form";

export const Login = () => {
  return (
    <Flex minH="60vh" align="center" justify="center">
      <Stack spacing="8" mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="3xl" color="white" textAlign="center">
            Login
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg="white" boxShadow="lg" p={8}>
          <Stack spacing={4}>
            <Form method="login"/>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
