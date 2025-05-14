import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../constants/icon';
import { Images } from '../../constants/image';

const Step1 = ({ onContinue }) => {
    const [selectedType, setSelectedType] = useState(null);

    const handleSelect = (type) => {
        setSelectedType(type);
    };

    const isSelected = (type) => selectedType === type;

    return (
        <View className="p-2">
            <Text className="text-[16px] font-semibold mb-4">Choose Products Type</Text>
            <Text className="text-[14px] text-start mb-6">
                Choose the product type from this list below that best matches the items you want to upload.
            </Text>

            <View className="flex-row justify-between mb-6">
                {/* Physical Products */}
                <TouchableOpacity
                    className={`w-[48%] p-4 border rounded-lg items-center ${
                        isSelected('physical') ? 'border-[#444CE7] bg-[#EEF4FF]' : 'border-gray-200'
                    }`}
                    onPress={() => handleSelect('physical')}
                >
                    <Image
                        source={Images.Frame1}
                        className="w-20 h-20 mb-3"
                        resizeMode="contain"
                    />
                    <Text className="text-[14px] font-semibold mb-1">Physical Products</Text>
                    <View className="flex-row items-center">
                        <Image
                            source={Icons.Note}
                            style={{ width: 14, height: 14 }}
                            resizeMode="contain"
                        />
                        <Text className="text-[12px] ml-1">Click to add product</Text>
                    </View>
                </TouchableOpacity>

                {/* Digital Products */}
                <TouchableOpacity
                    className={`w-[48%] p-4 border rounded-lg items-center ${
                        isSelected('digital') ? 'border-[#444CE7] bg-[#EEF4FF]' : 'border-gray-200'
                    }`}
                    onPress={() => handleSelect('digital')}
                >
                    <Image
                        source={Images.Frame2}
                        className="w-20 h-20 mb-3"
                        resizeMode="contain"
                    />
                    <Text className="text-[14px] font-semibold mb-1">Digital Products</Text>
                    <View className="flex-row items-center">
                        <Image
                            source={Icons.Note}
                            style={{ width: 14, height: 14 }}
                            resizeMode="contain"
                        />
                        <Text className="text-[12px] ml-1">Click to add product</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                className={`w-full py-3 rounded-lg mt-[90%] ${
                    selectedType ? 'bg-[#444CE7]' : 'bg-gray-300'
                }`}
                disabled={!selectedType}
                onPress={() => onContinue(selectedType)}
            >
                <Text className="text-white text-center font-semibold">Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Step1;
