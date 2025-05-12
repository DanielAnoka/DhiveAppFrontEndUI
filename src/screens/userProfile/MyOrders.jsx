// MyOrdersScreen.js
import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Alert,
    TextInput,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Icons } from '../../constants/icon';
import { Images } from '../../constants/image';
import { useNavigate } from 'react-router-native';
import BottomModal from '../../components/BottomModal';
import CustomButton from '../../components/Button';
import DetailRow from '../../components/DetailRow';
import CheckBox from '../../components/CheckBox';
import CompletedOrders from './completed';
import { orders } from '../../constants';




export default function MyOrdersScreen() {
    const [activeTab, setActiveTab] = useState('escrow');
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const [showNewModal, setShowNewModal] = useState(false);
    const [lastModal, setLastModal] = useState(false);
    const [isFirstChecked, setIsFirstChecked] = useState(false);
    const [isSecondChecked, setIsSecondChecked] = useState(false);
    const [pin, setPin] = useState(["", "", "", ""]);
    const pinInputs = useRef([]);
    const [showSuccess, setShowSuccess] = useState(false);


    const isButtonActive = isFirstChecked && isSecondChecked;

    const handleOrderPress = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };
    const handleButtonPress = () => {
        setShowModal(false);
        setShowNewModal(true);
    };

    const Pin = () => {
        setShowNewModal(false);
        setLastModal(true);
    }

    const handlePinChange = (value, index) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        if (value && index < 3) {
            pinInputs.current[index + 1]?.focus();
        } else if (!value && index > 0) {
            pinInputs.current[index - 1]?.focus();
        }

        const updatedPin = newPin.join("");
        if (updatedPin.length === 4) {
            setTimeout(() => {
                if (updatedPin === "1111") {
                    Keyboard.dismiss();
                    navigate("/success");
                } else {
                    Alert.alert("Invalid PIN", "The PIN you entered is incorrect.");
                    setPin(["", "", "", ""]);
                }
            }, 200);
        }
    };


    return (
        <SafeAreaView className="flex-1 bg-white pt-4">
            <View className="flex-row items-center justify-between h-14 mb-2 px-4">
                <TouchableOpacity
                    onPress={handleBack}
                    className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center mt-2"
                >
                    <Icon name="chevron-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="text-base font-medium text-[#00011B]">My Orders</Text>
                <View className="w-8" />
            </View>

            {/* Toggle Tabs */}
            <View className="flex-row mx-4 bg-gray-100 p-1 rounded-full mb-4">
                {['escrow', 'completed'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        className={`flex-1 py-2 rounded-full ${activeTab === tab ? 'bg-white shadow-sm' : ''}`}
                    >
                        <Text
                            className={`text-center text-sm font-medium ${activeTab === tab ? 'text-black' : 'text-gray-500'}`}
                        >
                            {tab === 'escrow' ? 'In Escrow' : 'Completed'}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {activeTab === 'escrow' ? (
                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16 }}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleOrderPress(item)}
                            className="w-[48%] rounded-2xl mb-4 overflow-hidden relative"
                        >
                            <Image
                                source={item.image}
                                className="h-48 w-full rounded-2xl"
                                resizeMode="cover"
                            />

                            <View className="absolute bottom-0 left-0 right-0 px-2 pb-2 pt-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                                <Text className="text-white font-semibold text-sm">{item.title}</Text>
                                <Text className="text-xs text-gray-300">{item.subtitle}</Text>
                            </View>

                            <View className="absolute top-2 left-2 bg-[#eeeef08c] p-1.5 rounded-full">
                                <Image source={Icons.Hill} className="w-5 h-5 tint-white" />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <CompletedOrders />
            )}


            <BottomModal visible={showModal} onClose={() => setShowModal(false)} title="Transaction Details">
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

                        <View className="mt-4 flex-row space-x-2 ">

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
                            <DetailRow label="Status:" value="In Escrow" valueColor="#D49C22" />
                            <DetailRow label="Time Stamp:" value=" April 25, 2025 - 5:00PM" />
                        </View>
                        <CustomButton text='I have received my product' className="mt-4 bg-[#5F6DFB]" onPress={handleButtonPress} />
                        <Text className="text-center text-xs text-gray-400 mt-4">
                            Having any issues with this transaction?{`\n`}
                            Reach out to us via our <Text className="text-blue-500">Support Channel</Text>.
                        </Text>
                    </View>
                )}
            </BottomModal>


            <BottomModal visible={showNewModal} onClose={() => setShowNewModal(false)} >

                <View className="px-4 py-1">

                    <Text className="text-base font-semibold text-center">Have you received your order?</Text>


                    <View className="flex-row items-center mt-6">
                        <CheckBox
                            checked={isFirstChecked}
                            onPress={() => setIsFirstChecked(!isFirstChecked)}
                        />
                        <Text className="ml-2 text-sm text-gray-500">I have received the product i ordered from the seller</Text>
                    </View>


                    <View className="flex-row items-center mt-4">
                        <CheckBox
                            checked={isSecondChecked}
                            onPress={() => setIsSecondChecked(!isSecondChecked)}
                        />
                        <Text className="ml-2 text-sm text-gray-500">I have check the product and it is in good and perfect condition</Text>
                    </View>


                    <Text className="text-[#B54708]  text-xs bg-[#fedf8983] p-4 rounded-md border border-[#FEDF89] text-center mt-5">
                        Make sure you have received your order and check if it is in a good condition before releasing the payment
                    </Text>
                    <CustomButton
                        text="I have received my product"
                        className={`mt-5 ${isButtonActive ? 'bg-[#5F6DFB]' : 'bg-[#717680]'}`}
                        onPress={Pin}
                        disabled={!isButtonActive}
                    />
                    <Text className="text-center text-sm text-gray-400 mt-4 mb-5">
                        Having any issues with this transaction?{`\n`}
                        Reach out to us via our <Text className="text-blue-500">Support Channel</Text>.
                    </Text>
                </View>
            </BottomModal>

            <BottomModal visible={lastModal} onClose={() => setLastModal(false)} >
                <View className="px-4 py-1">
                    <View className="w-16 h-16 rounded-full bg-[#F5F5F5] justify-center items-center self-center mb-2.5">
                        <Image source={Images.PadLock} className="w-8 h-8" />
                    </View>

                    <View className="px-4">
                        <Text className="text-lg font-semibold text-center">Input Payment Pin</Text>
                        <Text className="text-sm text-gray-500 text-center">
                            Use your PIN code to authorize this {"\n"}transaction
                        </Text>
                    </View>

                    <View className="flex flex-row justify-center">
                        {[0, 1, 2, 3].map((index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (pinInputs.current[index] = ref)}
                                className="w-7 h-7 rounded-full mx-1 text-center text-4xl text-[#444CE7] border border-[#444CE7] mb-10 mt-5"
                                value={pin[index]}
                                onChangeText={(value) => handlePinChange(value, index)}
                                secureTextEntry
                                maxLength={1}
                                textAlign="center"
                                keyboardType="numeric"
                                textContentType="oneTimeCode"
                            />
                        ))}
                    </View>
                </View>
            </BottomModal>

         


        </SafeAreaView>
    );
}