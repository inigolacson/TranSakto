import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

type NumpadKey = {
  label: string;
  value: number | string;
};

type NumpadProps = {
  keys: NumpadKey[];
  onPress: (value: number | string) => void;
};

function Numpad({ keys, onPress }: NumpadProps) {
  return (
    <View className="w-3/4 max-w-[25rem] flex-row flex-wrap justify-center">
      {keys.map((key, index) => (
        <TouchableOpacity
          key={index}
          className="w-28 h-28 bg-textBoxWhite justify-center rounded-3xl items-center m-1"
          onPress={() => onPress(key.value)}
        >
          <Text className="text-tempBlack font-bold font-ron text-3xl">
            {key.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

type CodeLoginProps = {
  onSubmit?: (code: string) => void;
};

export default function CodeLogin({ onSubmit }: CodeLoginProps) {
  const [input, setInput] = useState<string>("");

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

  const handleKeyPress = (value: number | string) => {
    if (typeof value === "number" && input.length < 4) {
      setInput((prev) => prev + value.toString());
    } else if (value === "backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "submit" && onSubmit) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <>
      <>
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

        <Numpad keys={keys} onPress={handleKeyPress} />
      </>
    </>
  );
}
