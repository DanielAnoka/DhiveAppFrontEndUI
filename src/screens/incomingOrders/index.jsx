import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useNavigate } from "react-router-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from './tabs';

const Orders = () => {
    const [page, setPage] = useState("Order List"); 
    const navigate = useNavigate();
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
            <View className="flex-row items-center pt-5 px-5">
                <TouchableOpacity className="mr-2" onPress={() => navigate(-1)}>
                    <View className="w-[30px] h-[30px] rounded-full border border-black items-center justify-center">
                        <Ionicons name="chevron-back" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
                <Text className="text-[18px] text-black font-semibold flex-1 text-center -ml-8">
                    Incoming Orders
                </Text>
            </View>
            <View className="px-8 mt-7">
                <Text className="text-[#00011B] text-[14px]">
                    Click each of your order to view or have more information about it.
                </Text>
            </View>

            <View className="mt-1 px-2">
                <Tabs page={page} setPage={setPage} />
            </View>

        </SafeAreaView>
    )
}

export default Orders