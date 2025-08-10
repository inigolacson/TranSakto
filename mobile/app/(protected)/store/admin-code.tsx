import React from "react";
import { View, Text } from "react-native";
import CodeLogin from "@/components/CodeLogin";

export default function AdminPOS() {
  const handleAdminSubmit = (code: string) => {
    console.log("Admin Test:", code);
  };

  return (
    <View className="flex-1 w-full h-full bg-tempBlack justify-center items-center">
      {/* label */}
      <View className="items-center mb-6 w-1/2">
        <Text className="text-4xl text-textBoxWhite font-inter tracking-wide text-center leading-tight">
          Create Admin POS Code
        </Text>
      </View>
      {/* knobs and number grid */}
      <CodeLogin onSubmit={handleAdminSubmit} />
    </View>
  );
}
