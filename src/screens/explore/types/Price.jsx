import { View, Text } from "react-native";
import React from "react";
import CustomRangeSlider from "../../../components/RangeSlider";
import { useSlider } from "../_context";

const Price = () => {
  const { low, high, setLow, setHigh } = useSlider();
  return (
    <View>
      <CustomRangeSlider
        low={low}
        high={high}
        setLow={setLow}
        setHigh={setHigh}
      />
    </View>
  );
};

export default Price;
