import { View, Text, Image } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { Images } from "../../constants/image";

const TransactionDetails = ({ onClick }) => {
  return (
    <View>
      <View className="w-full justify-center items-center">
        <View className="flex-row mb-2 items-center relative justify-center w-full">
          <Image source={Images.Avatar2} className="" />

          <Image source={Images.Avatar1} className="-m-2" />
        </View>

        <Text className="mb-2 text-3xl text-center">0.09839 USDC</Text>
        <Text className="text-sm">Successfully Released to</Text>
        <Text className="text-sm font-semibold pt-2">Dhive Wallet</Text>
      </View>

      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Dhiver's</Text>
          <Text className=" font-medium text-primary underline">Pomaline</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Asset</Text>
          <Text className="font-medium">Bitcoin(BTC)</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Currency</Text>
          <Text className="font-medium">USDC</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Rate</Text>
          <Text className="font-medium">$940</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Reference ID</Text>
          <Text className="font-medium">090338839DN</Text>
        </View>
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Status</Text>
          <Text className="text-[#17B26A] font-medium">Success</Text>
        </View>

        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Time Stamp</Text>
          <Text className=" font-medium">May 20, 2025 - 7:10PM</Text>
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

export default TransactionDetails;
