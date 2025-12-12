import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  label: string;
}
export default function Button({ label }: Props) {
  return (
    <View className="w-[320px] h-[68px] mx-[20px] flex items-center justify-center p-[3px]">
      <Pressable className="rounded-[18px] flex flex-1 justify-center items-center">
        <Text className="text-white text-[16px] ">{label}</Text>
      </Pressable>
    </View>
  );
}
