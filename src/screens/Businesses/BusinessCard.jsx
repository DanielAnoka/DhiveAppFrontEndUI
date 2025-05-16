import { View, Text, Image, TouchableOpacity } from "react-native";
import { Images } from "../../constants/image";

const BusinessCard = ({
  avatar,
  onClick,
  name,
  marketCap,
  exchange,
  createdAt,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className="flex-row justify-between items-center my-4"
    >
      <View className="flex-row  space-x-3 ">
        <View className="flex items-end">
          <Image source={avatar} resizeMode="contain" className="w-10 h-10" />
          <Image
            source={Images.Gradient}
            resizeMode="contain"
            className="w-4 h-4 -mt-3.5 ml-1"
          />
        </View>
        <View className="flex-col space-y-1.5">
          <View className="flex-row  space-x-1.5 items-center">
            <Text className="font-medium">{name}</Text>
            <Image
              source={Images.AU}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <Text>{exchange}</Text>
          </View>
          <Text className="text-primary">Market Cap - ${marketCap}k</Text>
          <View className="flex-row justify-between space-x-1.5 items-center">
            <Text className="text-xs text-textgray">Created by</Text>
            <Image
              source={Images.Gradient}
              resizeMode="contain"
              className="w-4 h-4"
            />
            <Text className="text-xs text-textgray">Ox91.....D26c</Text>
          </View>
          <View className="flex-row">
            <View className="bg-[#EEF4FF] py-1 px-1.5 border border-[#C7D7FE] rounded-3xl">
              <Text className="text-[#3538CD] text-center">{createdAt}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-col items-end justify-end">
        <Text className="text-[#00BA34] text-xs">+15.20%</Text>
        <Image
          source={Images.ChartPreview}
          resizeMode="contain"
          className="w-24 h-24 -mt-10"
        />
      </View>
    </TouchableOpacity>
  );
};

export default BusinessCard;
