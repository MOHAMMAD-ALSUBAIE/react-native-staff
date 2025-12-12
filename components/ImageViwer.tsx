import { Image } from "expo-image";
import React from "react";
import { ImageSourcePropType, View } from "react-native";
interface ImageViwerProps {
  imgSource: ImageSourcePropType;
}

export default function ImageViwer({ imgSource }: ImageViwerProps) {
  return (
    <View className="w-[320px] h-[440px]">
      <Image
        source={imgSource}
        style={{ width: "100%", height: "100%" }}
        contentFit="cover"
      />
    </View>
  );
}
