import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import SectionItem from '../../components/SectionItem';

const docsItems = [
    { label: 'Whitepaper', icon: 'document-text-outline' },
    { label: 'Privacy Policy', icon: 'lock-closed-outline' },
    { label: 'Terms & Conditions', icon: 'file-tray-full-outline' },

]

const doc = () => {
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
                <Text className="text-base font-medium text-[#00011B]">Docs</Text>
                <View className="w-8" />
            </View>

            <View>


                {docsItems.map((item, index) => (
                    <SectionItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        onPress={() => navigate(item.path)}

                    />
                ))}
            </View>

        </SafeAreaView>
    )
}

export default doc