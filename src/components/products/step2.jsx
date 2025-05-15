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

const Step2 = ({ onContinue }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelectCategory = (item) => {
        setSelectedCategory(item);
        setShowDropdown(false);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="p-1">
                {/* Product Category */}
                <Text className="text-[14px] font-medium mb-1">Product Category</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Enter product category"
                />

                {/* Product Name */}
                <Text className="text-[14px] font-medium mb-1">Product Name</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Enter product name"
                />


                <Text className="text-[14px] font-medium mb-1">What Category Does this Product Belong to?</Text>
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


                {/* Price */}
                <Text className="text-[14px] font-medium mb-1">What is the Price in USDT?</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Enter Price in USDT"
                    keyboardType="numeric"
                />

                {/* Units Available */}
                <Text className="text-[14px] font-medium mb-1">How Many Units are Available?</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Enter available units"
                    keyboardType="numeric"
                />

                {/* Description */}
                <Text className="text-[14px] font-medium mb-1">Please Provide a Short Description of the Product.</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Provide Description Here"
                    multiline
                    numberOfLines={6}
                    textAlignVertical="top"
                    style={{ textAlign: 'left', minHeight: 120 }}
                />

                <TouchableOpacity
                    className="w-full py-3 bg-[#444CE7]  mt-[15%] rounded-lg"
                    onPress={onContinue}
                >
                    <Text className="text-white text-center font-semibold">Continue</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Step2;
