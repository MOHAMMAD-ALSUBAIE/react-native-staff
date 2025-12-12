import Button from "@/components/Button";
import ImageViwer from "@/components/ImageViwer";
import { View } from "react-native";
const PlaceholderImage = require("@/assets/images/background-image.png");
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-[#25292e]">
      {/* /    <View className="flex-1"> */}
      <ImageViwer imgSource={PlaceholderImage} />
      <View className="items-center">
        <Button label="Choose a Photo" />
        <Button label="Use this  Photo" />
      </View>
    </View>
  );
}
