import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

const keys = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "⌫", value: "backspace" },
  { label: "0", value: 0 },
  { label: "✓", value: "submit" },
];

export default function AdminPOS() {
  const [input, setInput] = useState<string>("");

  const handleKeyPress = (value: number | string) => {
    if (typeof value === "number") {
      if (input.length < 4) {
        setInput((prev) => prev + value.toString());
      }
    } else if (value === "backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "submit") {
      console.log("submit", input);
    }
  };

  return (
    <View className="flex-1 w-full h-full bg-tempBlack justify-center items-center">
      {/* label */}
      <View className="items-center mb-6 w-1/2">
        <Text className="text-4xl text-textBoxWhite font-inter tracking-wide text-center leading-tight">
          Create Admin POS Code
        </Text>
      </View>
      <View className="flex-row mb-6 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <View
            key={i}
            className={`w-6 h-6 rounded-full shadow-md ${
              i < input.length ? "bg-buttonOrange" : "bg-textBoxWhite"
            }`}
          />
        ))}
      </View>
      {/* number grid */}
      <View className="w-3/4 flex-wrap flex-row gap-1 justify-center">
        {keys.map((key, index) => (
          <TouchableOpacity
            key={index}
            className="w-28 h-28 bg-textBoxWhite justify-center rounded-3xl items-center mx-2 my-2"
            onPress={() => handleKeyPress(key.value)}
          >
            <Text className="text-tempBlack font-bold text-xl">
              {key.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
