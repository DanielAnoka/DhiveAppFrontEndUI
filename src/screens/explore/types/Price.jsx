import { View, Text, TextInput } from "react-native";
import React from "react";
import CustomRangeSlider from "../../../components/RangeSlider";
import { useSlider } from "../_context";

const Price = () => {
  const { low, high, setLow, setHigh } = useSlider();
  return (
    <View className="pb-20 pt-10">
      <CustomRangeSlider
        low={low}
        high={high}
        setLow={setLow}
        setHigh={setHigh}
      />
      <View className="flex-row gap-2 justify-between px-2.5 items-center w-full">
        <View className="flex-1">
          <Text className="text-[#717680]">From</Text>
          <TextInput
            value={`$${low}`}
            className="border border-[#D5D7DA] px-2 py-3 w-fit rounded-md"
          />
        </View>
        <View>
          <View className="border-t w-4" style={{ marginTop: 14 }} />
        </View>
        <View className="flex-1">
          <Text className="text-[#717680]">To</Text>
          <TextInput
            value={`$${low}`}
            className="border border-[#D5D7DA] px-2 py-3 w-fit rounded-md"
          />
        </View>
      </View>
    </View>
  );
};

export default Price;
