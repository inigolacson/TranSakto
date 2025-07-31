import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Link, router } from "expo-router";
import CodeInput from "@/components/CodeInput";
import { linkTo } from "expo-router/build/global-state/routing";

export default function ForgotTwo() {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleResend = () => {
    console.log("Resend Code");
    //email resend logic
  };

  const handleConfirm = () => {
    router.push("/auth/forgot-3");
    console.log("Code: ", code);
    //handle confirm logic
  };

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
          We have sent the verification code to (email). Enter code to continue account creation.
        </Text>
      </View>

      {/* text boxes */}
      <CodeInput code={code} setCode={setCode} />

      {/* received a code */}
      <View className="justify-center items-center mb-6 flex-row ">
        <Text className="mr-2 font-ron text-subheaderColor">
          Haven't received a code?
        </Text>
        <Text className="text-buttonOrange font-ron" onPress={handleResend}>
          Resend!
        </Text>
      </View>

      {/* button */}
      <TouchableOpacity
        className="bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-5"
        onPress={handleConfirm}
      >
        <Text className="text-textBoxWhite font-ron-bold text-xl tracking-widest">
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}
