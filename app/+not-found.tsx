import React from "react";
import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
export default function Notfound() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-[#000]">Not Found 404</Text>
        <Link className="hover:text-[#727b70]" href="/" push asChild>
          <Text>Go to home</Text>
        </Link>
      </View>
    </>
  );
}
