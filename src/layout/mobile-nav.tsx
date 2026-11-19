import {
  Box,
  CloseButton,
  Drawer,
  Heading,
  HStack,
  IconButton,
  Portal,
} from "@chakra-ui/react";

import Navigation from "./navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <Drawer.Root
      onOpenChange={(e) => setIsOpen(e.open)}
      open={isOpen}
      placement="bottom"
    >
      <Drawer.Backdrop />
      <Box
        display={{ base: "block", lg: "none" }}
        bg="bg.muted"
        borderBottom="1px solid"
        borderColor="border"
        as="nav"
      >
        <HStack>
          <Drawer.Trigger asChild>
            <IconButton size="2xl" variant="subtle" rounded="0">
              <Menu />
            </IconButton>
          </Drawer.Trigger>
        </HStack>
      </Box>
      <Portal>
        <Drawer.Positioner px={4}>
          <Drawer.Content
            maxW="md"
            mx="auto"
            bg="bg.muted"
            borderColor="transparent"
            roundedTop="xl"
          >
            <Drawer.Header py={5}>
              <Heading size="sm" mx="auto">
                The Experiment Directory
              </Heading>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body pb={4}>
              <Navigation />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
