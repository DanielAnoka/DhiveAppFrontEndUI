import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const categoryOptions = [
  "Electronics",
  "Phones & Accessories",
  "Computers & Laptops",
  "Smart Devices & Gadgets",
  "Home Appliances",
  "Audio Devices",
  "Fashion & Apparel",
  "Men's Clothing",
];
const Category = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View>
      {categoryOptions.map((item, i) => (
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

export default Category;
