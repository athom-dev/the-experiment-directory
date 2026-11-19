import { Text, Heading, Stack } from "@chakra-ui/react";
import SolversSearch from "../components/SolversSearch";

export default function HomePage() {
  return (
    <>
      <Stack gap={8}>
        <SolversSearch />
        <Stack>
          <Heading>Greetings, player!</Heading>
          <Text color="fg.muted" fontSize="sm">
            Welcome to The Experiment Directory! Created to elevate your
            gameplay, this website was designed with a clear purpose: to provide
            high-quality, efficient solvers for The Experiment, bringing all
            your essential puzzle solutions together in one centralized hub.
          </Text>
          <Text color="fg.muted" fontSize="sm">
            While other solvers exist for the game, the tools featured here are
            specifically made to offer a superior user experience, featuring
            intuitive interfaces that closely mirror the visual style and
            mechanics you encounter in-game. Whether you are racing against time
            or tackling tricky challenges, you will find a smooth, immersive,
            and reliable toolset ready to assist you every step of the way.
          </Text>
        </Stack>

        <Stack>
          <Heading>Website Safety</Heading>
          <Text color="fg.muted" fontSize="sm">
            Developed with modern web technologies including React JS powered by
            Vite for optimized performance and a responsive user interface
            styled with Chakra UI, this website ensures a seamless and reliable
            browsing experience. The application is securely hosted on GitHub
            Pages, benefiting from GitHub's robust infrastructure and built-in
            security protocols.
          </Text>

          <Text color="fg.muted" fontSize="sm">
            Regarding privacy and safety, the site does not natively collect,
            store, or process any user data, operating entirely on the client
            side without tracking or telemetry mechanisms. Furthermore, it is
            completely safe for daily use: it does not access, download, or
            ingest any malicious files, scripts, or unwanted software onto your
            device, ensuring a transparent, secure, and private environment for
            all visitors.
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
