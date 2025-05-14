import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Trade from "./Trade";
import ManagementCards from "./ManagementCards";


const RenderPage = ({ page }) => {
  switch (page) {
    case "manage":
      return (
        <View className="pb-52 mb-10">
          <ManagementCards />
        </View>
      );
    case "feeds":
      return (
        <View className="pb-52 mb-10">
          <Text >
            hello
          </Text>
        </View>
      );
    case "trade":
    default:
      return (
        <View className="pb-52 mb-10">
          <Trade />
        </View>
      );
  }
};

const Tabs = ({ page, setPage }) => {
  const tabs = ["manage", "trade", "feeds"];

  return (
    <View>
      <View className="bg-[#FAFAFA] mt-5 flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
        {tabs.map((tab) => (
          <View className="px-1 w-1/3" key={tab}>
            <TouchableOpacity
              onPress={() => setPage(tab)}
              className={`${
                page === tab ? "bg-white" : ""
              } flex-row items-center justify-center rounded-md py-2.5 px-5`}
            >
              <Text className="capitalize font-medium text-black">
                {tab}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <RenderPage page={page} />
    </View>
  );
};

export default Tabs;
