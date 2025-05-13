import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import Feather from "react-native-vector-icons/Feather";
import { Images } from "../../constants/image";

const CreateBuyORSellOffer = ({ onClick }) => {
  return (
    <View className="h-full">
      <Text className="my-3">Select Assets</Text>
      <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
        <TextInput
          className="flex-1 h-full font-light"
          placeholder="Select Asset to Buy"
          placeholderTextColor={"#535862"}
        />

        <Feather name="chevron-down" size={13} color="#00011B80" />
      </View>
      <Text className="my-3">Wait Time</Text>
      <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
        <TextInput
          className="flex-1 h-full font-light"
          placeholder="2 Hours"
          placeholderTextColor={"#535862"}
        />

        <Feather name="chevron-down" size={13} color="#00011B80" />
      </View>

      <View className="flex-row w-full mt-5 gap-x-2 items-center">
        <View className="w-1/2">
          <Text className="mb-3">Min Buy Volume</Text>
          <View className="bg-white p-2 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
            <TextInput
              className="flex-1 h-full font-light"
              placeholder="900"
              placeholderTextColor={"#535862"}
            />

            <View className="bg-[#F7931A40] rounded-full p-1">
              <View className="bg-[#F7931A] rounded-full p-0.5">
                <Image
                  source={Images.Btc}
                  resizeMode="contain"
                  className="w-4 h-4"
                />
              </View>
            </View>
          </View>
        </View>
        <View className="w-1/2">
          <Text className="mb-3">Max Buy Volume</Text>
          <View className="bg-white px-2 py-2 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
            <TextInput
              className="flex-1 h-full font-light"
              placeholder="900"
              placeholderTextColor={"#535862"}
            />

            <View className="bg-[#F7931A40] rounded-full p-1">
              <View className="bg-[#F7931A] rounded-full p-0.5">
                <Image
                  source={Images.Btc}
                  resizeMode="contain"
                  className="w-4 h-4"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text className="my-3">Rate</Text>

      <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
        <TextInput className="flex-1 h-full" placeholder="Preferred Rate" />

        <TouchableOpacity>
          <View className="flex-row bg-[#FAFAFA]  p-1 items-center gap-x-1 rounded-2xl">
            <Image source={Images.Gradient} className="w-3 h-3" />

            <Text className="text-xs">USDC</Text>
            <Feather name="chevron-down" size={13} color="#00011B80" />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between my-3 items-center">
        <Text className="text-textgray font-light">Min Buy Amount</Text>
        <Text className=" font-medium">0 USDC</Text>
      </View>
      <View className="flex-row justify-between mb-6 items-center">
        <Text className="text-textgray font-light">Max Buy Amount</Text>
        <Text className="font-medium">0 USDC</Text>
      </View>

      <View className="absolute bottom-4 w-[95%]">
        <PrimaryButton onPress={onClick} text={"Continue"} width={"100%"} />
      </View>
    </View>
  );
};

export default CreateBuyORSellOffer;
