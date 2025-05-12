import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Clipboard,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';

const WalletPrivateKey = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const privateKey = '678see765ef6543vhA32865rnwwe6785gddh43binj32ss34e86887';

    const handleCopy = () => {
        Clipboard.setString(privateKey);
        Alert.alert('Copied', 'Private key copied to clipboard.');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">

            <View className="flex-row items-center justify-between h-14 px-4 mb-2">
                <TouchableOpacity
                    onPress={handleBack}
                    className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center mt-2"
                >
                    <Icon name="chevron-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="text-base font-medium text-[#00011B] mt-2">Wallet Private Key</Text>
                <View className="w-8" />
            </View>


            <View className="px-6">
                <Text className="text-sm text-gray-800 leading-6">
                    Your <Text className="font-semibold">Private Key</Text> is the master key to your wallet. This is the only way to recover your wallet if you ever get locked out of the app or sign into a new device.
                </Text>
            </View>


            <View className="px-6 mt-48">
                <Text className="text-sm font-medium text-gray-900 mb-2">Private Key</Text>

                <View className="bg-gray-100 rounded-md px-4 py-3">
                    <Text
                        selectable
                        className="text-sm font-mono text-gray-700"
                    >
                        {privateKey}
                    </Text>
                </View>
            </View>



            <TouchableOpacity
                onPress={handleCopy}
                className="flex-row items-center justify-center   px-4 py-2 mt-4 mx-6"
            >
                <Text className="text-sm mr-2 text-gray-800">Copy to clipboard</Text>
                <Icon name="copy-outline" size={16} color="#000" />
            </TouchableOpacity>


            <View className="border border-orange-300 bg-orange-50 rounded-md px-4 py-3 mt-52 mx-6">
                <Text className="text-xs text-orange-700 font-medium">
                    We’ll never ask for your recovery phrase, please never give it out to anyone.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default WalletPrivateKey;
