import {
  AbsoluteCenter,
  Box,
  Heading,
  HStack,
  RadioCard,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TrialsLockdownKeys() {
  const [number, setNumber] = useState("1");
  const [letterSequence, setLetterSequence] = useState("KL");

  const [colorSequenceState, setColorSequenceState] = useState("AAAAA");

  useEffect(() => {
    setColorSequenceState(
      parseColorSequence(number + letterSequence).toString(),
    );
  }, [number, letterSequence]);

  return (
    <>
      <Stack gap={4}>
        <Heading>Trials: Lockdown Keys</Heading>
        <RadioCard.Root
          onValueChange={(e) => {
            e.value && setNumber(e.value);
          }}
          defaultValue={"1"}
          display="flex"
        >
          <RadioCard.Label>Select Number</RadioCard.Label>
          <HStack wrap="wrap">
            {numberVariations.split("").map((e) => {
              return (
                <RadioCard.Item key={e} value={e}>
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl>
                    <RadioCard.ItemText>{e}</RadioCard.ItemText>
                    <RadioCard.ItemIndicator />
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              );
            })}
          </HStack>
        </RadioCard.Root>
        <RadioCard.Root
          onValueChange={(e) => {
            e.value && setLetterSequence(e.value);
          }}
          defaultValue="KL"
          display="flex"
        >
          <RadioCard.Label>Select Letter</RadioCard.Label>
          <HStack wrap="wrap">
            {letterSequenceVariations.map((e) => {
              return (
                <RadioCard.Item key={e} value={e}>
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl>
                    <RadioCard.ItemText>{e}</RadioCard.ItemText>
                    <RadioCard.ItemIndicator />
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              );
            })}
          </HStack>
        </RadioCard.Root>

        <Stack>
          <Heading size="sm">Result</Heading>
          <HStack mb={4}>
            {colorSequenceState.split("").map((e) => {
              const color = colors[e];

              if (!color)
                return (
                  <ColorBox
                    title="Null"
                    id="0"
                    bg="transparent"
                    color="white"
                  />
                );

              return (
                <ColorBox
                  title={color.title}
                  id={e}
                  bg={color.hex}
                  color="black"
                />
              );
            })}
          </HStack>
        </Stack>
      </Stack>

      <Stack mt={2}>
        <Heading>Purpose & Usage</Heading>
        <Text fontSize="sm">
          This tool was designed for Event No. 76, lockdown (first) variation,
          specifically for the left panel of the room.
        </Text>
        <Text fontSize="sm">
          Its usage is simple: scan the left panel. You must find the 3
          character key (a number besides two letters). Then, using the website
          tool, select the number and the letter sequence on the key. This will
          return you the correct color sequence for the left panel's puzzle.
          There are no other usages for this tool.
        </Text>
      </Stack>
    </>
  );
}

const colorSequences: Record<string, string> = {
  "1KL": "22153",
  "1KS": "11432",
  "1PS": "11142",
  "1ST": "15422",
  "1TS": "53214",
  "1YT": "42315",

  "2KL": "43551",
  "2KS": "22222",
  "2PS": "23255",
  "2ST": "23451",
  "2TS": "11312",
  "2YT": "31335",

  "3KL": "44431",
  "3KS": "42331",
  "3PS": "55123",
  "3ST": "55222",
  "3TS": "45344",
  "3YT": "42551",

  "4KL": "35212",
  "4KS": "32231",
  "4PS": "12345",
  "4ST": "32123",
  "4TS": "23412",
  "4YT": "11411",

  "5KL": "43551",
  "5KS": "42431",
  "5PS": "54321",
  "5ST": "44522",
  "5TS": "42221",
  "5YT": "21234",
};

function ColorBox({
  title,
  id,
  bg,
  color,
}: {
  title: string;
  id: string;
  bg: string;
  color: string;
}) {
  return (
    <Box rounded="lg" position="relative" bg={bg} aspectRatio={"1/1"} w="100%">
      <Text
        opacity={0.25}
        textAlign="center"
        w="100%"
        fontSize="xs"
        position="absolute"
        top="100%"
        pt="0"
      >
        {title}
      </Text>
      <AbsoluteCenter color={color} opacity=".5" fontSize="3xl">
        {id}
      </AbsoluteCenter>
      <Box
        rounded="lg"
        position={"absolute"}
        w="100%"
        h="100%"
        border={`2px solid ${color}`}
        opacity=".25"
      ></Box>
    </Box>
  );
}

const numberVariations = "12345";
const letterSequenceVariations = ["KL", "KS", "PS", "ST", "TS", "YT"];

const colors: Record<string, any> = {
  "1": { title: "Cyan", hex: "#27dfdf" },
  "2": { title: "Orange", hex: "#f97b50" },
  "3": { title: "Pink", hex: "#f52aac" },
  "4": { title: "Green", hex: "#478043" },
  "5": { title: "White", hex: "#baa6a5" },
};

function parseColorSequence(key: string): string {
  return colorSequences[key] || "";
}
