import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { Icons } from "../../constants/icon";
import { Images } from "../../constants/image";
import Ionicons from "react-native-vector-icons/Ionicons";

const Mentions = ({ onClick }) => {
  const [page, setPage] = useState("people");

  return (
    <View className="w-full bg-background p-5">
      <View className="flex-row w-full justify-between">
        <TouchableOpacity onPress={onClick}>
          <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
            <Ionicons name="chevron-back" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <Text className="text-lg font-medium">Mentions</Text>
        <View></View>
      </View>
      <View className="bg-[#FAFAFA] w-full mt-5  flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
        <View className="px-1 w-1/2">
          <TouchableOpacity
            onPress={() => setPage("people")}
            className={`${
              page === "people" && "bg-white"
            } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
          >
            <Text
              className={`${
                page !== "people" ? "text-[#717680]" : "text-[#414651]"
              } `}
            >
              People
            </Text>
          </TouchableOpacity>
        </View>
        <View className="px-1 w-1/2">
          <TouchableOpacity
            onPress={() => setPage("for you")}
            className={`${
              page !== "people" && "bg-white"
            } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
          >
            <Text
              className={`${
                page === "people" ? "text-[#717680]" : "text-[#414651]"
              } `}
            >
              Businesses
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="border w-full mt-3 px-3 py-4 border-[#F1F1F1] bg-white rounded-lg flex-row space-x-3 items-center ">
        <Image source={Icons.Search} className="w-5 h-5" />

        <TextInput
          className="h-full "
          placeholder="Search"
          placeholderTextColor={"#00011B"}
        />
      </View>
      <View className="flex-col space-y-3.5 mt-5">
        {["Numero Uno", "Dos", "Tras", "Ayo", "Daniel"].map((item, i) => (
          <View
            key={i}
            className="w-full flex-row justify-between items-center"
          >
            <View className="flex-row items-center space-x-2">
              <Image source={Images.ChatAvatar} className="w-10 h-10" />
              <View>
                <Text>{item}</Text>
                <Text className="text-xs text-textgray font-light">
                  deboraadebimpe
                </Text>
              </View>
            </View>
            <Image source={Icons.UserSearch} className="w-5 h-5" />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Mentions;
