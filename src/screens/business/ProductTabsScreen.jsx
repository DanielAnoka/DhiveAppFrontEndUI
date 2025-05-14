import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigate } from "react-router-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Tabs from './tabs2';

const ProductTabsScreen = () => {
    const navigate = useNavigate();
     const [page, setPage] = useState("Physical Products");
    return (
        <SafeAreaView className="bg-[#FDFDFD] flex-1">
            <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
            <View className="flex-1 px-5 mt-5">
                <View className="flex-row w-full items-center justify-between mb-4">
                   
                    <View className="flex-row items-center gap-2">
                        <TouchableOpacity onPress={() => navigate(-1)}>
                            <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                                <Ionicons name="chevron-back" size={20} color="#000" />
                            </View>
                        </TouchableOpacity>
                        <Text className="text-lg font-semibold pl-4">Product Details</Text>
                    </View>

                   
                    <TouchableOpacity className="bg-transparent px-4 border py-2 rounded-xl">
                        <Text className="text-black   text-sm">Add Product +</Text>
                    </TouchableOpacity>
                </View>

                <Tabs page={page} setPage={setPage} />
            </View>
        </SafeAreaView>
    );
};

export default ProductTabsScreen;


