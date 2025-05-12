import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/Button';
import { useNavigate } from 'react-router-native';

const ProfileScreen = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const handleSave = () => {
        console.log('Save changes pressed');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-between px-6 pb-6">

                <View>
                    {/* Header */}
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
                        <View className="w-24 h-24 rounded-full overflow-hidden " style={{
                            borderWidth: 3,
                            borderColor: '#5F6DFB',
                            borderRadius: 50,
                        }}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/100' }}
                                className="w-full h-full rounded-full"
                            />
                        </View>
                        <TouchableOpacity className="mt-3 px-4 py-1.5 bg-indigo-600 rounded-full flex-row items-center">
                            <Icon name="camera-outline" size={16} color="white" />
                            <Text className="text-white text-sm ml-2">Change Photo</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Form Fields */}
                    <View className="space-y-4">
                        <View>
                            <Text className="text-gray-700 mb-1">First Name</Text>
                            <TextInput
                                className="border border-gray-300 rounded-md px-4 py-2 text-black"
                                defaultValue="Pomaline C"
                            />
                        </View>

                        <View>
                            <Text className="text-gray-700 mb-1">Last Name</Text>
                            <TextInput
                                className="border border-gray-300 rounded-md px-4 py-2 text-black"
                                defaultValue="Favour"
                            />
                        </View>

                        <View>
                            <Text className="text-gray-700 mb-1">Email</Text>
                            <TextInput
                                className="border border-gray-200 rounded-md px-4 py-2 bg-gray-100 text-gray-500"
                                value="pomaline@favour.store"
                                editable={false}
                            />
                        </View>
                    </View>
                </View>

                {/* Button at Bottom */}
                <CustomButton text="Save Changes" onPress={handleSave} className="bg-indigo-600 mt-8" />
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
