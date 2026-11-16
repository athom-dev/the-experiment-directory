import { HStack, ScrollArea, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Aside from "./aside";
import MobileNav from "./mobile-nav";

export default function AppLayout() {
  return (
    <Stack gap={0} h="100%">
      <MobileNav />
      <HStack gap={0} h="100%">
        <Aside />
        <Stack flexGrow={1} h="100%" p={0}>
          <ScrollArea.Root p={0}>
            <ScrollArea.Scrollbar zIndex={1} w={1}>
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Viewport>
              <ScrollArea.Content>
                <Stack gap={0}>
                  <Outlet />
                </Stack>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Corner />
          </ScrollArea.Root>
        </Stack>
      </HStack>
    </Stack>
  );
}
