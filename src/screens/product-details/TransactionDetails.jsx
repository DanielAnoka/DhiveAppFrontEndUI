import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";

const TransactionDetails = () => {
  const navigate = useNavigate();
  return (
    <View>
      <View className="mt-5">
        <Text className="mb-5 text-lg">Confirm Transaction</Text>
        <Text className="mb-2 text-xl">Apple Watch Series 9 (Pink)</Text>
        <View className="flex-row gap-x-2">
          <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
            <Text className="font-light">Brand: </Text>
            <Text className="text-primary">Trade</Text>
          </View>
          <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
            <Text className="font-light">Category: </Text>
            <Text className="text-primary">Watch</Text>
          </View>
        </View>
      </View>

      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Your Purchase Power</Text>
          <Text className="text-primary font-medium">2,000,000 USDC</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Quantity</Text>
          <Text className="font-medium">2</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Unit Amount</Text>
          <Text className="font-medium">132.75 USDC - $300</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Total</Text>
          <Text className="text-primary font-medium">265.5 USDC - $600</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Spender</Text>
          <Text className="font-medium">0x49e3b...oabeb3</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Network Fee</Text>
          <Text className="font-medium text-primary">$0.14</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Est. Time</Text>
          <Text className="text-primary font-medium">1 min.</Text>
        </View>
      </View>
      <View className="mb-5">
        <PrimaryButton
          onPress={() => navigate("/delivery-contact")}
          text={"Confirm Details"}
        />
      </View>
    </View>
  );
};

export default TransactionDetails;
