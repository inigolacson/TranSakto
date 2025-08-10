import React from "react";
import { View, Text } from "react-native";
import CodeLogin from "@/components/CodeLogin";

export default function GeneralLogin() {
  const handleLoginSubmit = (code: string) => {
    console.log("Login POS Test:", code);
  };

  return (
    <View className="flex-1 w-full h-full bg-tempBlack justify-center items-center">
      {/* label */}
      <View className="items-center mb-6 w-1/2">
        <Text className="text-4xl text-textBoxWhite font-inter tracking-wide text-center leading-tight">
          Ready to make some sales?
        </Text>
      </View>
      {/* knobs and number grid */}
      <CodeLogin onSubmit={handleLoginSubmit} />
    </View>
  );
}
