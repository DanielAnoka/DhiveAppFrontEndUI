import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import BottomModal from "../../components/BottomModal"

const ManageWalletScreen = () => {
    const navigate = useNavigate();
    const [showSeedPhraseModal, setShowSeedPhraseModal] = useState(false);

    const handleBack = () => navigate(-1);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 px-6 pt-4 pb-6">
                {/* Header */}
                <View className="flex-row items-center justify-between mb-6">
                    <TouchableOpacity
                        onPress={handleBack}
                        className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center"
                    >
                        <Icon name="chevron-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text className="text-base font-semibold text-black">Manage Wallet</Text>
                    <View className="w-8" />
                </View>

                {/* Content */}
                <View className="space-y-6 mt-5 px-2">
                    {/* Wallet Name */}
                    <View className="flex-row justify-between items-center">
                        <Text className="text-gray-600">Wallet Name</Text>
                        <TouchableOpacity className="flex-row items-center space-x-1">
                            <Text className="text-black font-medium">My wallet</Text>
                            <Icon name="chevron-forward-outline" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    {/* Address */}
                    <View className="flex-row justify-between items-center">
                        <Text className="text-gray-600">Address</Text>
                        <TouchableOpacity className="flex-row items-center space-x-1">
                            <Text className="text-indigo-600 font-medium">Cu457E09F_dud89g</Text>
                            <Icon name="copy-outline" size={16} color="#4F46E5" />
                        </TouchableOpacity>
                    </View>

                    {/* Show Seed Phrase */}
                    <TouchableOpacity
                        className="flex-row justify-between items-center"
                        onPress={() => setShowSeedPhraseModal(true)}
                    >
                        <Text className="text-gray-800">Show Seed Phrase</Text>
                        <Icon name="chevron-forward-outline" size={20} color="#000" />
                    </TouchableOpacity>

                    {/* Show Private Key */}
                    <TouchableOpacity className="flex-row justify-between items-center"  onPress={() => navigate('/privateKey')}>
                        <Text className="text-gray-800">Show Private Key</Text>
                        <Icon name="chevron-forward-outline" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Seed Phrase Modal */}
            <BottomModal
                visible={showSeedPhraseModal}
                onClose={() => setShowSeedPhraseModal(false)}
            >
                <View className="space-y- mb-14">
                    <Text className="text-[#717680] text-start">
                        Secret phrase backups
                    </Text>
                    <View className="space-y-6 mt-5 px-2 mb-10">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-600">Google Drive</Text>
                            <Text className="text-[#717680] font-medium">Pomalinemoses@gmail.com</Text>
                        </View>
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-600">Manual</Text>
                            <TouchableOpacity className="flex-row justify-between items-center">
                                <Text className="text-[#079455]">Active</Text>
                                <Icon name="chevron-forward-outline" size={20} color="#252B37" />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </BottomModal>
        </SafeAreaView>
    );
};

export default ManageWalletScreen;
