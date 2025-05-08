import { View, Text } from 'react-native';
import React from 'react';

const DetailRow = ({ label, value, valueColor = "#000" }) => {
  return (
    <View className="flex-row justify-between mb-6">
      <Text className="text-sm text-gray-500">{label}</Text>
      <Text 
        className="text-sm font-semibold"
        style={{ color: valueColor }}
      >
        {value}
      </Text>
    </View>
  );
};

export default DetailRow;
