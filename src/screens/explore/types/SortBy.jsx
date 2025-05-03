import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const sortByOptions = [
  "Featured",
  "Recommended",
  "Most Recent",
  "Price: High to Low",
  "Price: Low to Hight",
];
const SortBy = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View className="mt-5 pb-10">
      {sortByOptions.map((item, i) => (
        <TouchableOpacity
          onPress={() => setSelectedIndex(i)}
          key={i}
          className={`py-3 px-5 flex-row justify-between ${
            i === selectedIndex && "bg-[#F5F8FF]"
          }`}
        >
          <Text>{item}</Text>
          {i === selectedIndex && (
            <Ionicons name="checkmark" size={20} color="#444CE7" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SortBy;
