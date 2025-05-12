import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import PrimaryButton from "../../components/PrimaryButton";

const options = [
  "All",
  "Physical Products",
  "Digital Products",
  "Price $50 - $100",
  "Price $150 - $300",
  "Price $350 - $600",
  "Price $1,000 - $Above",
];
const FilterProducts = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View className="pt-4 px-2">
      <Text className="text-lg mb-7 font-semibold">Filter</Text>
      {options.map((item, i) => (
        <TouchableOpacity
          onPress={() => setSelectedIndex(i)}
          key={i}
          className={`py-3 flex-row justify-between`}
        >
          <Text>{item}</Text>
          {i === selectedIndex ? (
            <AntDesign name="checkcircle" size={20} color="#444CE7" />
          ) : (
            <View className="w-5 h-5 border border-primary rounded-full" />
          )}
        </TouchableOpacity>
      ))}
      <View className="mt-14 mb-3 flex-row items-center justify-center w-full">
        <PrimaryButton text={"Apply Filter"} width={"100%"} />
      </View>
    </View>
  );
};

export default FilterProducts;
