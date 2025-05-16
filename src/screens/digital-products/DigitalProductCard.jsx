import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Images } from "../../constants/image";
import { useNavigate } from "react-router-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const DigitalProductCard = ({
  name,
  onPress,
  price,
  imgUrl,
  company,
  rating,
  numProducts,
}) => {
  const width = Dimensions.get("window").width;
  const navigate = useNavigate();
  return (
    <TouchableOpacity onPress={onPress} className="flex-1 m-1 my-4">
      <Image
        source={imgUrl}
        style={{ maxWidth: width }}
        className="w-full h-[140px] rounded-lg"
      />
      <Text className="font-light mt-1.5 text-[#535862]" numberOfLines={1}>
        {name}
      </Text>
      <Text className="text-lg font-semibold mt-1.5">${price}</Text>
      {/* {rating ? (
        <View className="flex-row items-center gap-x-1.5">
          <View className="bg-[#F59E0B] p-1 rounded-md">
            <AntDesign name="star" size={15} color="#fff" />
          </View>
          <Text className="text-lg">{rating}</Text>
          <Text className="text-lg font-light text-[#717680]">
            ({numProducts})
          </Text>
        </View>
      ) : ( */}
      <View className="flex-row space-x-1.5 mt-1.5 items-center">
        <Image
          source={Images.Avatar}
          resizeMode="contain"
          className="w-5 h-5"
        />
        <Text numberOfLines={1}>{company}</Text>
      </View>
      {/* )} */}
    </TouchableOpacity>
  );
};

export default DigitalProductCard;
