import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Images } from "../../constants/image";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import TokenChart from "./TokenChart";
import Tabs from "./Tabs";

const BusinessWall = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState("manage");
    return (
        <SafeAreaView className="bg-[#FDFDFD] flex-1">
            <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
            <View className="flex-1 bg-[#FDFDFD] px-5 mt-5">

                {/* Header (Fixed, not scrollable) */}
                <View className="flex-row w-full items-center justify-between mb-4">
                    <View className="flex-row items-center gap-2">
                        <TouchableOpacity onPress={() => navigate(-1)}>
                            <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                                <Ionicons name="chevron-back" size={20} color="#000" />
                            </View>
                        </TouchableOpacity>
                        <Text className="text-lg font-semibold pl-4">Business Wall</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                           
                            setIsModalOpen((prev) => !prev);
                        }}
                    >
                        <View className="px-1.5 py-2 flex-row items-center justify-center gap-x-0.5 border border-[#00011B33] rounded-md">
                            <View className="w-1 h-1 bg-black rounded-full" />
                            <View className="w-1 h-1 bg-black rounded-full" />
                            <View className="w-1 h-1 bg-black rounded-full" />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Scrollable content */}
                <ScrollView

                    showsVerticalScrollIndicator={false}
                >
                    <ContainerWrapper>
                        {/* Profile */}
                        <View className="flex-row justify-between items-center mt-2.5">
                            <View className="flex-row gap-x-2.5 items-center">
                                <Image
                                    source={Images.Avatar}
                                    resizeMode="contain"
                                    className="w-10 h-10"
                                />
                                <View>
                                    <Text className="mb-1 font-semibold text-base">
                                        Swiftrole,s Dhive
                                    </Text>
                                    <Text>Empowering businesses through tokenization</Text>
                                </View>
                            </View>
                        </View>

                        {/* Token Section */}
                        <View className="border bg-white border-[#E9E9E9] rounded-xl  mt-10 p-5">
                            <View className="flex-row justify-between mb-4 items-center">
                                <View className="flex-row items-center">
                                    <Image
                                        source={Images.Avatar}
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <View>
                                        <Text className="text-black font-bold text-base">$MART</Text>
                                        <Text className="text-gray-500 text-sm">$1.00</Text>
                                    </View>
                                </View>
                                <TokenChart
                                    percentage="+115.2%"
                                    chartData={[50, 70, 65, 80, 90, 110]}
                                />
                            </View>

                            <View
                                style={{
                                    borderStyle: "dotted",
                                    borderWidth: 1.2,
                                    borderColor: "#1D1B23",
                                    opacity: 0.08,
                                    width: 275,
                                    alignSelf: "center",
                                    marginVertical: 12,
                                }}
                            />

                            <View className="flex-row justify-between">
                                <View className="items-center flex-1">
                                    <Text className="text-gray-500 text-xs">Total Supply</Text>
                                    <Text className="text-black font-semibold text-sm">$5,000.00</Text>
                                </View>
                                <View className="items-center flex-1">
                                    <Text className="text-gray-500 text-xs">Holders</Text>
                                    <Text className="text-black font-semibold text-sm">30,000</Text>
                                </View>
                                <View className="items-center flex-1">
                                    <Text className="text-gray-500 text-xs">Market Cap</Text>
                                    <Text className="text-black font-semibold text-sm">$750.45K</Text>
                                </View>
                            </View>
                        </View>

                        {/* Escrow Balance */}
                        <View className="bg-white border-[#E9E9E9] mt-10 rounded-md px-4 py-3">
                            <Text className="font-semibold text-base">Escrow Balance</Text>
                            <View className="flex-row items-center justify-between py-0.5 px-1 rounded-md">
                                <Text className="text-black font-semibold text-lg">$6,000,000 USDT</Text>
                                <PrimaryButton text={"Withdraw"} />
                            </View>
                        </View>

                        {/* Menu Options */}
                        <View className="mt-5 space-y-3">
                            <TouchableOpacity className="flex-row items-center justify-between bg-[#FFFFFF] p-5 rounded-md">
                                <View className="flex-row items-center gap-x-2">
                                    <View className="w-10 h-10 rounded-full bg-[#e3e4e9a3] justify-center items-center">
                                        <Image
                                            source={Images.Dote}
                                            className="w-6 h-6"
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <Text className="text-base font-medium">View My Products</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#000" />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center justify-between bg-[#FFFFFF] p-5 rounded-md">
                                <View className="flex-row items-center gap-x-2">
                                    <View className="w-10 h-10 rounded-full bg-[#e3e4e9a3] justify-center items-center">
                                        <Image
                                            source={Images.Dote}
                                            className="w-6 h-6"
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <Text className="text-base font-medium">View Insight & Analytics</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>

                        <Tabs page={page} setPage={setPage} />
                    </ContainerWrapper>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default BusinessWall;
