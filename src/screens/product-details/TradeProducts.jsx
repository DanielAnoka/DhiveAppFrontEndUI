import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import { filterTypes } from "../../constants";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import { Images } from "../../constants/image";

const TradeProducts = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(filterTypes[0]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  return (
    <SafeAreaView className="bg-[#FDFDFD] px-5">
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />

      <View className={"flex-col bg-background  h-full justify-between"}>
        <ContainerWrapper>
          <View className="flex-row w-full items-center justify-between">
            <View className="flex-row items-center gap-2">
              <TouchableOpacity onPress={() => navigate(-1)}>
                <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                  <Ionicons name="chevron-back" size={20} color="#000" />
                </View>
              </TouchableOpacity>

              <Text className="text-lg font-semibold">Swiftrole’s Dhive</Text>
            </View>
            <TouchableOpacity>
              <View className="px-1.5 py-2 flex-row items-center justify-center gap-x-0.5 border border-[#00011B33] rounded-md">
                <View className="w-1 h-1 bg-black rounded-full" />
                <View className="w-1 h-1 bg-black rounded-full" />
                <View className="w-1 h-1 bg-black rounded-full" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center mt-5">
            <View className="flex-row gap-x-2.5 mt-2.5 items-center">
              <Image
                source={Images.Avatar}
                resizeMode="contain"
                className="w-12 h-12"
              />
              <View>
                <Text className="mb-1 font-semibold text-lg">
                  Swiftrole’s Dhive
                </Text>
                <View className="flex-row items-center gap-x-1">
                  <View className="bg-[#F5F5F5] flex-row items-center gap-x-2  py-0.5 px-1 rounded-md">
                    <Image
                      source={Images.AU}
                      resizeMode="contain"
                      className="w-4 h-4"
                    />
                    <Text className="text-sm text-center ">$STL</Text>
                  </View>
                  <View className="flex-row items-center gap-x-1 py-0.5 px-1 rounded-md">
                    <AntDesign name="user" size={18} />
                    <Text className="text-sm text-center ">16.3k</Text>
                  </View>
                </View>
              </View>
            </View>
            <PrimaryButton text={"Follow"} />
          </View>
          <Text className="my-5 text-[#535862]">
            Empowering businessess through tokenization
          </Text>

          <View className="flex-row items-center gap-x-2 my-1.5">
            <View className="bg-[#F8F9FC] flex-row gap-x-1 items-center p-1 border border-[#D5D9EB] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#4E5BA6]" />
              <Text className="text-[#363F72] ">Ox79....107hg</Text>
            </View>
            <View className="bg-[#EEF4FF] flex-row gap-x-1 items-center p-1 border border-[#C7D7FE] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#6172F3]" />
              <Text className="text-[#3538CD] ">Technology</Text>
            </View>
            <View className="bg-[#ECFDF3] flex-row gap-x-1 items-center p-1 border border-[#ABEFC6] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#4E5BA6]" />
              <Text className="text-[#067647] ">Ox79....107hg</Text>
            </View>
          </View>
          <View className="bg-[#FAFAFA] mt-5 flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
            <View className="px-1 w-1/3">
              <TouchableOpacity className="bg-white  flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
                <Text>Trade</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="w-1/3 flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
              <Text className="text-[#717680]">Products</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-1/3 flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
              <Text className="text-[#717680]">Reviews</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white shadow-lg p-5 mt-5 rounded-t-lg">
            <View className="h-2 w-10 rounded-md bg-[#F5F5F5] mb-5 mx-auto" />

            <View className="flex-row justify-between items-center mt-5">
              <View className="flex-row gap-x-2.5 mt-2.5 items-center">
                <Image
                  source={Images.Avatar}
                  resizeMode="contain"
                  className="w-12 h-12"
                />
                <View>
                  <Text className="mb-1 font-semibold text-lg">$STL</Text>
                  <Text className="mb-1 text-sm font-light">$10.00</Text>
                </View>
              </View>
              <View>
                <Text>Ox91.....D26cab</Text>
              </View>
            </View>
          </View>
        </ContainerWrapper>
        <PrimaryButton text={"Apply"} />
      </View>
    </SafeAreaView>
  );
};

export default TradeProducts;
