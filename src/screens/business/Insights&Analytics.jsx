import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useNavigate } from "react-router-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs3 from './tabs3';

const InsightsAnalytics = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState("Product Sales"); 

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
            <View className="flex-row items-center pt-5 px-5">
                <TouchableOpacity className="mr-2" onPress={() => navigate('/business')}>
                    <View className="w-[30px] h-[30px] rounded-full border border-black items-center justify-center">
                        <Ionicons name="chevron-back" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
                <Text className="text-[18px] text-black font-semibold flex-1 text-center -ml-8">
                    Insights & Analytics
                </Text>
            </View>
            <View className="px-3">
                <Tabs3 page={page} setPage={setPage} />
            </View>
        </SafeAreaView>
    );
};

export default InsightsAnalytics;
