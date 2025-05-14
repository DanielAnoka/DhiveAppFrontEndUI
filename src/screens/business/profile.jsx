import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import { Images } from '../../constants/image';
import Business from './business';
import Person from './personal';

const ProfileScreen = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('business');

    const handleBack = () => navigate(-1);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-between px-6 pb-6">

                {/* Header */}
                <View>
                    <View className="flex-row items-center justify-between mt-4 mb-6">
                        <TouchableOpacity
                            onPress={handleBack}
                            className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center mt-2"
                        >
                            <Icon name="chevron-back" size={20} color="#000" />
                        </TouchableOpacity>
                        <Text className="text-base font-semibold text-black">Profile Information</Text>
                        <View className="w-6" />
                    </View>

                    {/* Avatar */}
                    <View className="items-center mb-6">
                        <View className="w-20 h-20 rounded-full overflow-hidden">
                            <Image source={Images.Avatar} className="w-full h-full rounded-full" />
                        </View>
                        <TouchableOpacity className="mt-3 px-4 py-1.5 bg-indigo-600 rounded-full flex-row items-center">
                            <Icon name="camera-outline" size={16} color="white" />
                            <Text className="text-white text-sm ml-2">Change Photo</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Tab Switch */}
                    <View className="flex-row bg-gray-100 rounded-xl p-1 mb-6">
                        <TouchableOpacity
                            className={`flex-1 px-4 py-2 rounded-xl ${activeTab === 'business' ? 'bg-white' : ''
                                }`}
                            onPress={() => setActiveTab('business')}
                        >
                            <Text
                                className={`text-center text-sm font-medium ${activeTab === 'business' ? 'text-indigo-600' : 'text-gray-500'
                                    }`}
                            >
                                Business
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={`flex-1 px-4 py-2 rounded-xl ${activeTab === 'personal' ? 'bg-white' : ''
                                }`}
                            onPress={() => setActiveTab('personal')}
                        >
                            <Text
                                className={`text-center text-sm font-medium ${activeTab === 'personal' ? 'text-indigo-600' : 'text-gray-500'
                                    }`}
                            >
                                Personal
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Tab Content */}
                    {activeTab === 'business' ? (
                        <Business />
                    ) : (
                      <Person />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
