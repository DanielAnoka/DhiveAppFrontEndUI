import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Images } from "../../constants/image";
import { useNavigate } from "react-router-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const ItemCard = ({ name, price, imgUrl, company, rating, numProducts }) => {
  const width = Dimensions.get("window").width;
  const navigate = useNavigate();
  return (
    <TouchableOpacity
      onPress={() => navigate("/product-details/home")}
      className="flex-1 m-2.5 p-2.5"
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ maxWidth: width * 0.5 }}
        className="w-full h-[140px]"
      />
      <Text className="font-normal text-[#535862] w-[90%]" numberOfLines={1}>
        {name}
      </Text>
      <Text className="text-lg text-[#535862] font-bold mt-2.5">${price}</Text>
      {rating ? (
        <View className="flex-row items-center gap-x-1.5">
          <View className="bg-[#F59E0B] p-1 rounded-md">
            <AntDesign name="star" size={15} color="#fff" />
          </View>
          <Text className="text-lg">{rating}</Text>
          <Text className="text-lg font-light text-[#717680]">
            ({numProducts})
          </Text>
        </View>
      ) : (
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
      )}
    </TouchableOpacity>
  );
};

export default ItemCard;
