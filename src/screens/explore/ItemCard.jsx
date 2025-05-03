import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Images } from "../../constants/image";
import { useNavigate } from "react-router-native";

const ItemCard = ({ name, price, imgUrl, company }) => {
  const navigate = useNavigate();
  return (
    <TouchableOpacity
      onPress={() => navigate("/product-details")}
      className="flex-1 m-2.5 p-2.5"
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        className="w-full h-[250px]"
      />
      <Text className="font-normal text-[#535862] w-[90%]" numberOfLines={1}>
        {name}
      </Text>
      <Text className="text-lg text-[#535862] font-bold mt-2.5">${price}</Text>
      <View className="flex-row gap-x-2.5 mt-2.5 items-center">
        <Image
          source={Images.Avatar}
          resizeMode="contain"
          className="w-5 h-5"
        />
        <Text className="w-1/2" numberOfLines={2}>
          {company}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
