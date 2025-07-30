import React, { use, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import {
  businessDetailsSchema,
  BussinessDetailsFormData,
  BusinessDetailsErrors,
} from "@/schemas/businessDetailsSchema"; 
import { parseErrors } from "@/lib/utils";

export default function OnboardingTwo() {
  const [formData, setFormData] = useState<BussinessDetailsFormData>({
    name: "",
    address: "",
    contact: "",
  });
  const [errors, setErrors] = useState<BusinessDetailsErrors>({});

  const onSubmit = () => {
    const validation = businessDetailsSchema.safeParse(formData);
    if (!validation.success) {
      const parsedErrors = parseErrors(validation.error);
      setErrors(parsedErrors);
      return;
    } else {
      setErrors({});
    }

    const { name, address, contact } = validation.data;
    console.log(name, address, contact);
    router.push("/store/admin-code");
  };

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);
  const [isContactFocused, setIsContactFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 items-center justify-center w-full h-full bg-tempBlack"
    >
      {/* header */}
      <Text className="text-textBoxWhite font-inter font-extrabold text-4xl tracking-widest mb-4">
        Business Details
      </Text>
      {/* subheader */}
      <View className="w-3/5 items-center justify-center mb-6">
        <Text className="text-subheaderColor text-center font-ron leading-6 text-lg">
          These details will appear on your receipts and help you set up your
          store's identity (you can fill these out later).
        </Text>
      </View>
      <View className={ `bg-textBoxWhite rounded-full py-2 px-8 w-3/4 mb-5 flex-row items-center space-x-10
                        ${errors?.name && "border-2 border-red-500"}` }>
        <FontAwesome name="user" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={formData.name}
          onChangeText={(name) => setFormData({ ...formData, name })}
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
          placeholder={isNameFocused ? "" : "name"}
          className="flex-1 text-tempBlack pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        />
      </View>
      <View className={ `bg-textBoxWhite rounded-full py-2 px-8 w-3/4 mb-5 flex-row items-center space-x-10
                        ${errors?.address && "border-2 border-red-500"}` }>
        <FontAwesome name="user" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={formData.address}
          onChangeText={(address) => setFormData({ ...formData, address })}
          onFocus={() => setIsAddressFocused(true)}
          onBlur={() => setIsAddressFocused(false)}
          placeholder={isAddressFocused ? "" : "address"}
          className="flex-1 text-tempBlack pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        />
      </View>
      <View className={ `bg-textBoxWhite rounded-full py-2 px-8 w-3/4 mb-5 flex-row items-center space-x-10
                        ${errors?.contact && "border-2 border-red-500"}` }>
        <FontAwesome name="user" size={20} color="#C44422" className="mr-3" />
        <TextInput
          value={formData.contact}
          onChangeText={(contact) => setFormData({ ...formData, contact })}
          onFocus={() => setIsContactFocused(true)}
          onBlur={() => setIsContactFocused(false)}
          placeholder={isContactFocused ? "" : "contact number"}
          className="flex-1 text-tempBlack pr-2 font-ron"
          placeholderTextColor="#3A3A3A"
        />
      </View>
      <TouchableOpacity
        onPress={onSubmit}
        className="bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 items-center"
      >
        <Text className="text-white text-xl font-semibold tracking-widest">
          Continue!
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
