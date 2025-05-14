import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Card = ({ product, onOptionsPress }) => {
  return (
    <View className="flex-row items-start p-3 bg-white rounded-xl mb-3 shadow-sm">
      {/* Product Image with Status Dot */}
      <View className="relative mr-3">
        <Image
          source={product.image}
          className="w-16 h-16 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute top-[-2] right-[-1] w-2.5 h-2.5 rounded-full bg-indigo-500 z-10" />
      </View>

      {/* Product Info */}
      <View className="flex-1">
        <Text className="font-semibold text-sm mb-0.5">{product.name}</Text>
        <Text className="text-xs text-[#6C6C6C] mb-1">
          {product.price} <Text className="text-black">· {product.sold} sold</Text>
        </Text>

        {/* Available Quantity Section */}
        <View className="bg-[#F1EDFE] px-2 py-0.5 rounded-full self-start flex-row items-center space-x-1">
          <View className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
          <Text className="text-[11px] text-[#6D5DD3] font-medium">
            {product.available} Available
          </Text>
        </View>
      </View>

      {/* Options Button */}
      <TouchableOpacity className="p-2" onPress={onOptionsPress}>
        <Ionicons name="ellipsis-horizontal" size={18} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
