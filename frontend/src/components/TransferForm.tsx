import { Card } from "./Card";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";

export const TransferForm = () => {
  return (
    <>
      <Card>
        <FormControl>
          <FormLabel mt={"15px"}>Tranferir para:</FormLabel>
          <InputGroup>
            <InputLeftElement children="@" />
            <Input placeholder="username" />
          </InputGroup>
          <FormLabel mt={"15px"}>Valor</FormLabel>
          <NumberInput min={1} name="value" placeholder="0.00">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            mt={"15px"}
            onClick={() => {}}
            size="md"
            bg="purple.500"
            color="white"
            _hover={{
              bg: "green.500",
            }}>
            Tranfer
          </Button>
        </FormControl>
      </Card>
    </>
  );
};
