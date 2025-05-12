import { View, Text, Image } from "react-native";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import { Icons } from "../../constants/icon";

const Details = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <View>
      <View className="my-5 w-full">
        <Text className="mb-5 text-lg">Transaction Details</Text>
        <View className="w-full justify-center items-center">
          <View className="flex-row mb-2 items-center relative justify-center w-full">
            <Image source={Images.Avatar} className="w-[60px] mr-12 h-[60px]" />

            <Image
              source={Icons.Ethereum}
              className="absolute -top-2.5 right-[32%]"
            />
          </View>

          <Text className="mb-2 text-4xl text-center">$80.00</Text>
          <Text className="text-sm">
            Swap From <Text className="font-semibold">ETH </Text>-
            <Text className="font-semibold"> NGE</Text>
          </Text>
        </View>
      </View>

      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Swap From</Text>
          <Text className=" font-medium">0.00432 ETH</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Swap To</Text>
          <Text className="font-medium">3,584,234,566.899 NGE</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Purchase Rate</Text>
          <Text className="font-medium">1 ETH ~ 22,000 NGE</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Reference ID</Text>
          <Text className="font-medium">090338839DH</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Status</Text>
          <Text className="text-[#17B26A] font-medium">Success</Text>
        </View>

        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Time Stamp</Text>
          <Text className=" font-medium">Apr 26, 2025 - 5:00PM</Text>
        </View>
      </View>

      <View className="my-5">
        <PrimaryButton onPress={onClick} text={"Done"} />
      </View>
      <Text className="font-medium flex-row text-sm  px-10 mb-5 w-full mt-5 gap-1 text-primary text-center">
        <Text className="font-light text-center text-[#00011BB2]">
          Having any issues with this transaction? Reach out to us via our{" "}
        </Text>
        Support Channel.
      </Text>
    </View>
  );
};

export default Details;
