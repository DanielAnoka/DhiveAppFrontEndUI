import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Image } from "react-native";
import { Icons } from "../../constants/icon";

const PaymentMethod = ({ onComplete }) => {
  const paymentOptions = [
    {
      avatar: Icons.Dhives,
      option: "DHV",
    },
    {
      avatar: Icons.Dhives,
      option: "DFUEL",
    },
    {
      avatar: Icons.TetherUsdt,
      option: "USDT",
    },
  ];
  return (
    <View className="py-5 px-2 pb-14">
      <View className="my-5">
        <Text className="text-lg pb-1">Select Payment Options</Text>
        <Text className="text-xs">
          Select the wallet you want to make this payment from
        </Text>
      </View>

      <View className="  mt-5">
        {paymentOptions.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={onComplete}
            className="flex-row bg-[#FDFDFD] p-3 rounded-xl justify-between my-2 items-center"
          >
            <View className="flex-row items-center space-x-2">
              <Image
                source={item.avatar}
                resizeMode="contain"
                className="w-10 h-10 rounded-full"
              />
              <Text className="font-medium">{item.option}</Text>
            </View>
            <AntDesign name="right" size={10} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PaymentMethod;
