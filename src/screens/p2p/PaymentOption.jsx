import { View, Text, TextInput, Image } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import Feather from "react-native-vector-icons/Feather";
import { Images } from "../../constants/image";

const PaymentOption = ({ onClick }) => {
  return (
    <View className="h-full">
      <Text className="mb-5">
        You can add up to four assets payment for this buy offer
      </Text>
      <Text className="my-3">Select Asset Payment</Text>
      <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
        <TextInput
          className="flex-1 h-full font-light"
          placeholder="Select Asset to Buy"
          placeholderTextColor={"#535862"}
        />

        <Feather name="chevron-down" size={13} color="#00011B80" />
      </View>
      <Text className="my-3">Asset Address</Text>
      <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
        <TextInput
          className="flex-1 h-full font-light"
          placeholder="Enter Asset Address"
          placeholderTextColor={"#535862"}
        />

        <Feather name="chevron-down" size={13} color="#00011B80" />
      </View>

      <View className="flex-row w-full mt-5 gap-x-2 items-center">
        <View className="w-1/2 bg-white p-2 flex-row gap-x-2 items-center rounded-3xl bg-[#F7931A0D]">
          <View className="bg-[#F7931A40] rounded-full p-1">
            <View className="bg-[#F7931A] rounded-full p-0.5">
              <Image
                source={Images.Btc}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
          </View>
          <View>
            <Text className="font-medium">Bitcoin</Text>
            <Text className="text-[10px] text-textgray">0x4573DF...6e90fg</Text>
          </View>
        </View>
        <View className="w-1/2 bg-white p-2 flex-row gap-x-2 items-center rounded-3xl bg-[#F7931A0D]">
          <View className="bg-white rounded-full p-1">
            <Image
              source={Images.Gradient}
              resizeMode="contain"
              className="w-4 h-4"
            />
          </View>
          <View>
            <Text className="font-medium">USDT</Text>
            <Text className="text-[10px] text-textgray">0x4573DF...6e90fg</Text>
          </View>
        </View>
      </View>

      <View className="absolute bottom-4 w-[95%]">
        <PrimaryButton
          onPress={onClick}
          text={"Create Buy offer"}
          width={"100%"}
        />
      </View>
    </View>
  );
};

export default PaymentOption;
