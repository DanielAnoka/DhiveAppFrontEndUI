import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const TokenChart = ({ percentage, chartData }) => {
  return (
    <View className="items-center">
      {/* Percentage centered above chart */}
      <Text className="text-green-500 font-semibold text-sm mb-1">{percentage}</Text>

      <LineChart
        data={{
          labels: [],
          datasets: [{ data: chartData }],
        }}
        width={120}
        height={60}
        withDots={false}
        withInnerLines={true}
        withOuterLines={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          fillShadowGradient: 'rgba(34,197,94,0.15)',
          fillShadowGradientOpacity: 1,
          color: () => `rgba(34,197,94,1)`,
          strokeWidth: 2,
          propsForBackgroundLines: {
            stroke: '#d1fae5',
            strokeDasharray: '4',
          },
        }}
        bezier
        style={{
          marginTop: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }}
      />
    </View>
  );
};

export default TokenChart;
