import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
