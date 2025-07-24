import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ForgotTwo() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

  return (
    <View className="flex-1 w-full h-full justify-center py-8 px-16 bg-tempBlack items-center">
      {/* header */}
      <View className="items-center mb-6">
        <Text className="text-4xl text-headerColor font-inter font-extrabold tracking-widest mb-4">
          Reset Password
        </Text>
      </View>
    </View>
  );
}
