import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

const ConfirmTransaction = ({ onClick }) => {
  return (
    <View className="pt-4">
      <Text className="text-lg">Confirm Transaction</Text>

      <View className="bg-[#FAFAFA] mb-5 rounded-xl py-3 px-5 mt-5">
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Price</Text>
          <Text className="text-primary font-medium">$1.00</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">To receive</Text>
          <Text className="font-medium">743,833,123,077.75623418</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Network Fee</Text>
          <Text className="text-primary font-medium">$0.14</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Slippage Tolerance</Text>
          <Text className="text-primary font-medium">0.50%</Text>
        </View>
      </View>
      <View className="mb-5">
        <PrimaryButton onPress={onClick} text={"Approve"} />
      </View>
    </View>
  );
};

export default ConfirmTransaction;
