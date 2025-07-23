import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

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

interface StoreInterface {
  id: string;
  name: string;
  type: string;
}

const tempStores: StoreInterface[] = [
  { id: "1", name: "Outbox", type: "restaurant" },
  { id: "2", name: "Gym Bros", type: "gym" },
  { id: "3", name: "Tabasko", type: "salon" },
];

export default function StoreSelect() {
  const [stores, setStores] = useState(tempStores);
  return (
    <View className="flex justify-center items-center px-8 py-16 w-full h-full bg-tempBlack">
      {/* header */}
      <Text className=" text-4xl text-headerColor font-inter font-extrabold tracking-widest mb-4">
        Store Selection
      </Text>
      <Text className="text-md text-center text-subheaderColor px-8 mb-8">
        Choose your store! Let's get Selling! Transakt today!
      </Text>

      {/* stores */}
      <View className="flex flex-col w-full px-8 mb-8">
        {stores.map((store) => {
          // Get icon based from store type
          const icon = businessOptions.filter(
            (option) => option.value === store.type,
          )[0];
          return (
            <TouchableOpacity className="flex-row items-center bg-textBoxWhite w-full rounded-md py-4 px-8 mb-4">
              <FontAwesome
                name={icon.icon}
                size={14}
                className="text-tempBlack mr-3"
              />
              <Text className="font-ron-bold text-tempBlack">{store.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* add another store */}
      <View className="px-8 w-full">
        <TouchableOpacity className="bg-buttonOrange py-4 py-12 items-center text-center rounded-md">
          <Text className="text-subheaderColor font-ron-bold">
            Add Another Store
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
