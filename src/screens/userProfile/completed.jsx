import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../constants/image';
import { Icons } from '../../constants/icon';
import DetailRow from '../../components/DetailRow';
import CustomButton from '../../components/Button';
// Ensure BottomModal is imported if it's a custom modal component
import BottomModal from '../../components/BottomModal';

const completedOrders = [
    { id: 1, image: Images.Order, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 2, image: Images.Order2, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 3, image: Images.Order3, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
];

const CompletedOrders = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOrderPress = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const handleButtonPress = () => {
        // Your button press logic here, for example:
        console.log('Button pressed');
        setShowModal(false);  // Close the modal after pressing the button
    };

    return (
        <><FlatList
            data={completedOrders}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16 }}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => (
                <TouchableOpacity className="w-[48%] rounded-2xl mb-4 overflow-hidden relative" onPress={() => handleOrderPress(item)}>
                    <Image
                        source={item.image}
                        className="h-48 w-full rounded-2xl"
                        resizeMode="cover" />
                    <View className="absolute bottom-0 left-0 right-0 px-2 pb-2 pt-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                        <Text className="text-white font-semibold text-sm">{item.title}</Text>
                        <Text className="text-xs text-gray-300">{item.subtitle}</Text>
                    </View>
                    <View className="absolute top-2 left-2 bg-[#eeeef08c] p-1.5 rounded-full">
                        <Image source={Icons.Hill} className="w-5 h-5 tint-white" />
                    </View>
                </TouchableOpacity>
            )} /><BottomModal visible={showModal} onClose={() => setShowModal(false)} title="Transaction Details">
                {selectedOrder && (
                    <View className="space-y-3 px-1 pb-6">
                        <Text className="text-base font-semibold">Apple Watch Series 9 (Pink)</Text>

                        <View className="flex-row space-x-2">
                            <View className="flex-row items-center space-x-1 px-2 py-1 rounded-md bg-indigo-100">
                                <Text className="text-sm text-gray-500">Brand:</Text>
                                <Text className="text-sm font-medium text-blue-600">Apple</Text>
                            </View>

                            <View className="flex-row items-center space-x-1 px-2 py-1 rounded-md bg-indigo-100">
                                <Text className="text-sm text-gray-500">Category:</Text>
                                <Text className="text-sm font-medium text-blue-600">Watch</Text>
                            </View>
                        </View>

                        <View className="mt-4 flex-row space-x-2">
                            <View className="w-[90px] h-[63px] rounded-lg overflow-hidden">
                                <Image source={Images.Modal1} style={{ width: 90, height: 63 }} />
                            </View>

                            <View className="w-[90px] h-[63px] rounded-lg overflow-hidden">
                                <Image source={Images.Modal2} style={{ width: 90, height: 63 }} />
                            </View>

                            <View className="w-[90px] h-[63px] rounded-lg overflow-hidden">
                                <Image source={Images.Modal3} style={{ width: 90, height: 63 }} />
                            </View>

                            <View className="w-[90px] h-[63px] rounded-lg overflow-hidden">
                                <Image source={Images.Modal4} style={{ width: 90, height: 63 }} />
                            </View>
                        </View>
                        <View className="w-full bg-[#F9FAFB] rounded-lg p-4 mt-5">
                            <DetailRow label="Swap From:" value="0.00432 ETH" />
                            <DetailRow label="Swap To:" value="3,684,234.568 NGN" />
                            <DetailRow label="Purchase Rate:" value="1ETH = 22,000 NGN" />
                            <DetailRow label="Reference ID:" value="00953585OH" />
                            <DetailRow label="Status:" value="Completed" valueColor="#34C759" />
                            <DetailRow label="Time Stamp:" value=" April 25, 2025 - 5:00PM" />
                        </View>
                        <Text className="text-[#067647]  text-sm bg-[#a9efc5b1] p-4 rounded-md border border-[#A9EFC5]  mt-5 mb-5">
                            You have already mark this order as completed at your end.
                        </Text>

                        <CustomButton text='Received' className="mt-4 bg-[#717680]" onPress={handleButtonPress} disabled />
                        <Text className="text-center text-xs text-gray-400 mt-4">
                            Having any issues with this transaction?{`\n`}

                            Reach out to us via our <Text className="text-blue-500">Support Channel</Text>.
                        </Text>
                    </View>
                )}
            </BottomModal></>
    );
};

export default CompletedOrders;
