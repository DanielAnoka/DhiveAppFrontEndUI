import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";

const TransactionDetails = ({
  onClick,
  name,
  brand,
  category,
  purchasePower,
  quantity,
  unitAmount,
  total,
  sender,
  networkFee,
  estTime,
}) => {
  return (
    <View>
      <View className="mt-5">
        <Text className="mb-5 text-lg">Confirm Transaction</Text>
        <Text className="mb-2 text-xl">{name}</Text>
        <View className="flex-row gap-x-2">
          <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
            <Text className="font-light">Brand: </Text>
            <Text className="text-primary">{brand}</Text>
          </View>
          <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
            <Text className="font-light">Category: </Text>
            <Text className="text-primary">{category}</Text>
          </View>
        </View>
      </View>

      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Your Purchase Power</Text>
          <Text className="text-primary font-medium">{purchasePower}</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Quantity</Text>
          <Text className="font-medium">{quantity}</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Unit Amount</Text>
          <Text className="font-medium">{unitAmount}</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Total</Text>
          <Text className="text-primary font-medium">{total}</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Sender</Text>
          <Text className="font-medium">{sender}</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Network Fee</Text>
          <Text className="font-medium text-primary">{networkFee}</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Est. Time</Text>
          <Text className="text-primary font-medium">{estTime}</Text>
        </View>
      </View>
      <View className="mb-5">
        <PrimaryButton onPress={onClick} text={"Confirm Details"} />
      </View>
    </View>
  );
};

export default TransactionDetails;
