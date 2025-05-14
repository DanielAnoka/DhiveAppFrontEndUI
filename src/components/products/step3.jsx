import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const categories = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Books', value: 'books' },
    { label: 'Home & Garden', value: 'home-garden' },
    // Add more as needed
];

const Step3 = ({ onContinue }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelectCategory = (item) => {
        setSelectedCategory(item);
        setShowDropdown(false);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="p-1">
                <Text className="text-[14px] font-medium mb-1">Does this Product Have a Return Policy?</Text>
                <View className="relative mb-4">
                    <TouchableOpacity
                        className="border border-gray-300 p-3 rounded-lg flex-row justify-between items-center"
                        onPress={() => setShowDropdown(!showDropdown)}
                    >
                        <Text className="text-gray-600">
                            {selectedCategory ? selectedCategory.label : 'Select a category'}
                        </Text>
                        <Icon name={showDropdown ? "chevron-up" : "chevron-down"} size={18} color="#999" />

                    </TouchableOpacity>
                    {showDropdown && (
                        <View className="absolute top-full left-0 right-0 z-10 border border-gray-300 rounded-lg bg-white shadow-md">
                            <FlatList
                                data={categories}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <Pressable
                                        className="p-3 border-b border-gray-200"
                                        onPress={() => handleSelectCategory(item)}
                                    >
                                        <Text>{item.label}</Text>
                                    </Pressable>
                                )}
                            />
                        </View>
                    )}
                </View> 
                <Text className="text-[14px] font-medium mb-1">What is the Estimated Delivery Time?</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Enter Price in USDT"
                    keyboardType="numeric"
                />
                <Text className="text-[14px] font-medium mb-1">What are the Shipping Fees?</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Enter available units"
                    keyboardType="numeric"
                />
                <Text className="text-[14px] font-medium mb-1">What are the Shipping Fees?</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Enter available units"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    className="w-full p-4 bg-[#444CE7]  mt-[35%] rounded-lg"
                    onPress={onContinue}
                >
                    <Text className="text-white text-center font-semibold">Continue</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Step3;
