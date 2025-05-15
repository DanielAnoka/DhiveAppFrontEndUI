import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const PostCard = ({ product, onOptionsPress }) => {
    return (
        <View className="flex-row items-start p-3  rounded-xl mb-3 shadow-sm">
          
            <View className="relative mr-3">
                <Image
                    source={product.image}
                    className="w-16 h-16 rounded-lg"
                    resizeMode="cover"
                />
            </View>

            {/* Product Info */}
            <View className="flex-1">
                <View className="flex-col mt-2 ">
                    <Text className="font-semibold text-sm flex-1">{product.name}</Text>
                    <View className="flex-row space-x-2 items-start mt-1 ">
                        <View className="flex-row items-center space-x-1">
                            <Ionicons name="heart-outline" size={16} color="#6C6C6C" />
                            <Text className="text-xs text-[#6C6C6C]">{product.likes}</Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <Ionicons name="chatbubble-ellipses-outline" size={16} color="#6C6C6C" />
                            <Text className="text-xs text-[#6C6C6C]">{product.comments}</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Chevron Icon (Right Arrow) */}
            <TouchableOpacity className="p-2" onPress={onOptionsPress}>
                <Ionicons name="chevron-forward" size={20} color="#B0B0B0" />
            </TouchableOpacity>
        </View>
    );
};

export default PostCard;
