import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { LoginButton } from "./LoginButton";
import { SignUpButton } from "./SignUpButton";

export const Form = (props: any) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);

  const handleChange = (event: any) => {
    if (event.target.name === "username") {
      return setUserName(event.target.value);
    }
    if (event.target.name === "password") {
      return setPassword(event.target.value);
    }
  };

  const validateUsername = (): void => {
    if (username.length < 3) {
      setInvalidUsername(true);
    } else {
      setInvalidUsername(false);
    }
  };

  const validatePassword = () => {
    const regExp = /^(?=.*[A-Z])(?=.*[0-9])/;
    const valid = regExp.test(password);

    if (password.length < 8 || !valid) {
      setInvalidPass(true);
    } else {
      setInvalidPass(false);
    }
  };

  const showButton = (e: string) => {
    if (e === "login") {
      return <LoginButton username={username} password={password} />;
    } else if (e === "signup") {
      return <SignUpButton username={username} password={password} />;
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
          onKeyUp={validateUsername}
          value={username}
          isInvalid={invalidUsername}
          errorBorderColor="crimson"
          variant="filled"
        />
      </InputGroup>
      
      {invalidUsername &&  (
        <p style={{ color: "#ff0000", fontWeight: 500, fontSize: "0.7rem" }}>
          Username must have 3 characters
        </p>
      )}
      <InputGroup>
        <Input
          name="password"
          placeholder="password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          onKeyUp={validatePassword}
          value={password}
          isInvalid={invalidPass}
          errorBorderColor="crimson"
          variant="filled"
        />
        <InputRightElement h="full">
          <Button variant="ghost" onClick={() => setShowPassword((showPassword) => !showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {invalidPass && (
        <p style={{ color: "#ff0000", fontWeight: 500, fontSize: "0.7rem" }}>
          Password must have 8 characters, including a capital letter and a number.
        </p>
      )}

      {showButton(props.method)}
    </>
  );
};
