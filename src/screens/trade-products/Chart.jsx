import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const sampleCryptoData = {
  labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
  datasets: [
    {
      data: [7500, 18000, 7600, 27000, 35000, 68500, 65500, 55000, 68500], // Zigzag values
      strokeWidth: 4,
    },
  ],
};

const chartConfig = {
  backgroundColor: "#ffffff",
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(220, 0, 119, 1), ${opacity})`, // Line color (black or adjust as needed)
  labelColor: (opacity = 1) => `rgba(150, 150, 150, ${opacity})`, // #969696
  //   propsForDots: {
  //     r: "3",
  //     strokeWidth: "1",
  //     stroke: "#969696",
  //   },
  fillShadowGradient: "#FF52AF00",
  fillShadowGradientOpacity: 0.4,
  propsForBackgroundLines: {
    stroke: "rgba(218, 218, 218, 0.3)",

    // Axis line and grid line color
    // strokeDasharray: "-", // Solid line instead of dashed
  },
};

const CryptoChart = () => {
  return (
    <View className=" p-4 rounded">
      <LineChart
        data={sampleCryptoData}
        width={screenWidth - 32}
        height={280}
        chartConfig={chartConfig}
        bezier={false}
        style={{
          //   marginVertical: 8,
          borderRadius: 0,
          alignSelf: "center",
        }}
        withDots={false}
      />
    </View>
  );
};

export default CryptoChart;
