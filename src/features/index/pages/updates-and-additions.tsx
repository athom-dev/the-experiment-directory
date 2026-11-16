import { Tooltip } from "@/components/ui/tooltip";
import { Heading, List, Text, Stack, Box } from "@chakra-ui/react";

interface Log {
  date: number;
  description: string;
  changes?: Array<string>;
  footer: string;
}

const months = [
  "January",
  "Frebuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Log({ data, version }: { data: Log; version: string }) {
  const currentDate = new Date(data.date);
  return (
    <Stack
      position="relative"
      borderBottom="1px solid"
      borderColor="border.subtle"
      pb={8}
      gap={0}
    >
      <Box bg="bg" py={4} position="sticky" top="0">
        <Heading mb={0} fontWeight={400} color="fg.muted" size="sm">
          Release v{version} —
          <Tooltip
            content={data.date}
            interactive
            positioning={{ placement: "top" }}
          >
            <Text ms="3px" display="inline">
              {currentDate.getDate()}th {months[currentDate.getMonth()]}{" "}
              {currentDate.getFullYear()}{" "}
            </Text>
          </Tooltip>
        </Heading>
        <Heading mt={0} size={"3xl"}>
          v{version} release
        </Heading>
      </Box>
      <Text mb={4} fontSize="sm">
        {data.description}
      </Text>
      {data.changes && (
        <List.Root gap={0.5} fontSize="sm" color="fg.muted" ps={5}>
          {data.changes.map((change) => (
            <List.Item>{change}</List.Item>
          ))}
        </List.Root>
      )}
      {data.footer && (
        <Text mt={4} fontSize="sm">
          {data.footer}
        </Text>
      )}
    </Stack>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <Heading>Updates & Additions</Heading>
      <Stack gap={8}>
        {Object.entries(logs).map(([version, data]) => (
          <Log version={version} data={data} />
        ))}
      </Stack>
    </>
  );
}

const logs: Record<string, Log> = {
  "0.1.0": {
    date: 1794728316713,
    description:
      "The directory has just been updated to a better visual and code optimization! Check below what's new:",
    changes: [
      "New pattern & value to the version counter.",
      "New layout for proper user experience and design.",
      'New individual route for changelog "Changes & Additions".',
      'Added a "Website Safety" disclaimer in the "Welcome" page.',
      "Modified all routes for better usage & infrastructure.",
      "Archived certain solvers for code review & optimization.",
    ],
    footer:
      'This is a BETA (early access) version of the website developed and published to display the concept of it and allow visitors "get a taste" about what\'s coming next.',
  },
};
