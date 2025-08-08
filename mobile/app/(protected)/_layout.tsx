import { authClient } from "@/lib/auth-client";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";

export default function ProtectedLayout() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, [session]);

  if (isPending) {
    return (
      // TODO: Implement loading screen
      <View className="flex-1 justify-center items-center px-8 py-16 w-full h-full bg-tempBlack">
        <Text className="text-lg text-center text-subheaderColor px-4">
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#161616",
        },
      }}
    />
  );
}
