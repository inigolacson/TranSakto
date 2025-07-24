import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function ForgotOne() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [email, setEmail] = useState("");
  return (
    <View className="flex-1 w-full h-full justify-center px-8 py-16 items-center bg-tempBlack">
      {/* logo or artwork section */}
      <View className="w-80 h-80 border-headerColor rounded-lg shadow-md justify-center items-center mb-20 border">
        <Text className="text-headerColor text-center text-sm">
          Logo or Artwork
        </Text>
      </View>
      {/* welcome message */}
      <View className="items-center mb-5">
        <Text className="text-4xl font-inter font font-extrabold tracking-widest text-headerColor mb-4">
          Forgot Password?
        </Text>
        <Text className="text-lg text-center text-subheaderColor px-4">
          Enter email to send one-time password
        </Text>
      </View>
      <View className="w-3/4 bg-textBoxWhite rounded-full py-2 px-8 mb-8 flex-row items-center space-x-10">
        <FontAwesome
          name="envelope"
          size={15}
          color="#C44422"
          className="mr-3"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          placeholder={isEmailFocused ? "" : "email address"}
          className="flex-1 text-tempBlack pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        ></TextInput>
      </View>
      <Link href="/auth/forgot-2" asChild>
        <TouchableOpacity className="bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-5">
          <Text className="text-textBoxWhite font-ron-bold text-xl tracking-widest">
            Send Code
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
