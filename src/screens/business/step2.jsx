import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';

const Step2 = ({
    businessName,
    setBusinessName,
    tokenSymbol,
    setTokenSymbol,
    supplyChain,
    setSupplyChain,
    cashBack,
    setCashBack,
    onContinue,
}) => {
    const isStep2Valid =
        businessName.trim() &&
        tokenSymbol.trim() &&
        supplyChain.trim() &&
        cashBack.trim();

    return (
      <View>
            <Text className="text-[13px] mb-2">Business Name</Text>
            <TextInput
                value={businessName}
                onChangeText={setBusinessName}
                className="border h-[54px] border-gray-300 rounded-md px-3 py-2 mb-7 text-[13px]"
                placeholder="Enter Business Name"
            />

            <Text className="text-[13px] mb-2">
                Token Symbol{' '}
                <Text className="text-gray-400">
                    (e.g. if business name is John Doe token symbol should be "JD" in caps)
                </Text>
            </Text>
            <TextInput
                value={tokenSymbol}
                onChangeText={setTokenSymbol}
                className="border h-[54px] border-gray-300 rounded-md px-3 py-2 mb-7 text-[13px]"
                placeholder="Enter Token Symbol"
            />

            <Text className="text-[13px] mb-2">Supply Chain</Text>
            <TextInput
                value={supplyChain}
                onChangeText={setSupplyChain}
                className="border h-[54px] border-gray-300 rounded-md px-3 py-2 mb-7 text-[13px]"
                placeholder="Enter Supply Chain"
            />

            <Text className="text-[13px] mb-2">
                Product purchase cash back{' '}
                <Text className="text-gray-400">
                    (A certain percentage ranging from 5% - 15% of your token supply)
                </Text>
            </Text>
            <TextInput
                value={cashBack}
                onChangeText={setCashBack}
                keyboardType="numeric"
                className="border h-[54px] border-gray-300 rounded-md px-3 py-2 mb-10 text-[13px]"
                placeholder="Enter Cash Back %"
            />
            <TouchableOpacity
                disabled={!isStep2Valid}
                onPress={onContinue}
                className={`w-full py-3 rounded-lg h-[48px] mt-16 ${isStep2Valid ? 'bg-[#3B5FFF]' : 'bg-[#717680]'}`}
            >
                <Text className="text-white text-center font-medium text-[15px]">Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Step2;
