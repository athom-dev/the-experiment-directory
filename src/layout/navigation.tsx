import useManifest from "@/hooks/useManifest";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";

interface NavigationContentItem {
  label: string;
  to: string;
  enabled?: boolean;
}

interface NavigationContentCategory {
  label?: string;
  children: NavigationContentItem[];
}

// Array normal em vez de tupla [NavigationContentCategory]
const baseNavigationContent: NavigationContentCategory[] = [
  {
    label: "Main",
    children: [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "Updates & Additions",
        to: "/updates-and-additions",
      },
    ],
  },
];

export default function Navigation() {
  const manifest = useManifest();

  // Fallback para array vazio [] enquanto o manifest ainda não carregou
  const solversMap: NavigationContentItem[] =
    manifest.solvers?.map((solver: NavigationContentItem) => ({
      label: solver.label,
      to: solver.to,
      enabled: solver.enabled,
    })) ?? [];

  // Cria um novo array a cada render sem mutar o original (evita duplicar itens)
  const navigationContent: NavigationContentCategory[] = [
    ...baseNavigationContent,
    ...(solversMap.length > 0
      ? [{ label: "Solvers", children: solversMap }]
      : []),
  ];

  return (
    <Stack gap={4}>
      {navigationContent.map((category, index) => (
        <Stack gap={2} key={category.label ?? index}>
          {category.label && (
            <Heading size="sm" color="fg.subtle">
              {category.label}
            </Heading>
          )}
          <Stack gap={0}>
            {category.children.map((item) => {
              // Se 'enabled' não for informado (como em Home), assume true
              const isEnabled = item.enabled ?? true;

              return (
                <Button
                  key={item.to}
                  variant="subtle"
                  h="28px"
                  rounded="full"
                  justifyContent="start"
                  px={3}
                  asChild
                  disabled={!isEnabled}
                >
                  {isEnabled ? (
                    <NavLink to={item.to}>{item.label}</NavLink>
                  ) : (
                    <Text>{item.label}</Text>
                  )}
                </Button>
              );
            })}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
