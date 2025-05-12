import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { Images } from "../../constants/image";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dropdown from "../../components/Dropdown";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import StepIndicator from "./StepIndicator";
import Table from "./Table";
import CryptoChart from "./Chart";

const Trade = ({ onClick }) => {
  return (
    <ScrollView>
      <View className="pb-64">
        <View className="bg-white shadow-lg pt-5 mx-1  mt-5 rounded-xl">
          <View className="h-2 w-10 rounded-md bg-[#F5F5F5] mb-5 mx-auto" />

          <View className="flex-row justify-between px-5 items-center mt-5">
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
            <View className="flex-row items-center gap-x-1">
              <Image source={Images.Gradient} className="w-5 h-5" />

              <Text>Ox91.....D26cab</Text>
            </View>
          </View>
          <View className="border bg-white border-[#E9E9E9]  rounded-xl shadow-xl mt-10 p-5">
            <View className="flex-row items-center gap-x-1">
              <AntDesign name="arrowup" color={"#17B26A"} />
              <Text className="text-[#17B26A]">9.42505172%</Text>
            </View>
            <Text className="text-2xl pt-3 font-semibold">$201,865,345STL</Text>
            <View className="flex-row items-center gap-x-2 mt-5">
              <View className="bg-[#F5F5F5] w-[80px] flex-row justify-between items-center px-2 py-1 rounded-md border border-[#E9EAEB]">
                <View className="px-1 w-1/2">
                  <TouchableOpacity
                    className={` bg-white flex-row items-center justify-center gap-x-2  text-primary rounded-md py-1`}
                  >
                    <FontAwesome6 name="chart-line" size={12} />
                  </TouchableOpacity>
                </View>
                <View className="px-1 w-1/2">
                  <TouchableOpacity
                    className={`flex-row items-center justify-center gap-x-2  text-primary rounded-md py-1`}
                  >
                    <EvilIcons name="chart" size={20} color={"#BCBCBC"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="border flex-row items-center gap-x-3 p-2 rounded-lg border-[#E9E9E9]">
                <Dropdown options={[{ value: "7 days" }]} />
                <AntDesign name="down" />
              </View>
            </View>
            <CryptoChart />
          </View>
          <View className="mb-5 mt-7 flex-row justify-around items-center">
            <View>
              <Text className="font-light text-[#6A6A6A] mb-1">
                Total Supply
              </Text>
              <Text className="text-2xl font-medium">109M</Text>
            </View>
            <View>
              <Text className="font-light text-[#6A6A6A] mb-1">Holders</Text>
              <Text className="text-2xl font-medium">12.6K</Text>
            </View>
            <View>
              <Text className="font-light text-[#6A6A6A] mb-1">Market Cap</Text>
              <Text className="text-2xl font-medium">$12.4M</Text>
            </View>
          </View>
        </View>
        <View className="p-5 rounded-xl border flex-col space-y-3 border-[#E9E9E9] mt-5">
          <Text className="font-light text-[#6A6A6A] mb-1">TVL</Text>
          <Text className="text-2xl font-medium">$2,316,524</Text>
          <View className="flex-row items-center gap-x-1">
            <Feather name="trending-up" color={"#00BA34"} />
            <Text className="text-[#00BA34]">+1%</Text>
            <Text className="text-[#636363] font-light pl-1">VS PREV. 24H</Text>
          </View>
        </View>
        <View className="bg-[#F5F5F5] mt-5 flex-row justify-between items-center px-2 py-1 rounded-md border border-[#E9EAEB]">
          <View className="px-1 w-1/2">
            <TouchableOpacity
              className={` bg-white flex-row py-3 items-center justify-center gap-x-2  text-primary rounded-md`}
            >
              <Text>Buy</Text>
            </TouchableOpacity>
          </View>
          <View className="px-1 w-1/2">
            <TouchableOpacity
              className={`flex-row py-3 items-center justify-center gap-x-2  text-primary rounded-md`}
            >
              <Text>Sell</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white mt-5 flex-row justify-between items-center px-2 py-1 rounded-md border border-[#E9EAEB]">
          <TextInput className="flex-1 h-full" placeholder="USDT Amount" />

          <TouchableOpacity
            className={`flex-row py-3 items-center justify-center gap-x-2  text-primary rounded-md`}
          >
            <Text className="text-[#717680]">USDT</Text>
          </TouchableOpacity>
        </View>
        <View className="my-5 flex-row justify-between items-center px-2 py-1">
          <Text>Avail Balance</Text>

          <Text>392.65 USDT</Text>
        </View>
        <StepIndicator />

        <View className="bg-white  flex-row justify-between items-center px-2 py-1 rounded-md border border-[#E9EAEB]">
          <TextInput className="flex-1 h-full" placeholder="Quantity" />

          <TouchableOpacity
            className={`flex-row py-3 items-center justify-center gap-x-2  text-primary rounded-md`}
          >
            <Text className="text-[#717680]">MART</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row bg-white mt-5">
          <View className="px-11 py-4 border-b border-[#E9EAEB]  items-center justify-center">
            <Text className="text-textgray">Account</Text>
          </View>

          <View className="px-11 py-4 border-b border-[#E9EAEB]  items-center justify-center">
            <Text className="text-textgray">Type</Text>
          </View>

          <View className="px-11 py-4 border-b border-[#E9EAEB]  items-center justify-center">
            <Text className="text-textgray">$GAX</Text>
          </View>
        </View>
        <View className="p-5 flex-col space-y-3 mt-5">
          <Text className="mb-1">Trades</Text>
          <Text className="text-2xl font-medium">24</Text>
          <View className="flex-row items-center gap-x-1">
            <Feather name="trending-up" color={"#067647"} />
            <Text className="text-[#067647]">+8.6%</Text>
            <Text className="text-[#636363] font-medium pl-1">
              vs last 30 days
            </Text>
          </View>
        </View>
        <Table />
        <View className="mt-5">
          <PrimaryButton onPress={onClick} text={"Buy"} />
          <SecondaryButton onPress={onClick} text={"Sell"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Trade;
