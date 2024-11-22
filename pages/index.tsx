import {
  Box,
  Code,
  Heading,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import {
  sortIndex,
  countDoubleNumber,
  removeDup,
  flip,
  removeAsTotal,
  reset,
} from "./utils";
import { useState, ChangeEvent } from "react";

type Index = [number, number];

export default function App() {
  const [numberAsDup, displayNumber] = useState<string>(String());

  {/* array input */}
  const [index, displayIndex] = useState<Index[]>([
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2]
  ]);

  const barisPertama = index.map((pair, idx) => (
    <td key={idx}>
      <Box
        p="3"
        ml="3"
        boxShadow="lg"
        borderTop="1px"
        borderLeft="1px"
        borderRight={"1px"}
      >
        {pair[0]}
      </Box>
    </td>
  ));

  const barisKedua = index.map((pair, idx) => (
    <td key={idx}>
      <Box ml="3" p="3" borderBottom="1px" borderLeft="1px" borderRight={"1px"}>
        {pair[1]}
      </Box>
    </td>
  ));

  return (
    <div>
      <Heading mb="3">Dominoes</Heading>

      {/* Source Section */}
      <Box
        mr="9%"
        p={3}
        ml={"3"}
        bg="lightgrey"
        borderRadius={"9"}
      >
        <Text pb="3" as="b" color={"black"}>
          Source
        </Text>
        <Text>
        <Code fontSize={"medium"}>{JSON.stringify(index)}</Code>
        </Text>
      </Box>

      {/* Double Numbers Section */}
      <Box
        ml={"3"}
        borderRadius={"9"}
        p={3}
        bg="cyan.100"
        mt="3"
        mr="9%"
        mb="3"
        color="black"
      >
        <Text pb="3" as="b">
          Double Numbers
        </Text>
        <Text fontSize={"lg"}>{countDoubleNumber(index)}</Text>
      </Box>

      <table>
        <tbody>
          <tr>{barisPertama}</tr>
          <tr>{barisKedua}</tr>
        </tbody>
      </table>

      {/* Buttons Section */}
      <Box mt="3" mb="3" ml="3">
        <Button
          bg={"blue.500"}
          color="white"
          mr="6"
          size="xs"
          onClick={() => displayIndex(sortIndex(index, "ASC"))}
        >
          Sort (ASC)
        </Button>

        <Button
          bg={"blue.500"}
          color="white"
          mr="6"
          size="xs"
          onClick={() => displayIndex(sortIndex(index, "DESC"))}
        >
          Sort (DESC)
        </Button>

        <Button
          bg={"blue.500"}
          color="white"
          mr="6"
          size="xs"
          onClick={() => displayIndex(flip(index))}
        >
          Flip
        </Button>

        <Button
          mr="6"
          bg="blue.500"
          color="white"
          size="xs"
          onClick={() => displayIndex(removeDup(index))}
        >
          Remove Dup
        </Button>

        <Button
          color="white"
          size="xs"
          bg={"blue.500"}
          onClick={() => displayIndex(reset())}
        >
          Reset
        </Button>
      </Box>

      {/* Input and Remove by Total */}
      <Box mr="9%">
        <Input
          ml="3"
          onChange={(assign: ChangeEvent<HTMLInputElement>) => displayNumber(assign.target.value)}
          value={numberAsDup}
          type="number"
          min="0"
          placeholder="Input Number"
          size="xs"
        />
      </Box>

      <Button
        color="white"
        bg="blue.500"
        ml="3"
        size={"xs"}
        onClick={() =>
          displayIndex(removeAsTotal(index, parseInt(numberAsDup, 10)))
        }
      >
        Remove
      </Button>
    </div>
  );
}