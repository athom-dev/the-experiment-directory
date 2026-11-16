import Main from "@/components/Main";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function SolversLayout() {
  return (
    <Main>
      <Container maxW="4xl">
        <Outlet />
      </Container>
    </Main>
  );
}
