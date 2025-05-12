import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import SectionItem from '../../components/SectionItem';

const communityItems = [
    { label: 'YouTube', icon: 'logo-youtube' },
    { label: 'WhatsApp', icon: 'logo-whatsapp' },
    { label: 'Telegram', icon: 'logo-telegram' },
    { label: 'TikTok', icon: 'logo-tiktok' },
    { label: 'Medium', icon: 'logo-medium' },
    { label: 'Instagram', icon: 'logo-instagram' },
    { label: 'Facebook', icon: 'logo-facebook' },
    { label: 'X (Formerly Twitter)', icon: 'logo-twitter' }, 
];

const Community = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="flex-row items-center justify-between h-14 mb-2 px-4">
                <TouchableOpacity
                    onPress={handleBack}
                    className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center mt-2"
                >
                    <Icon name="chevron-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="text-base font-medium text-[#00011B]">Community</Text>
                <View className="w-8" />
            </View>

            <View>
                {communityItems.map((item, index) => (
                    <SectionItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        onPress={() => navigate(item.path)} 
                    />
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Community;
