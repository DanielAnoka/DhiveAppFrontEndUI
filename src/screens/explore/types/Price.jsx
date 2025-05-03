import { View, Text, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const CustomMarker = () => (
  <View className="w-7 h-7 bg-[#FFFFFF] p-1 rounded-full mt-1">
    <View className="bg-[#444CE7] w-full rounded-full h-full" />
  </View>
);

const Price = () => {
  const [range, setRange] = useState([10000, 20000]);
  const { width } = Dimensions.get("window");
  return (
    <View className="pb-20 pt-5" pointerEvents="box-none">
      <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
        <MultiSlider
          values={range}
          sliderLength={width * 0.9}
          onValuesChange={setRange}
          min={0}
          max={50000}
          step={1}
          allowOverlap={false}
          snapped
          selectedStyle={{ backgroundColor: "#444CE7" }}
          unselectedStyle={{ backgroundColor: "#C7D7FE" }}
          containerStyle={{ height: 40 }}
          trackStyle={{ height: 6, borderRadius: 3 }}
          customMarker={(e) => <CustomMarker currentValue={e.currentValue} />}
        />
      </View>
      <View className="flex-row gap-2 justify-between px-2.5 items-center w-full">
        <View className="flex-1">
          <Text className="text-[#717680] mb-2 mx-1">From</Text>
          <TextInput
            value={`$${range[0]}`}
            className="border border-[#D5D7DA] px-2 py-3 w-fit rounded-md"
          />
        </View>
        <View>
          <View className="border-t w-4" style={{ marginTop: 20 }} />
        </View>
        <View className="flex-1">
          <Text className="text-[#717680] mb-2 mx-1">To</Text>
          <TextInput
            value={`$${range[1]}`}
            className="border border-[#D5D7DA] px-2 py-3 w-fit rounded-md"
          />
        </View>
      </View>
    </View>
  );
};

export default Price;
