import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;

type BusinessOptions = {
  icon: FontAwesomeIconName;
  label: string;
  value: string;
};

const businessOptions: BusinessOptions[] = [
  { icon: "cutlery", label: "Restaurant", value: "restaurant" },
  {
    icon: "shopping-cart",
    label: "Convenience Store",
    value: "convenience_store",
  },
  { icon: "scissors", label: "Hair and Nail Salon", value: "salon" },
  { icon: "coffee", label: "Cafe", value: "cafe" },
  { icon: "heartbeat", label: "Gym", value: "gym" },
  { icon: "book", label: "Bookstore", value: "bookstore" },
];

export default function OnboardingOne() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View className="flex-1 justify-center items-center w-full h-full bg-tempBlack">
      {/* header */}
      <Text className="font-inter font-extrabold text-textBoxWhite text-5xl w-3/4 tracking-wider mb-10 leading-tight ">
        What type of business do you own?
      </Text>

      {/* button container */}
      <View className="w-3/4 flex-wrap flex-row gap-y-4 space-x-4 ">
        {businessOptions.map((option, index) => {
          const isSelected = selected === option.label;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelected(option.label)}
              className={`py-4 px-8 rounded-full shadow-md flex-row mr-3
                ${isSelected ? " bg-buttonSelected " : "bg-buttonOrange "}`}
            >
              <FontAwesome
                name={option.icon}
                size={14}
                color="#FFFFFF"
                className="mr-3"
              />
              <Text className="text-textBoxWhite font-ron">{option.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View className="mt-14 w-full justify-center items-center">
        <Link href="./create-2" asChild>
          <TouchableOpacity className="bg-buttonOrange py-4 px-8 rounded-full w-9/12 items-center">
            <Text className="text-textBoxWhite font-ron-bold text-xl tracking-widest">
              Continue
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
