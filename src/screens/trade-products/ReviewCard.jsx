import { View, Text, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const ReviewCard = ({ ratings, text, subtext, images, name, date }) => {
  return (
    <View className="mb-4">
      <View className="flex-row gap-x-1 my-2">
        {Array(ratings)
          .fill("")
          .map((_, i) => (
            <View key={i}>
              <AntDesign name="star" size={17} color="#F59E0B" />
            </View>
          ))}
        {ratings < 5 &&
          Array(5 - ratings)
            .fill("")
            .map((_, i) => (
              <View key={i}>
                <AntDesign name="star" size={17} color="#D5D7DA" />
              </View>
            ))}
      </View>
      <Text className="font-semibold py-1">{text}</Text>
      <Text className="font-light text-sm text-[#717680]">{subtext}</Text>
      <View className="flex-row gap-x-2 items-center">
        {images?.length > 0 &&
          images.map((image, i) => (
            <View key={i}>
              <Image
                source={image}
                className="w-14 h-16 mt-2 mb-3 rounded-lg"
              />
            </View>
          ))}
      </View>

      <Text className="pt-2 text-[#717680]">{`${name},${date}`}</Text>
    </View>
  );
};

export default ReviewCard;
