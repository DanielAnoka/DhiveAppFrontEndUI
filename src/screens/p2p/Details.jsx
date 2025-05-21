import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";
import { Icons } from "../../constants/icon";
import { LinearGradient } from "expo-linear-gradient";

const Details = ({ onClick, isAppealPage }) => {
  const navigate = useNavigate();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 ">
        <View className="flex-row justify-between mb-6 items-center">
          <View className="flex-row bg-white mb-3 p-2 items-center gap-x-1 rounded-2xl">
            <AntDesign name="user" size={15} />
            <Text>Pomaline</Text>
            <MaterialIcons name="verified" color={"#6172F3"} />
          </View>
          <TouchableOpacity onPress={() => navigate("/chat-support")}>
            <LinearGradient
              colors={["#6172F3", "#444CE7", "#2D31A6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="flex-row justify-center pr-2 py-2 items-center gap-x-2 rounded-3xl"
            >
              <Image source={Icons.Messagenotif} className="w-4 h-4" />

              <Text className="text-white">Chat</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Payment Method</Text>
          <Text className="font-medium">Wallet Transfer</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Wallet Name</Text>
          <Text className=" font-medium">Pomaline</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Wallet Address</Text>
          <Text className="font-medium text-primary">0x4573DF...6e90fg</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Wallet Tag</Text>
          <Text className=" font-medium">USDC</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Phone Number</Text>
          <Text className="font-medium">07066128032</Text>
        </View>
      </View>
      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-8">
        <View className="flex-row justify-between mb-6 items-center">
          <Text>Pay the Seller within</Text>
          <View className="border border-primary flex-row justify-center items-center h-12 w-12 rounded-full">
            <Text className="text-primary text-xs">14:59</Text>
          </View>
        </View>

        <Text>Terms</Text>
        <Text className="font-light mb-10 text-textgray text-sm mt-3">
          No third party payment is allowed, such payment will be refunded
          immediately and please do not write any crypto related words.
        </Text>
      </View>
      {isAppealPage ? (
        <PrimaryButton onPress={onClick} text={"Make An Appeal"} />
      ) : (
        <View>
          <PrimaryButton onPress={onClick} text={"I Have Made This Payment"} />

          <TouchableOpacity
            onPress={() => navigate(-1)}
            className="flex-row w-full items-center justify-center py-5"
          >
            <Text className="text-primary">Cancel Transaction</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Details;
