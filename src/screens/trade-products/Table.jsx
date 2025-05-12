import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Images } from "../../constants/image";
import Ionicons from "react-native-vector-icons/Ionicons";

const Table = () => {
  const dummyData = [
    {
      account: "Ox94....75073",
      type: "Buy",
      GAX: "0.6144",
    },
    {
      account: "Ox94....75073",
      type: "Sell",
      GAX: "0.6144",
    },
    {
      account: "Ox94....75073",
      type: "Buy",
      GAX: "0.6144",
    },
  ];

  return (
    <View className="py-4 mb-5 pl-4">
      {dummyData.map((data, rowIndex) => (
        <View key={rowIndex} className="flex-row">
          {/* {Array.from({ length: columns }).map((_, colIndex) => ( */}
          <View className="pr-9 py-4 border-b flex-row  gap-x-2 border-[#E9EAEB] items-center justify-center">
            <Image source={Images.Gradient} className="w-5 h-5" />
            <Text className="text-textgray text-sm">{data.account}</Text>
          </View>
          <View className="pr-9 py-4 border-b border-[#E9EAEB] flex-row items-center justify-center">
            <View className="border border-[#D5D7DA] p-1 pr-2 rounded-md flex-row gap-x-2 items-center">
              <View
                className={`w-2 h-2 rounded-full ${
                  data.type == "Buy" ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <Text>{data.type}</Text>
            </View>
          </View>
          <View className="pr-8 py-4 border-b border-[#E9EAEB]  items-center justify-center">
            <Text className="text-textgray">0.6144</Text>
          </View>
          <View className="pr-9 py-4 border-b border-[#E9EAEB]  items-center justify-center">
            <Text className="text-textgray">0.6144</Text>
          </View>
          {/* ))} */}
        </View>
      ))}
      <View className="flex-row items-center justify-between mt-5">
        <TouchableOpacity className="border border-[#D5D7DA] p-2 rounded-lg">
          <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>
        <Text>Page 1 of 10</Text>
        <TouchableOpacity className="border border-[#D5D7DA] p-2 rounded-lg">
          <Ionicons name="arrow-forward" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Table;
