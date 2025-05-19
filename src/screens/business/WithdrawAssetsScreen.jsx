import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    FlatList,
    TouchableOpacity,
    Image,
    Keyboard,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomModal from '../../components/BottomModal';
import CustomButton from '../../components/Button';
import { Images } from '../../constants/image';
import DetailRow from '../../components/DetailRow';

const coins = [
    { id: '1', name: 'USDT' },
    { id: '2', name: 'ETH' },
    { id: '3', name: 'BTC' },
];

const WithdrawAssetsScreen = () => {
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showTransactionSummaryModal, setShowTransactionSummaryModal] = useState(false); // New state
    const [pin, setPin] = useState(["", "", "", ""]);
    const pinInputs = useRef([]);

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
                    setShowConfirmationModal(false);
                    setShowSuccessModal(true);
                    Keyboard.dismiss();
                } else {
                    Alert.alert("Invalid PIN", "The PIN you entered is incorrect.");
                    setPin(["", "", "", ""]);
                }
            }, 200);
        }
    };

    useEffect(() => {
        if (!showSuccessModal) {
            setPin(["", "", "", ""]);
        }
    }, [showSuccessModal]);

    return (
        <Pressable
            onPress={Keyboard.dismiss}
            className="flex-1 bg-white px-4 pt-12 mt-10"
        >
            {/* Header */}
            <View className="flex-row items-center justify-between px-2 mb-6">
                <TouchableOpacity onPress={() => navigate(-1)} className="w-8 h-8 rounded-full bg-[#F5F5F5] justify-center items-center mt-2">
                    <Ionicons name="chevron-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="flex-1 text-center text-lg font-semibold -ml-6">
                    Withdraw Assets
                </Text>
                <View className="w-6" />
            </View>

            {/* Select Coin */}
            <Text className="text-sm font-medium text-gray-700 mb-2">Select Coin</Text>
            <Pressable
                className="border border-gray-300 rounded-lg px-4 py-3 flex-row justify-between items-center"
                onPress={() => setShowDropdown((prev) => !prev)}
            >
                <Text className="text-gray-500">
                    {selectedCoin ? selectedCoin.name : 'Select Coin to Send'}
                </Text>
                <Ionicons name="chevron-down" size={16} color="gray" />
            </Pressable>

            {/* Inline Dropdown */}
            {showDropdown && (
                <View className="border border-gray-200 rounded-lg mt-2 bg-white shadow-md max-h-48">
                    <FlatList
                        data={coins}
                        keyExtractor={(item) => item.id}
                        nestedScrollEnabled
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedCoin(item);
                                    setShowDropdown(false);
                                }}
                                className="px-4 py-3 border-b border-gray-100"
                            >
                                <Text className="text-gray-800">{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            {/* Amount Input */}
            <Text className="text-sm font-medium text-gray-700 mb-2 mt-4">Amount</Text>
            <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 mb-1"
                placeholder="Enter Amount"
                keyboardType="numeric"
            />
            <Text className="text-xs text-gray-600 mb-4">
                Available Balance: <Text className="font-semibold text-black">6,000,000 USDT</Text>
            </Text>

            {/* Wallet Address */}
            <Text className="text-sm font-medium text-gray-700 mb-2">Wallet Address</Text>
            <View className="border border-gray-300 rounded-lg px-4 py-3 mb-6 flex-row justify-between items-center">
                <TextInput
                    className="flex-1 text-gray-800"
                    placeholder="Enter Wallet Address"
                />
                <Ionicons name="copy-outline" size={20} color="gray" />
            </View>

            {/* Fees and Estimate */}
            <View className="mb-6 space-y-2">
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-700 text-sm">
                        Network Fee <Ionicons name="help-circle-outline" size={14} />
                    </Text>
                    <Text className="text-gray-800 text-sm">0.00001 ETH ($0.14)</Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-700 text-sm">Platform Fee</Text>
                    <Text className="text-gray-800 text-sm">0.00012 ETH ($1.00)</Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-700 text-sm">Est. Time</Text>
                    <Text className="text-gray-800 text-sm">1 min.</Text>
                </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
                className="bg-indigo-600 py-4 rounded-lg mt-20"
                onPress={() => setShowModal(true)}
            >
                <Text className="text-white text-center font-semibold text-base">
                    Withdraw Assets
                </Text>
            </TouchableOpacity>

            {/* First Modal - Confirm Transaction */}
            <BottomModal visible={showModal} onClose={() => setShowModal(false)} title="Confirm Transaction">
                <View className="bg-[#FAFAFA] mb-5 rounded-xl py-3 px-5 mt-5">
                    <View className="flex-row justify-between mb-6 items-center">
                        <Text className="text-textgray font-light">Withdraw To</Text>
                        <Text className="text-black font-medium">Ethereum</Text>
                    </View>
                    <View className="flex-row justify-between mb-6 items-center">
                        <Text className="text-textgray font-light">Token Amount</Text>
                        <Text className="font-medium text-black">0.00567 ETH</Text>
                    </View>
                    <View className="flex-row justify-between mb-6 items-center">
                        <Text className="text-textgray font-light">Fiat Amount</Text>
                        <Text className="text-black font-medium">$1,000</Text>
                    </View>
                    <View className="flex-row justify-between mb-5 items-center">
                        <Text className="text-textgray font-light">Network Fee</Text>
                        <Text className="text-[#444CE7] font-medium">$0.14</Text>
                    </View>
                    <View className="flex-row justify-between mb-5 items-center">
                        <Text className="text-textgray font-light">Platform Fee</Text>
                        <Text className="text-[#444CE7] font-medium">$0.14</Text>
                    </View>
                    <View className="flex-row justify-between mb-5 items-center">
                        <Text className="text-textgray font-light">Est. Time</Text>
                        <Text className="text-[#444CE7] font-medium">1 min.</Text>
                    </View>
                </View>

                <CustomButton
                    text="Confirm Details"
                    className="mb-6 mt-2"
                    onPress={() => {
                        setShowModal(false);
                        setShowConfirmationModal(true);
                    }}
                />
            </BottomModal>

            {/* Second Modal - Enter PIN */}
            <BottomModal visible={showConfirmationModal} onClose={() => setShowConfirmationModal(false)} >
                <View className="px-4 py-1">
                    <View className="w-16 h-16 rounded-full bg-[#F5F5F5] justify-center items-center self-center mb-2.5">
                        <Image source={Images.PadLock} className="w-8 h-8" />
                    </View>

                    <Text className="text-lg font-semibold text-center">Input Payment Pin</Text>
                    <Text className="text-sm text-gray-500 text-center">
                        Use your PIN code to authorize this {"\n"}transaction
                    </Text>

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

            {/* Third Modal - Success */}
            <BottomModal visible={showSuccessModal} onClose={() => setShowSuccessModal(false)} >
                <View className="items-center justify-center py-6">
                    <Image
                        source={Images.Success}
                        className="w-[70px] h-[70px] self-center mb-2.5"
                    />

                    <View className="items-center mt-5">
                        <Text className="text-center text-[#181D27] font-bold text-base mb-2">
                            Successful
                        </Text>

                        <Text className="text-center text-[#667085] text-base leading-6 mb-6">
                            You have successfully withdrawn 1,000 into your
                            <Text className="font-semibold"> Ethereum Wallet </Text>.
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => {
                        setShowSuccessModal(false);
                        setShowTransactionSummaryModal(true); // Open the transaction summary modal
                    }}>
                        <Text className="text-center text-[#444CE7] text-base leading-[34px] mb-6 ">
                            View Transaction Summary
                        </Text>
                    </TouchableOpacity>

                    <CustomButton
                        text="Back home"
                        onPress={() => setShowSuccessModal(false)}
                        className="py-4 rounded-lg w-full"
                    />

                    <Text className="text-center text-xs text-[#6B7280] mt-5 mb-5">
                        Having any issues with this transaction?{"\n"}
                        Reach out to us via our{" "}
                        <Text className="text-[#4F46E5] font-medium">Support Channel</Text>.
                    </Text>

                </View>
            </BottomModal>

            {/* Transaction Summary Modal */}
            <BottomModal
                visible={showTransactionSummaryModal}
                onClose={() => setShowTransactionSummaryModal(false)}
                title={'Transaction Details'}
            >
                <View className="items-center mb-6">
                    <View className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-3 justify-center items-center">
                      
                        <Ionicons name="repeat" size={28} color="white" />
                    </View>
                    <Text className="text-2xl font-bold">$2,000,000</Text>
                    <Text className="text-gray-500 mt-1">Bridge From DFUEL - EGAX</Text>
                </View>
                <View className="space-y-3 px-1 pb-6">
                    <View className="w-full bg-[#F9FAFB] rounded-lg p-4 mt-5">
                        <DetailRow label="Withdraw To:" value="Ethereum" />
                        <DetailRow label="Token Amount:" value="0.00567 ETH" />
                        <DetailRow label="Fiat Amount:" value="$1,000" />
                        <DetailRow label="Reference ID:" value="090338839DH" />
                        <DetailRow label="Status:" value="Pending" valueColor="#F79009" />
                        <DetailRow label="Time Stamp:" value=" April 25, 2025 - 5:00PM" />
                    </View>
                    <CustomButton text='Done' className="mt-4 bg-[#5F6DFB]"  />
                    <Text className="text-center text-xs text-gray-400 mt-4">
                        Having any issues with this transaction?{`\n`}
                        Reach out to us via our <Text className="text-blue-500">Support Channel</Text>.
                    </Text>
                </View>
            </BottomModal>

        </Pressable>
    );
};

export default WithdrawAssetsScreen;
