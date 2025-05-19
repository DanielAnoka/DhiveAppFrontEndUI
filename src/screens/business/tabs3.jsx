import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProductSales from "./ProductSales";
import Social from "./Social";

const RenderPage = ({ page }) => {
    return (
        <View className="pb-52 mb-10">
            {page === "Product Sales" ? (
                <ProductSales />
            ) : (
                <Social />
            )}
        </View>
    );
};

const Tabs3 = ({ page, setPage }) => {
    const tabs = ["Product Sales", "Social Engagements"];

    return (
        <View>
            <View className="bg-[#FAFAFA] mt-5 flex-row justify-between  py-1 rounded-md border border-[#E9EAEB]">
                {tabs.map((tab) => {
                    const isActive = page === tab;

                    return (
                        <View key={tab} className="flex-1 px-1">
                            <TouchableOpacity
                                onPress={() => setPage(tab)}
                                className={`${isActive ? "bg-white shadow-sm" : ""
                                    } flex items-center justify-center rounded-md py-2.5`}
                            >
                                <Text
                                    className={`font-medium ${isActive ? "text-black" : "text-gray-500"}`}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
            <RenderPage page={page} />
        </View>
    );
};

export default Tabs3;
