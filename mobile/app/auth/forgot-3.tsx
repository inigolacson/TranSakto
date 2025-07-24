import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function ForgotThree() {
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
      {/* password */}
      <View className="bg-textBoxWhite rounded-full py-2 px-8 w-3/4 mb-5 flex-row items-center space-x-10">
        <FontAwesome name="lock" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => {
            setIsPasswordFocused(false);
            setShowPassword(false);
          }}
          placeholder={isPasswordFocused ? "" : "password"}
          secureTextEntry={!showPassword}
          className="flex-1 pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        />
        <Pressable onPress={() => setShowPassword((prev) => !prev)}>
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={18}
            color="#91351C"
          />
        </Pressable>
      </View>

      {/* confirm password */}
      <View className="bg-textBoxWhite rounded-full px-8 py-2 mb-8 w-3/4 flex-row items-center space-x-10">
        <FontAwesome name="lock" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => {
            setIsConfirmPasswordFocused(false);
            setShowConfirmPassword(false);
          }}
          placeholder={isConfirmPasswordFocused ? "" : "confirm password"}
          secureTextEntry={!showConfirmPassword}
          className="flex-1 pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        />
        <Pressable onPress={() => setShowConfirmPassword((prev) => !prev)}>
          <FontAwesome
            name={showConfirmPassword ? "eye" : "eye-slash"}
            size={18}
            color="#91351C"
          />
        </Pressable>
      </View>

      {/* button */}
      <View>
        <Link href="/auth/forgot-3" asChild>
          <Text></Text>
        </Link>
      </View>
    </View>
  );
}
