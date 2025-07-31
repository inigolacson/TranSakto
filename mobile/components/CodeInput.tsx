import { useRef } from "react";
import { TextInput, Text, View } from "react-native";

interface CodeInputProps {
  code: string[];
  setCode: (code: string[]) => void;
}

export default function CodeInput({ code, setCode }: CodeInputProps) {
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-row items-center justify-center w-3/4 mb-6 gap-5">
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref;
          }}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          className="w-16 h-16 rounded-xl text-center bg-textBoxWhite text-tempBlack font-bold"
          onKeyPress={({ nativeEvent }) => {
            if (
              nativeEvent.key === "Backspace" &&
              code[index] === "" &&
              index > 0
            ) {
              inputs.current[index - 1]?.focus();
            }
          }}
        />
      ))}
    </View>
  );
}
