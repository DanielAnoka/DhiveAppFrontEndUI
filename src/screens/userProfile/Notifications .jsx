import { Text, View, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';

const initialToggleList = [
    { name: 'Allow push notifications', enabled: false },
    { name: 'Price Alerts', enabled: false },
];

const Notifications = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const [toggles, setToggles] = useState(initialToggleList);

    const toggleSwitch = (index) => {
        const updatedToggles = [...toggles];
        updatedToggles[index].enabled = !updatedToggles[index].enabled;
        setToggles(updatedToggles);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">

            <View className="flex-row items-center justify-between h-14 mb-2 px-4">
                <TouchableOpacity
                    onPress={handleBack}
                    className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center mt-2"
                >
                    <Icon name="chevron-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="text-base font-medium text-[#00011B]">Notifications</Text>
                <View className="w-8" />
            </View>


            <View className="px-5 pb-8">
                {toggles.map((item, index) => (
                    <View
                        key={index}
                        className="flex-row items-center justify-between  p-3 rounded-xl mb-3 "
                    >
                        <Text className="text-sm font-semibold text-gray-900">{item.name}</Text>
                        <Switch
                            value={item.enabled}
                            onValueChange={() => toggleSwitch(index)}
                        />
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Notifications;
