import { View, Text, Image, TouchableOpacity } from "react-native";
import { Images } from "../../constants/image";

const BusinessCard = ({ subtext, imgUrl, headtext }) => {
  return (
    <TouchableOpacity className="flex-1 m-2 relative rounded-2xl bg-black">
      <Image
        source={imgUrl}
        resizeMode="centre"
        className="w-full h-[200px] opacity-50 rounded-2xl"
      />
      <View className="absolute flex-col items-start justify-between h-full left-3 top-4">
        <View className="p-2 bg-black/20 blur-lg rounded-full w-12 h-12 flex-row items-center justify-center border-2 border-white">
          <Image source={Images.Media} className="w-6 h-6 " />
        </View>
        <View className="mb-10">
          <Text className="text-white text-[11px]">{subtext}</Text>
          <Text className="text-white text-[18px] mb-1 font-semibold">
            {headtext}
          </Text>
          <Text className="text-white text-[10px] font-light">
            Click to watch live
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessCard;
