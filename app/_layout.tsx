import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6200EE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "My Pets",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Pet Details",
        }}
      />
    </Stack>
  );
}
