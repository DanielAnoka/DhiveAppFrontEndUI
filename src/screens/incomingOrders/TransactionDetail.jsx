import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigate, useParams } from 'react-router-native';
import { Card } from '../../components/Card';
import Button from "../../components/Button"
import { Images } from '../../constants/image';

const TransactionDetail = () => {
    const [selected, setSelected] = useState('Completed');
    const navigate = useNavigate();
    const { transactionId } = useParams();

    const handleChat = () => {
        navigate('/message')
    }

    const statusOptions = [
        { key: '1', value: 'Completed' },
        { key: '2', value: 'Pending' },
        { key: '3', value: 'Cancelled' },
    ];

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
                    Order Details
                </Text>
            </View>

            <View className="px-5 pt-6">
                <Text className="text-gray-700 font-medium mb-2">Select Status Order</Text>
                <SelectList
                    data={statusOptions}
                    save="value"
                    defaultOption={{ key: '1', value: 'Completed' }}
                    boxStyles={{ backgroundColor: '#F9FAFB' }}
                    setSelected={setSelected}
                    selected={selected}
                />
            </View>
            <View className="px-3">
                <ScrollView className=" px-5 mt-4" contentContainerStyle={{ paddingBottom: 120 }}>

                    <View className="mt-6 space-y-4">
                        <View>
                            <Text className="text-gray-400">Order ID</Text>
                            <Text className="font-medium text-lg">#{transactionId}</Text>
                        </View>

                        <View>
                            <Text className="text-gray-400">Created</Text>
                            <Text className="font-medium text-base">May 1, 2025 at 10:30 AM</Text>
                        </View>

                        <View>
                            <Text className="text-gray-400">Customer</Text>
                            <Text className="font-medium text-base">Promise Moses</Text>
                        </View>

                        <View>
                            <Text className="text-gray-400">Shipping Address</Text>
                            <Text className="font-medium text-base">
                                123 Main St. Anytown, CA 12345
                            </Text>
                        </View>

                        <View>
                            <Text className="text-gray-400">Phone Line</Text>
                            <Text className="font-medium text-base">07089689002</Text>
                        </View>
                    </View>

                    <View className="mt-8">

                        <Text className="text-gray-700 font-medium mb-5 text-center text-[14px] ">Product</Text>

                        <Card className="p-4 bg-white border border-gray-200 rounded-xl">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-gray-900 font-medium">Apple Watch Series 8</Text>
                                <Text className="text-indigo-600 ">$85.5 USDC - $600</Text>
                            </View>
                            <Text className="text-gray-500 text-sm mt-1">Quantity 2 x $300.00</Text>

                            <Text className="text-[#8F96A1] mt-4">- - - - - - - - - - - - - - - - - - - - - - - - - - - -  - -  </Text>
                            <View className="mt-4 space-y-2">
                                <View className="flex-row justify-between mb-2">
                                    <Text className="text-gray-900 font-medium">Subtotal</Text>
                                    <Text className="text-[#444CE7] ">$600</Text>
                                </View>
                                <Text className="text-[#8F96A1]">- - - - - - - - - - - - - - - - - - - - - - - - - - - -  - -  </Text>
                                <View className="">
                                    <Text className="text-gray-900 font-medium">Discount</Text>
                                    <View className="flex-row justify-between ">
                                        <Text className="text-gray-500 font-medium">0.0% off</Text>
                                        <Text className="text-[#444CE7] ">-$0.00</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </View>

                    <View className="mt-4">
                        <Image source={Images.Down} className="w-[343px] h-[100px] rounded-md" />
                    </View>


                    <View className="mt-4 p-3 bg-orange-100 border border-orange-400 rounded-md">
                        <Text className="text-orange-700 text-sm">
                            Message your customer to further discuss shipping fees.
                        </Text>
                    </View>

                    <View className="mt-6 space-y-3 mb-10">
                        <Button text='Message Customer' className="bg-white" textStyle={{ color: '#252B37' }} onPress={handleChat} />
                        <Button text='Order Completed' className="bg-[#717680] text-white" />
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default TransactionDetail;
