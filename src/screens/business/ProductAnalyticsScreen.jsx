import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';

const analyticsData = [
    {
        title: 'Total amount sold',
        value: 'USDT 0',
        tooltipTitle: 'Total Amount Sold',
        tooltipDesc: 'This is the total amount you have made from selling this product.',
    },
    {
        title: 'Successful sales',
        value: '0',
        tooltipTitle: 'Successful Sales',
        tooltipDesc: 'Number of transactions completed successfully.',
    },
    {
        title: 'Abandoned sales',
        value: '0',
        tooltipTitle: 'Abandoned Sales',
        tooltipDesc: 'Transactions that were started but not completed.',
    },
    {
        title: 'Number of view',
        value: '0',
        tooltipTitle: 'Number of Views',
        tooltipDesc: 'How many times this product has been viewed.',
    },
    {
        title: 'Quantity remaining',
        value: '100',
        tooltipTitle: 'Quantity Remaining',
        tooltipDesc: 'Amount of product still available for sale.',
    },
];

export default function ProductAnalyticsScreen() {
    const [tooltipIndex, setTooltipIndex] = useState(null);
    const navigate = useNavigate();

    const closeTooltip = () => setTooltipIndex(null);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View>
                
                <View className="flex-row items-center mb-6 pt-5 px-5 mt-3">
                    <TouchableOpacity
                        className="mr-2"
                        onPress={() => navigate(-1)}
                    >
                        <View className="w-[30px] h-[30px] rounded-full border border-black items-center justify-center">
                            <Icon name="chevron-back" size={20} color="#000" />
                        </View>
                    </TouchableOpacity>
                    <Text className="text-lg font-semibold text-center flex-1">
                        Product Analytics
                    </Text>
                </View>

               
                <ScrollView showsVerticalScrollIndicator={false} className="px-4">
                    {analyticsData.map((item, index) => (
                        <View key={index} className="relative mb-4">
                            
                            <View className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm min-h-[120px]">
                                <View className="flex-row justify-between items-start mb-2">
                                    <Text className="text-sm text-gray-600">{item.title}</Text>
                                    <TouchableOpacity onPress={() => setTooltipIndex(index)}>
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
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}
