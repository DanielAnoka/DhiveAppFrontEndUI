import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import BottomModal from "../../components/BottomModal";
import { useState } from "react";
import FilterMethods from "./FilterMethods";

const P2PTrding = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  return (
    <SafeAreaView className="bg-[#1F235B] flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#1F235B" />

      <View className={"flex-1 bg-background"}>
        <View className="flex-row bg-[#1F235B] p-5  w-full items-center justify-between">
          <TouchableOpacity onPress={() => navigate(-1)}>
            <View className="w-[30px] h-[30px] rounded-full bg-transparent justify-center items-center border border-white">
              <Ionicons name="chevron-back" size={20} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text className="text-lg text-white">P2P Trading</Text>

          <TouchableOpacity onPress={() => setOpenModal((prev) => !prev)}>
            <View className="px-2.5 py-1.5 rounded-xl bg-transparent justify-center items-center border border-white">
              <AntDesign name="filter" size={17} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="p-5 flex-row justify-between items-center">
          <View>
            <View className="flex-row pl-5 gap-x-10 items-center">
              <Text className="text-lg text-primary">Buy</Text>
              <Text className="text-lg text-textgray">Sell</Text>
            </View>
            <View className="bg-[#717680] mt-2 w-36 h-0.5">
              <View className="bg-primary h-full w-1/2" />
            </View>
          </View>
          <View className="flex-row items-center gap-x-1 border border-[#D5D7DA] rounded-lg py-2 px-1">
            <Image source={Images.Btc} className="h-6 w-6 mr-1" />
            <Text>BTC</Text>
            <Feather name="chevron-down" size={20} color="#00011B80" />
          </View>
        </View>
        <View className="px-5">
          <View className="flex-row items-center gap-x-2 border border-[#F1F1F1] rounded-md px-2 py-5">
            <Ionicons name="search" color="#00011B" size={20} />

            <TextInput
              className="w-full font-light"
              // value={searchTerm}
              // onChangeText={(text) => setSearchTerm(text)}
              placeholder="Amount Range"
              placeholderTextColor={"#00011B"}
            />
          </View>
          <View className="flex-row justify-between mt-5">
            <View className="flex-row bg-[#FAFAFA] mb-3 p-2 items-center gap-x-1 rounded-2xl">
              <AntDesign name="user" />
              <Text>Pomaline</Text>
              <MaterialIcons name="verified" color={"#6172F3"} />
            </View>
            <Text className="text-2xl">$950.00</Text>
          </View>
          <View className="flex-row gap-x-1">
            <Text className="text-textgray font-light">Crypto Amount:</Text>
            <Text>255.77 BTC</Text>
          </View>
          <View className="flex-row gap-x-1 pt-1">
            <Text className="text-textgray font-light">Range:</Text>
            <Text> $500.00 - $10,000.00</Text>
          </View>
          <View className="flex-row justify-between items-center mt-2">
            <View className="flex-row gap-x-2 items-center">
              <View className="flex-row items-center gap-x-0.5">
                <FontAwesome name="thumbs-o-up" color={"#A4A7AE"} />

                <Text> 98%</Text>
              </View>
              <View className="flex-row items-center gap-x-0.5">
                <MaterialIcons name="alarm" color={"#A4A7AE"} />

                <Text>5 mins</Text>
              </View>
              <View className="flex-row items-center gap-x-0.5">
                <MaterialCommunityIcons
                  name="chart-box-outline"
                  color={"#A4A7AE"}
                />

                <Text>680 Trades</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigate("/buy-coin")}
              className="bg-[#18AB15] px-7 py-3 rounded-lg"
            >
              <Text className="text-white">Buy</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row border-b border-[#00011B1A] pb-5">
            <TouchableOpacity className="bg-[#FAFAFA] mt-5 p-1">
              <Text className="text-primary">Wallet Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomModal
        visible={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
        title={"Filter"}
      >
        {/* <Text>Hello</Text> */}
        <FilterMethods />
      </BottomModal>
    </SafeAreaView>
  );
};

export default P2PTrding;
