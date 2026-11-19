import {
  Box,
  Stack,
  Heading,
  Text,
  Grid,
  GridItem,
  AbsoluteCenter,
  Editable,
  Clipboard,
  Icon,
  InputGroup,
  Input,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useMemo } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface SolverGridItemInterface {
  id: string;
  defaultValue?: string;
  isInput: boolean;
  onValueChange?: (e: { value: string }) => void;
  children?: React.ReactNode;
}

export default function UnknownSignal() {
  const [topLeftInputValue, setTopLeftInputValue] = useState("11");
  const [topRightInputValue, setTopRightInputValue] = useState("3");
  const [bottomLeftInputValue, setBottomLeftInputValue] = useState("12");
  const [bottomRightInputValue, setBottomRightInputValue] = useState("4");
  const [veryTopInputValue, setVeryTopInputValue] = useState("-5");
  const [middleInputValue, setMiddleInputValue] = useState("30");

  const [resultNumberSequence, resultLetter] = useMemo(() => {
    const result = solve(
      parseInt(topLeftInputValue),
      parseInt(topRightInputValue),
      parseInt(bottomLeftInputValue),
      parseInt(bottomRightInputValue),
      parseInt(veryTopInputValue),
      parseInt(middleInputValue),
    );
    return [result[0], alphabet[parseInt(result[1])]];
  }, [
    topLeftInputValue,
    topRightInputValue,
    bottomLeftInputValue,
    bottomRightInputValue,
    veryTopInputValue,
    middleInputValue,
    alphabet,
  ]);

  return (
    <HStack wrap={{ base: "wrap", md: "nowrap" }} gap={8}>
      <Stack mx={{ base: "0", md: "auto" }} gap={4}>
        <Stack flexShrink={0} w="300px">
          <Heading mb={1}>Unknow signal</Heading>
          <Box w="100%" maxW="300px">
            <Grid
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(1, 1fr)"
              w="100%"
              height="3em"
              position="relative"
            >
              <SolverGridItem id="arrow-left" isInput={false}>
                <AbsoluteCenter left="75%" top="80%">
                  <Icon fontSize="xl" rotate="150deg">
                    <FaArrowLeftLong />
                  </Icon>
                </AbsoluteCenter>
              </SolverGridItem>
              <SolverGridItem
                isInput={true}
                id="very-top"
                defaultValue={veryTopInputValue}
                onValueChange={(e) => setVeryTopInputValue(e.value)}
              ></SolverGridItem>
              <SolverGridItem id="arrow-right" isInput={false}>
                <AbsoluteCenter left="25%" top="80%">
                  <Icon fontSize="xl" rotate="30deg">
                    <FaArrowLeftLong />
                  </Icon>
                </AbsoluteCenter>
              </SolverGridItem>
            </Grid>
            <Grid
              mx="auto"
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(3, 1fr)"
              w="100%"
              aspectRatio="1/1"
              gap="2px"
              fontSize="3xl"
              bg="gray"
              fontFamily="monospace"
            >
              <SolverGridItem
                id="top-left"
                isInput={true}
                defaultValue={topLeftInputValue}
                onValueChange={(e) => {
                  setTopLeftInputValue(e.value);
                }}
              ></SolverGridItem>
              <SolverGridItem isInput={false} id="top">
                )-(
              </SolverGridItem>
              <SolverGridItem
                id="top-right"
                isInput={true}
                defaultValue={topRightInputValue}
                onValueChange={(e) => {
                  setTopRightInputValue(e.value);
                }}
              ></SolverGridItem>
              <SolverGridItem isInput={false} id="left">
                <Box
                  fontSize="xl"
                  display="flex"
                  position="absolute"
                  left="0"
                  h="100%"
                >
                  <Icon my="auto" rotate="90deg">
                    <FaArrowLeftLong />
                  </Icon>
                </Box>
              </SolverGridItem>
              <SolverGridItem
                isInput={true}
                id="middle"
                defaultValue={middleInputValue}
                onValueChange={(e) => {
                  setMiddleInputValue(e.value);
                }}
              >
                <Text
                  fontSize="xs"
                  position="absolute"
                  top="0"
                  textAlign="center"
                  w="100%"
                >
                  1
                </Text>
                <Text
                  fontSize="xs"
                  position="absolute"
                  bottom="0"
                  textAlign="center"
                  w="100%"
                >
                  3
                </Text>
                <AbsoluteCenter pointerEvents="none">
                  ( <Text color="transparent">00</Text> )
                </AbsoluteCenter>
              </SolverGridItem>
              <SolverGridItem id="right" isInput={false}>
                <Box
                  fontSize="xl"
                  display="flex"
                  position="absolute"
                  right="0"
                  h="100%"
                >
                  <Icon my="auto" rotate="270deg">
                    <FaArrowLeftLong />
                  </Icon>
                </Box>
              </SolverGridItem>
              <SolverGridItem
                isInput={true}
                id="bottom-left"
                defaultValue={bottomLeftInputValue}
                onValueChange={(e) => {
                  setBottomLeftInputValue(e.value);
                }}
              ></SolverGridItem>
              <SolverGridItem id="bottom" isInput={false}></SolverGridItem>
              <SolverGridItem
                isInput={true}
                id="bottom-right"
                defaultValue={bottomRightInputValue}
                onValueChange={(e) => {
                  setBottomRightInputValue(e.value);
                }}
              ></SolverGridItem>
            </Grid>
          </Box>
        </Stack>

        <Stack>
          <Heading>Result</Heading>
          <Text>
            <Clipboard.Root
              maxW="300px"
              value={`${resultLetter ?? "#"}-${resultNumberSequence}`}
            >
              <InputGroup endElement={<ClipboardIconButton />}>
                <Clipboard.Input asChild>
                  <Input size="lg" />
                </Clipboard.Input>
              </InputGroup>
            </Clipboard.Root>
          </Text>
        </Stack>
      </Stack>

      <Stack gap={4} maxW="332px" h="100%" mb="auto">
        <Heading mb={1}>Purpose & Instructions</Heading>
        <Text fontSize="sm">
          This tool was designed for the puzzle located at Service Shaft (event
          No. 368), in the same room as Battery E. It can be easily recognized
          considering its similiarity to this interface.
        </Text>
        <Text fontSize="sm">
          Its usage is simple: type the same numbers you see in-game at the
          tool. Make sure both are equal, then you can copy what's written below
          the "Result" heading and obtain a signal at The Terminal (event No.
          370), or you can also use the same number sequence to unlock Room A at
          the deep end corridor of Maintenance Tunnels (event No. 357). There
          are no other usages for this tool.
        </Text>
      </Stack>
    </HStack>
  );
}
function solve(
  TL: number,
  TR: number,
  BL: number,
  BR: number,
  VT: number,
  M: number,
) {
  const x1 = TL - TR + VT;
  const x2 = Math.abs(x1 - TR);
  const x3 = Math.abs(x2 - BR);
  const x4 = Math.abs(x3 - BL);
  const numberSequence =
    x1.toString() + x2.toString() + x3.toString() + x4.toString();
  const letter = M - (x1 + x2 + x3 + x4);
  return [numberSequence, letter.toString()];
}
const ClipboardIconButton = () => {
  return (
    <Clipboard.Trigger asChild>
      <IconButton variant="surface" size="xs" me="-2">
        <Clipboard.Indicator />
      </IconButton>
    </Clipboard.Trigger>
  );
};
function SolverGridItem({
  id,
  defaultValue,
  isInput,
  onValueChange,
  children,
}: SolverGridItemInterface) {
  return (
    <GridItem id={id} position="relative" bg="bg">
      <AbsoluteCenter
        pointerEvents={(!defaultValue && "none") || ""}
        h="100%"
        w="100%"
      >
        {isInput && (
          <Editable.Root
            h="100%"
            w="100%"
            defaultValue={defaultValue}
            value={defaultValue}
            onValueChange={(e) => {
              onValueChange?.(e.value ? e : { value: "0" });
            }}
            size="lg"
            fontSize="3xl"
          >
            <Editable.Preview h="100%" w="100%" justifyContent={"center"} />
            <Editable.Input
              rounded="0"
              outline="0"
              h="100%"
              w="100%"
              textAlign="center"
            />
          </Editable.Root>
        )}
        {children}
      </AbsoluteCenter>
    </GridItem>
  );
}
