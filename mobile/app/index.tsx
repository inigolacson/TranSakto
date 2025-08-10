import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { authClient } from "@/lib/auth-client";

const bgImage = require("../assets/images/background/index.webp");

export default function WelcomeScreen() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    authClient.signOut();
    if (session) {
      router.replace("/store");
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
    <View className="flex-1 justify-center items-center px-8 py-16 w-full h-full bg-tempBlack">
      {/* logo or artwork section */}
      <View className="w-80 h-80 border-headerColor rounded-lg shadow-md justify-center items-center mb-20 border">
        <Text className="text-headerColor text-center text-sm">
          Logo or Artwork
        </Text>
      </View>
      {/* welcome message */}
      <View className="items-center mb-11">
        <Text className="text-4xl font-inter font-extrabold tracking-widest text-headerColor mb-4">
          Welcome
        </Text>
        <Text className="text-lg text-center text-subheaderColor px-4">
          A smarter POS-easy to use, built to match your unique business needs.
        </Text>
      </View>
      {/* start button (redirects to login) */}
      <View className="w-full items-center">
        <Link href="/auth/login" asChild>
          <TouchableOpacity className="bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 max-w-[30rem] items-center">
            <Text className="text-white text-xl font-ron-bold tracking-widest">
              Start Today!
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
