import { Box } from "@chakra-ui/react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box as="main" w="100%" py={8} h="100%">
      {children}
    </Box>
  );
}
