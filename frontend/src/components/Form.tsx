import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { LoginButton } from "./LoginButton";
import { SignUpButton } from "./SignUpButton";

export const Form = (props: any) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: any): void => {
    if (event.target.name === "username") {
      setUserName(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const showButton = (e: string) => {
    if (e === "login") {
      return <LoginButton username={userName} password={password} />;
    } else if (e === "signup") {
      return <SignUpButton username={userName} password={password} />;
    }
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement children="@" />
        <Input
          name="username"
          placeholder="username"
          type="username"
          onChange={handleChange}
          value={userName}
          variant="filled"
          minLength={3}
        />
      </InputGroup>
      <InputGroup>
        <Input
          name="password"
          placeholder="password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          value={password}
          variant="filled"
          minLength={8}
        />
        <InputRightElement h="full">
          <Button variant="ghost" onClick={() => setShowPassword((showPassword) => !showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {showButton(props.method)}
    </>
  );
};
