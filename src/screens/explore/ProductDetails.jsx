import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import { filterTypes } from "../../constants";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import FilterTypeModal from "./FilterTypeModal";
import { Images } from "../../constants/image";
import { Icons } from "../../constants/icon";
// import { Images, walletOptions } from "../../constants";
// import PrimaryButton from "../../components/PrimaryButton";
// import SecondaryButton from "../../components/SecondaryButton";

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView className="bg-[#FDFDFD] px-5">
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#FDFDFD",
          paddingBottom: 120,
        }}
      >
        <ContainerWrapper>
          <View className="flex-row w-full items-center justify-between">
            <TouchableOpacity onPress={() => navigate(-1)}>
              <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                <Ionicons name="chevron-back" size={20} color="#000" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate("/filter")}
              className="p-2 bg-[#F5F5F5] rounded-full w-fit"
            >
              <Ionicons name="notifications-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View className="mt-10">
            <FlatList
              data={[Images.Product, Images.Product]}
              keyExtractor={(item) => Math.random() * 20}
              renderItem={({ item }) => (
                <View className="h-[200px] w-[320px] mr-2.5">
                  <Image
                    source={Images.Product}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                </View>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flexGrow: 0 }}
            />
          </View>
          <View className="flex-row justify-between items-center mt-5">
            <View className="flex-row gap-x-2.5 mt-2.5 items-center">
              <Image
                source={Images.Avatar}
                resizeMode="contain"
                className="w-12 h-12"
              />
              <View>
                <Text className="mb-1">Next-Gen Electronics</Text>
                <View className="bg-[#E9EAEB] w-1/3  h-fit p-0.5 rounded-md">
                  <Text className="text-sm text-center ">NGE</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-4">
              <Image source={Icons.Trade} className="w-6 h-6" />
              <Text className="text-primary">Trade</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-5">
            <Text className="mb-2 text-xl">Apple Watch Series 9 (Pink)</Text>
            <View className="flex-row gap-x-2">
              <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
                <Text className="font-light">Brand: </Text>
                <Text className="text-primary">Trade</Text>
              </View>
              <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
                <Text className="font-light">Category: </Text>
                <Text className="text-primary">Watch</Text>
              </View>
              <View className="flex-1 flex-row justify-end items-end">
                <TouchableOpacity className="bg-primary flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
                  <Text className="text-white">Follow</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row gap-x-1 mt-3 items-center">
              <Text className="text-2xl ">132.78</Text>
              <Text className="text-[#535862] pt-1">usdt</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2 my-1.5">
            <Text className="text-primary text-lg">$300</Text>
            <View className="bg-[#FEF3F2] flex-row gap-x-1 items-center p-1 border border-[#FECDCA] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#B42318]" />
              <Text className="text-[#B42318] ">100 Unit Left</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-1.5">
            <View className="bg-[#F59E0B] p-1 rounded-md">
              <AntDesign name="star" size={15} color="#fff" />
            </View>
            <Text className="text-lg">4.2</Text>
            <Text className="text-lg font-light text-[#717680]">(41)</Text>
          </View>
          <View className="bg-[#FAFAFA] mt-5 flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
            <View className="px-1 w-1/2">
              <TouchableOpacity className="bg-white  flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
                <Text>Description</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="w-1/2 flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
              <Text className="text-[#717680]">Specifications</Text>
            </TouchableOpacity>
          </View>
          <Text className="mt-5 text-[#535862] text-sm">
            CARBON NEUTRAL — An aluminium Apple Watch Series 9 paired with the
            latest Sport Loop is carbon neutral. WHY APPLE WATCH SERIES 9 — Your
            essential companion for a healthy life is now even more powerful.
            The S9 chip enables a super-bright display and a magical new way to
            quickly and easily interact with your Apple Watch without touching
            the screen. Advanced health, safety and activity features provide
            powerful insights and help when you need it. And redesigned apps in
            watchOS give you more information at a glance.
          </Text>
          <Text className="my-5 text-lg">Ratings & Reviews</Text>
        </ContainerWrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
