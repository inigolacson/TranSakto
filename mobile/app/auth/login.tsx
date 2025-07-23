import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import GoogleIcon from "../../assets/images/icons/Google.svg";
import { authClient } from "@/lib/auth-client";
import { handleOAuth } from "@/lib/utils";

const bgImage = require("../../assets/images/background/index.webp");

export default function LoginPage() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(process.env.EXPO_PUBLIC_API_URL)
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/store"
    });
  };

  return (
    <View className="flex-1 justify-center items-center px-8 py-16 w-full h-full bg-tempBlack">
      {/* header */}
      <View className="items-center mb-6">
        <Text className=" text-4xl text-headerColor font-inter font-extrabold tracking-widest text-mainBlack mb-4">
          Welcome back
        </Text>
      </View>

      {/* email */}
      <View className="bg-textBoxWhite rounded-full py-2 px-8 mb-5 w-3/4 flex-row items-center space-x-10">
        <FontAwesome name="user" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={email}
          onChangeText={setEmail}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          placeholder={isEmailFocused ? "" : "email address"}
          className="flex-1 text-tempBlack pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        />
      </View>

      {/* password */}
      <View className="bg-textBoxWhite rounded-full py-2 px-8 mb-3 w-3/4 flex-row items-center space-x-10">
        <FontAwesome name="lock" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          placeholder={!isPasswordFocused && password === "" ? "password" : ""}
          secureTextEntry={!showPassword}
          className="flex-1 text-tempBlack pr-2 font-ron"
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

      {/* forgot password */}
      <Link href="/auth/create-account" asChild className="mb-10 w-3/4">
        <Text className="justify-items-end text-right italic pr-1 text-sm text-subheaderColor">
          Forgot password?
        </Text>
      </Link>

      {/* button */}
      <TouchableOpacity
        className="bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 items-center"
        onPress={handleLogin}
      >
        <Text className="text-white text-xl font-ron-bold tracking-widest">
          Login!
        </Text>
      </TouchableOpacity>

      {/* divider */}
      <View className="flex-row items-center my-10 w-3/4">
        <View className="flex-1 h-px bg-textBoxWhite" />
        <Text className="mx-3 text-textBoxWhite text-sm">Or continue with</Text>
        <View className="flex-1 h-px bg-textBoxWhite" />
      </View>

      {/* google button */}
      <TouchableOpacity
        onPress={() => handleOAuth("google")}
        className="bg-textBoxWhite py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-5"
      >
        <View className="flex-row items-center gap-x-3">
          <GoogleIcon width={20} height={20} />
          <Text className="font-ron tracking-wide">Sign In With Google</Text>
        </View>
      </TouchableOpacity>

      {/* facebook button */}
      <TouchableOpacity
        onPress={() => handleOAuth("facebook")}
        className="bg-facebookBlue py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-12"
      >
        <View className="flex-row items-center gap-x-3">
          <FontAwesome name="facebook-square" color="#FFFFFF" size={20} />
          <Text className="text-textBoxWhite font-ron tracking-wide">
            Sign In With Facebook{" "}
          </Text>
        </View>
      </TouchableOpacity>

      {/* redirection sign up */}
      <View className="flex-row items-center mb-4">
        <Text className="font-ron text-subheaderColor">
          First time managing a business?{" "}
        </Text>
        <Link href="/auth/create-account" asChild>
          <Text className="text-buttonOrange font-ron ">Sign Up!</Text>
        </Link>

        {/*redirection for onboard FOR TESTING*/}
      </View>
      <View className="flex-row items-center">
        <Text className="font-ron text-subheaderColor">
          Redirection to Onboarding{" "}
        </Text>
        <Link href="/store/create-1" asChild>
          <Text className="text-buttonOrange font-ron ">Temporary!</Text>
        </Link>
      </View>
    </View>
  );
}
