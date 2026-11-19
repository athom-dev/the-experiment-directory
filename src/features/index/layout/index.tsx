import Main from "@/components/Main";
import { AbsoluteCenter, Box, Container, Image } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function IndexLayout() {
  return (
    <>
      <Box
        w="100%"
        bgImage={`url(${import.meta.env.BASE_URL}/home-banner.png)`}
        bgSize="cover"
        flexShrink={0}
        bgPos="center"
        height="40vh"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          bottom="0"
          height="400%"
          width="100%"
          bgImage="linear-gradient(transparent, var(--chakra-colors-bg))"
        ></Box>
        <AbsoluteCenter w="100%" h="100%">
          <Image src={`${import.meta.env.BASE_URL}/logo.svg`} h="70px"></Image>
        </AbsoluteCenter>
      </Box>
      <Main>
        <Container maxW="4xl">
          <Outlet />
        </Container>
      </Main>
    </>
  );
}
