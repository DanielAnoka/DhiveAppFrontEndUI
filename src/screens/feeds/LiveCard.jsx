import { View, Text, Image } from "react-native";
import React from "react";
import { Images } from "../../constants/image";

const LiveCard = () => {
  return (
    <View className="mr-5 mt-3 relative flex-col items-center">
      <View className="p-0.5 rounded-full bg-white border-2 border-[#444CE7]">
        <Image
          source={Images.ChatAvatar}
          resizeMode="contain"
          className="w-[65px] h-[65px] rounded-full"
        />
      </View>
      <View className="bg-[#444CE7] border border-white mb-1 absolute -bottom-4 right-5 p-1 flex-row rounded">
        <Text className="text-white text-[8px]">LIVE</Text>
      </View>
      <Text className="text-xs mt-1">NextGen</Text>
    </View>
  );
};

export default LiveCard;
