import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export default function ForgotTwo() {
  const [input, setInput] = useState<String>("");

  return (
    <View className="flex-1 w-full h-full justify-center py-8 px-16 bg-tempBlack items-center">
      {/* header */}
      <View className="items-center mb-5">
        <Text className="text-4xl text-headerColor font-inter font-extrabold tracking-widest">
          Verification Code
        </Text>
      </View>
      {/* description */}
      <View className="items-center mb-5 w-4/5">
        <Text className="font-ron font-lg text-subheaderColor text-center leading-6 text-lg">
          We have sent the verification code to (email) enter code to reset your
          password
        </Text>
      </View>

      {/* text boxes */}
      <View className="flex-row items-center rounded-full bg-textBoxWhite"></View>

      {/* received a code */}
      <View className="justify-center items-center mb-6 flex-row ">
        <Text className="mr-2 font-ron text-subheaderColor">
          Haven't received a code?
        </Text>
        <Link href="/auth/forgot-3" asChild>
          <Text className="text-buttonOrange font-ron">Resend!</Text>
        </Link>
      </View>

      {/* button */}
      <Link href="/auth/forgot-3" asChild>
        <TouchableOpacity className="bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-5">
          <Text className="text-textBoxWhite font-ron-bold text-xl tracking-widest">
            Confirm
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
