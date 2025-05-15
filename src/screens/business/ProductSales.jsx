import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import CryptoChart from './Chat';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dropdown from "../../components/Dropdown";


const analyticsData = [
    {
        title: 'Total Revenue',
        value: '$28,923.98',
        tooltipTitle: 'Total Amount Sold',
        tooltipDesc: 'This is the total amount you have made from selling this product.',
    },
    {
        title: 'Total Units',
        value: '256',
        tooltipTitle: 'Successful Sales',
        tooltipDesc: 'Number of transactions completed successfully.',
    },
    {
        title: 'Total Units Sold',
        value: '167',
        tooltipTitle: 'Abandoned Sales',
        tooltipDesc: 'Transactions that were started but not completed.',
    },

];

const ProductSales = () => {
    const [tooltipIndex, setTooltipIndex] = useState(null);
    return (
        <View className="mt-6">
            <ScrollView showsVerticalScrollIndicator={false} className="px-4">
                {analyticsData.map((item, index) => (
                    <View key={index} className="relative mb-4">

                        <View className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm min-h-[120px]">
                            <View className="flex-row justify-between items-start mb-2">
                                <Text className="text-sm text-gray-600">{item.title}</Text>
                                <TouchableOpacity >
                                    <Icon name="information-circle-outline" size={18} color="#888" />
                                </TouchableOpacity>
                            </View>

                            <Text className="text-xl font-semibold text-black">
                                {item.value}
                            </Text>
                        </View>


                        {tooltipIndex === index && (
                            <View
                                className="absolute right-0 top-0 mt-2 bg-white rounded-2xl shadow-xl w-60 px-5 py-4"
                                style={{ zIndex: 999, elevation: 10 }}
                            >
                                <Text className="text-sm font-semibold mb-1">
                                    {item.tooltipTitle}
                                </Text>
                                <Text className="text-xs text-gray-600 mb-4">
                                    {item.tooltipDesc}
                                </Text>
                                <TouchableOpacity
                                    onPress={closeTooltip}
                                    className="bg-gray-100 py-2 rounded-xl items-center"
                                >
                                    <Text className="text-sm font-medium">Okay</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
                <View className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm min-h-[120px]">
                    <View className="flex-row justify-between items-start mb-2">
                        <Text className="text-[15px] text-[#383B42] font-[400]">Sales Revenue</Text>
                        <TouchableOpacity >
                            <Icon name="information-circle-outline" size={18} color="#888" />
                        </TouchableOpacity>
                    </View>

                    <View className="">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-x-1">
                                <Text className="text-xl font-semibold">$201,865,345STL</Text>
                            </View>
                            <View className="flex-row gap-x-1 item-center">
                                <AntDesign name="arrowup" color={"#17B26A"} style={{marginTop:2}} />
                                <Text className="text-[#17B26A]">9.42505172%</Text>
                            </View>

                        </View>
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
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductSales