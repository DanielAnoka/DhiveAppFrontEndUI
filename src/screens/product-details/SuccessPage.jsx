import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Images } from "../../constants/image";
import PrimaryButton from "../../components/PrimaryButton";

const SuccessPage = ({ viewOrder }) => {
  return (
    <View
      className="flex-col justify-center gap-y-5 pt-10 pb-3 px-3 items-center"
      //   style={{ height: 0.6 * height }}
    >
      <View className="p-3 bg-[#F5F5F5] rounded-full">
        <Image source={Images.Confetti} className="w-[64px] h-[64px]" />
      </View>
      <Text className="font-medium text-lg">Successful</Text>

      <Text className="font-medium flex-row text-sm gap-1  text-center">
        <Text className="font-light text-center">
          You have successfully purchased{" "}
        </Text>
        Apple Watch Series 9 (Pink), from Next-Gen Electronics, You can always
        check your Order page to revisit this product again.
      </Text>
      <View className="mb-5 pt-10 w-full flex-col items-center">
        <TouchableOpacity onPress={viewOrder} className="py-4 mb-3">
          <Text className="text-primary">View Your Order</Text>
        </TouchableOpacity>
        <PrimaryButton text={"Message The Business"} width={"100%"} />
      </View>

      <Text className="font-medium flex-row text-sm w-[80%] mt-5 gap-1 text-primary text-center">
        <Text className="font-light text-center text-black">
          Having any issues with this transaction? Reach out to us via our{" "}
        </Text>
        Support Channel.
      </Text>
    </View>
  );
};

export default SuccessPage;
