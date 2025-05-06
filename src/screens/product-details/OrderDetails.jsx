import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <View>
      <View className="my-5 w-full">
        <Text className="mb-5 text-lg">Transaction Details</Text>
        <Text className="mb-2 text-4xl text-center">$600</Text>
      </View>

      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Product</Text>
          <Text className=" font-medium">Apply Watch Series 9</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Quantity</Text>
          <Text className="font-medium">2</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Reference ID</Text>
          <Text className="font-medium">090338839CP</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Status</Text>
          <Text className="text-[#17B26A] font-medium">Successful</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Transaction Hash</Text>
          <Text className="font-medium">090338839</Text>
        </View>

        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Time</Text>
          <Text className=" font-medium">Apr 26, 2025 - 7:10PM</Text>
        </View>
      </View>
      <View className="w-full bg-[#F5F5F5] py-1 flex justify-center items-center">
        <Text>NOTE</Text>
      </View>
      <View className="shadow-2xl bg-white mx-3 p-5 my-5">
        <View className="h-2 w-10 rounded-md bg-[#F5F5F5] mb-5 mx-auto"></View>
        <Text>
          Mark the the button as received if you have gotten the product.
        </Text>
      </View>
      <View className="mb-5">
        <PrimaryButton
          onPress={() => navigate("/delivery-contact")}
          text={"I Have Received This Product"}
        />
      </View>
      <Text className="font-medium flex-row text-sm  px-10 mb-5 w-full mt-5 gap-1 text-primary text-center">
        <Text className="font-light text-center text-black">
          Having any issues with this transaction? Reach out to us via our{" "}
        </Text>
        Support Channel.
      </Text>
    </View>
  );
};

export default OrderDetails;
