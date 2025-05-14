import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ManagementCards from "./ManagementCards";
import Physical from "./physicalProudct";
import DigitalProduct from "./digitalProduct";

const RenderPage = ({ page, searchQuery }) => {
  return (
    <View className="pb-52 mb-10">
      {page === "Physical Products" ? (
        <Physical searchQuery={searchQuery} />
      ) : (
        <DigitalProduct searchQuery={searchQuery} />
      )}
    </View>
  );
};

const Tabs = ({ page, setPage }) => {
  const tabs = ["Physical Products", "Digital Products"];
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      {/* Tabs */}
      <View className="bg-[#FAFAFA] mt-5 flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
        {tabs.map((tab) => {
          const isActive = page === tab;

          return (
            <View key={tab} className="flex-1 px-1">
              <TouchableOpacity
                onPress={() => setPage(tab)}
                className={`${
                  isActive ? "bg-white shadow-sm" : ""
                } flex items-center justify-center rounded-md py-2.5`}
              >
                <Text
                  className={`font-medium ${
                    isActive ? "text-black" : "text-gray-500"
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      {/* Search Input */}
      <View className="mt-4 px-1">
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="bg-white border border-[#E9EAEB] rounded-md px-4 py-3 text-sm"
          placeholderTextColor="#999"
        />
      </View>

      {/* Tab Content */}
      <RenderPage page={page} searchQuery={searchQuery} />
    </View>
  );
};

export default Tabs;
