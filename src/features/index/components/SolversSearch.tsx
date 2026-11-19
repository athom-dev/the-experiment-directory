import useManifest from "@/hooks/useManifest";
import {
  Avatar,
  Card,
  HStack,
  Input,
  ScrollArea,
  Stack,
} from "@chakra-ui/react";
import { Binary, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function SolversSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const manifest = useManifest();
  const solvers: any = manifest.solvers ?? [];
  const searchWords = searchTerm
    .toLowerCase()
    .trim()
    .split(/\s+/) // Divide por espaços, ignorando espaços duplos
    .filter(Boolean); // Remove strings vazias

  const filteredSolvers = solvers.filter((solver: any) => {
    // Ignora se estiver desativado ou não tiver label
    if (solver.enabled === false || !solver.label) return false;

    // SE O USUÁRIO NÃO DIGITOU NADA: retorna true para mostrar todos
    if (searchWords.length === 0) return true;

    const labelLower = solver.label.toLowerCase();

    // Se houver termos digitados, exige que TODAS as palavras estejam presentes
    return searchWords.every((word) => labelLower.includes(word));
  });
  return (
    <Stack>
      <Input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        variant="subtle"
        rounded="xl"
        placeholder="Search for solvers"
      ></Input>
      <ScrollArea.Root pb={4}>
        <ScrollArea.Scrollbar h={1} orientation="horizontal" />
        <ScrollArea.Corner />
        <ScrollArea.Viewport>
          <ScrollArea.Content spaceY="4" textStyle="sm">
            <HStack>
              {filteredSolvers.length !== 0 ? (
                filteredSolvers.map((solver: any) => (
                  <Card.Root
                    asChild
                    transition={"all"}
                    _hover={{
                      border: "1px solid var(--chakra-colors-border)",
                      bg: "var(--chakra-colors-border)",
                    }}
                    borderWidth={1}
                    borderColor="transparent"
                    flexGrow={1}
                    maxW={"sm"}
                    variant="subtle"
                    rounded="xl"
                  >
                    <Link to={solver.to}>
                      <Card.Body gap="2" p={2} pe={4}>
                        <HStack>
                          <Avatar.Root size="lg" shape="rounded">
                            <Avatar.Fallback>
                              <Binary />
                            </Avatar.Fallback>
                          </Avatar.Root>
                          <Card.Title textWrap="nowrap" fontSize="sm">
                            {solver.label}
                          </Card.Title>
                        </HStack>
                      </Card.Body>
                    </Link>
                  </Card.Root>
                ))
              ) : (
                <Card.Root borderWidth={1} bg="bg" flexGrow={1} rounded="xl">
                  <Card.Body gap="2" p={2} pe={4}>
                    <HStack>
                      <Avatar.Root size="lg" shape="rounded">
                        <Avatar.Image src="https://picsum.photos/200/300" />
                        <Avatar.Fallback>
                          <X />
                        </Avatar.Fallback>
                      </Avatar.Root>
                      <Card.Title textWrap="nowrap" fontSize="sm">
                        No results
                      </Card.Title>
                    </HStack>
                  </Card.Body>
                </Card.Root>
              )}
            </HStack>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </Stack>
  );
}
