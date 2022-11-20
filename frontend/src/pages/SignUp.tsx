import React from "react";
import { Box, Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import { Form } from "../components/Form";

export const SignUp = () => {
  return (
    <Flex minH="60vh" align="center" justify="center">
      <Stack spacing="8" mx="auto" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="3xl" color="white" textAlign="center">
            Sign Up
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg="white" boxShadow="lg" p={8}>
          <Stack spacing={6}>
            <Form method="signup" />
            <Stack pt={2}>
              <Text align="center">
                Already a user?{" "}
                <Link color="blue.400" href="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
