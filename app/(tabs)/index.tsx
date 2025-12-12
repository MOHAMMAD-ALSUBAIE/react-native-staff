import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
const PlaceholderImage = require("@/assets/images/background-image.png");
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={PlaceholderImage} className="w-[320px] h-[440px]" />

      <Text className="text-red bg-[#16624e]">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/about">
        <Text>Go to About</Text>
      </Link>
    </View>
  );
}
