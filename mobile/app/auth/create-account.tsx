import React, { use, useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import GoogleIcon from "../../assets/images/icons/Google.svg";
import { authClient } from "@/lib/auth-client";
import { handleOAuth } from "@/lib/utils";

const bgImage = require("../../assets/images/background/index.webp");

export default function CreateAccount() {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    console.log("test");
    console.log(process.env.EXPO_PUBLIC_API_URL);
    await authClient.signUp.email({
      name: "User", // TODO: Implement name input
      email,
      password,
    });
  };

  return (
    <View className="flex-1 justify-center items-center px-8 py-16 w-full h-full bg-tempBlack">
      {/* header */}
      <View className="items-center mb-6">
        <Text className="text-4xl font-extrabold text-headerColor mb-4 font-inter tracking-widest">
          Create Account
        </Text>
      </View>

      {/* name */}
      <View className=" bg-textBoxWhite rounded-full py-2 px-8 w-3/4 mb-5 flex-row items-center space-x-10">
        <FontAwesome name="user" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={name}
          onChangeText={setName}
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
          placeholder={isNameFocused ? "" : "name"}
          className="flex-1 text-tempBlack pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        />
      </View>

      {/* email */}
      <View className="bg-textBoxWhite rounded-full py-2 px-8 mb-5 w-3/4 flex-row items-center space-x-10">
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
        />
      </View>

      {/* password */}
      <View className="bg-textBoxWhite rounded-full py-2 px-8 mb-5 w-3/4 flex-row items-center space-x-10">
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

      {/* confirm password */}
      <View className="bg-textBoxWhite rounded-full py-2 px-8 mb-5 w-3/4 flex-row items-center space-x-10">
        <FontAwesome name="lock" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={emailConfirm}
          onChangeText={setEmailConfirm}
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => {
            setIsConfirmPasswordFocused(false);
            setShowConfirmPassword(false);
          }}
          placeholder={isConfirmPasswordFocused ? "" : "confirm password"}
          secureTextEntry={!showConfirmPassword}
          className="flex-1 text-tempBlack pr-2 font-ron"
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

      {/* checkbox */}
      <View className="flex-row items-center space-x-10 mb-8 justify-items-start w-3/4 pl-3">
        <Pressable
          className="size-7 rounded-md bg-textBoxWhite flex justify-center p-0 items-center"
          onPress={() => setChecked(!checked)}
        >
          {checked && (
            <Text className="text-tempBlack font-bold text-xl">✓</Text>
          )}
        </Pressable>
        <Text className=" ml-3 text-sm font-ron text-subheaderColor">
          Agree with Terms and Conditions
        </Text>
      </View>

      {/* button */}
      <TouchableOpacity
        className="bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 items-center"
        onPress={handleSignUp}
      >
        <Text className="text-white text-xl font-semibold tracking-widest">
          Sign Up!
        </Text>
      </TouchableOpacity>

      {/* divider */}
      <View className="flex-row items-center my-10 w-3/4">
        <View className="flex-1 h-px bg-textBoxWhite" />
        <Text className="mx-3 text-textBoxWhite text-sm">Or sign up with</Text>
        <View className="flex-1 h-px bg-textBoxWhite" />
      </View>

      {/* google button */}
      <TouchableOpacity 
        onPress={() => handleOAuth("google")}
        className="bg-textBoxWhite py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-5">
        <View className="flex-row items-center gap-x-3">
          <GoogleIcon width={20} height={20} />
          <Text className="font-ron tracking-wide">Sign Up With Google</Text>
        </View>
      </TouchableOpacity>

      {/* facebook button */}
      <TouchableOpacity 
        onPress={() => handleOAuth("facebook")}
        className="bg-facebookBlue py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-12">
        <View className="flex-row items-center gap-x-3">
          <FontAwesome name="facebook-square" color="#FFFFFF" size={20} />
          <Text className="text-textBoxWhite font-ron tracking-wide">
            Sign Up With Facebook{" "}
          </Text>
        </View>
      </TouchableOpacity>

      {/* redirect login */}
      <View className="flex-row items-center">
        <Text className="text-subheaderColor font-ron">
          Already managing a business?{" "}
        </Text>
        <Link href="/auth/login" asChild>
          <Text className="text-buttonOrange font-ron">Login!</Text>
        </Link>
      </View>
    </View>
  );
}
