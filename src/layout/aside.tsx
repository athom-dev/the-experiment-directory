import {
  AbsoluteCenter,
  Image,
  Box,
  ScrollArea,
  Stack,
} from "@chakra-ui/react";
import Navigation from "./navigation";

export default function Aside() {
  return (
    <Stack
      display={{ base: "none", lg: "flex" }}
      h="100%"
      minW="332px"
      maxW="332px"
      bg="bg.muted"
      as="aside"
    >
      <Box
        overflow="hidden"
        position="relative"
        w="100%"
        aspectRatio="16/9"
        bg="gray.emphasized"
      >
        <Box
          position="absolute"
          height="400%"
          bgImage="linear-gradient(transparent, var(--chakra-colors-bg-muted))"
          width="100%"
          bottom="0"
        ></Box>
        <AbsoluteCenter>
          <Image src={`${import.meta.env.BASE_URL}/logo.svg`} h="60px"></Image>
        </AbsoluteCenter>
      </Box>
      <ScrollArea.Root h="100%">
        <ScrollArea.Viewport>
          <ScrollArea.Content p={4}>
            <Navigation />
          </ScrollArea.Content>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </Stack>
  );
}
