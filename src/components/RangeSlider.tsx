import React, { useState } from "react";
import { View, Text } from "react-native";
import RangeSlider from "rn-range-slider";

const CustomRangeSlider = ({ low, setLow, high, setHigh }) => {
  //   const [low, setLow] = useState(10);
  //   const [high, setHigh] = useState(90);

  return (
    <View style={{ padding: 20, height: 250 }}>
      <Text>
        Selected: {low} - {high}
      </Text>
      <RangeSlider
        style={{ width: "100%" }}
        min={0}
        max={100}
        step={1}
        low={low}
        high={high}
        floatingLabel
        renderThumb={() => (
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#444CE7",
              borderRadius: 10,
            }}
          />
        )}
        renderRail={() => (
          <View
            style={{
              flex: 1,
              height: 6,
              borderRadius: 10,
              backgroundColor: "#C7D7FE",
            }}
          />
        )}
        renderRailSelected={() => (
          <View style={{ height: 4, backgroundColor: "#444CE7" }} />
        )}
        onValueChanged={(low, high) => {
          setLow(low);
          setHigh(high);
        }}
      />
    </View>
  );
};

export default CustomRangeSlider;
