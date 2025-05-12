import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";

const FilterMethods = () => {
  const filterMethods = [
    "All",
    "Bank Transfer",
    "Wallet Transfer",
    "Chipper Cash",
    "PayStack",
    "Palmpay",
  ];
  const [selectedFilter, setSelectedFilter] = useState(filterMethods[0]);

  return (
    <View className="py-5">
      <Text className="mb-3">Payment Methods</Text>
      <View className="flex-row mb-5 gap-x-3 flex-wrap">
        {filterMethods.map((type, i) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedFilter(type);
            }}
            key={type}
            className={`py-3 px-5 rounded-lg mb-2 ${
              selectedFilter === type ? "bg-primary" : "bg-[#fafafa]"
            }`}
          >
            <Text
              className={`font-light text-sm ${
                selectedFilter === type ? "text-white" : ""
              }`}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <PrimaryButton text={"Apply Filter"} />
    </View>
  );
};

export default FilterMethods;
