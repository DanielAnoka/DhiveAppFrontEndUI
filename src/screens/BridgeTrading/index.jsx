import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import { Icons } from '../../constants/icon';
import CustomButton from '../../components/Button';
import Trading from './trading';

const chains = [
    { label: 'Dhive Network', icon: Icons.Trading },
    { label: 'Ethereum', icon: Icons.Trading },
    { label: 'Binance Smart Chain', icon: Icons.Trading },
];

const tokens = [
    { label: 'DFUEL', icon: Icons.Trading },
    { label: 'ETH', icon: Icons.Trading },
    { label: 'BNB', icon: Icons.Trading },
];

const BridgeTrading = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const [selectedChain, setSelectedChain] = useState(null);
    const [selectedToken, setSelectedToken] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showTokenDropdown, setShowTokenDropdown] = useState(false);
    const [showNewScreen, setShowNewScreen] = useState(false);

    const handleSelectChain = (item) => {
        setSelectedChain(item);
        setSelectedToken(null);
        setShowDropdown(false);
    };

    const handleSelectToken = (item) => {
        setSelectedToken(item);
        setShowTokenDropdown(false);
    };

    const handleButtonPress = () => {
     
        setShowNewScreen(true);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 p-5 bg-white">
                {/* Header */}
                <View className="flex-row items-center justify-between h-14 mb-2.5">
                    <TouchableOpacity className="w-8 h-8 rounded-full bg-gray-200 justify-center items-center mt-2.5" onPress={handleBack}>
                        <Icon name="chevron-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text className="text-base font-medium text-black">Bridge Trading</Text>
                    <View className="w-8" />
                </View>

                {!showNewScreen ? (
                    <>
                        <Text className="text-sm font-medium text-black mt-5 mb-1.5">Select Chain</Text>
                        <TouchableOpacity
                            className="w-full h-12 rounded-xl border border-gray-200 bg-white justify-center px-2.5"
                            onPress={() => setShowDropdown(!showDropdown)}
                            disabled={selectedChain !== null}
                        >
                            <View className="flex-row items-center">
                                <Image
                                    source={selectedChain?.icon || Icons.Trading}
                                    className="w-5 h-5"
                                />
                                <Text className={`ml-2.5 text-sm ${!selectedChain ? 'text-gray-500' : 'text-black'}`}>
                                    {selectedChain?.label ?? 'Select Network to Bridge From'}
                                </Text>
                                <Icon
                                    name={showDropdown ? 'chevron-up' : 'chevron-down'}
                                    size={16}
                                    color="#000"
                                    style={{ marginLeft: 'auto' }}
                                />
                            </View>
                        </TouchableOpacity>

                        {showDropdown && !selectedChain && (
                            <View className="border border-gray-200 rounded-xl mt-1.5 bg-white shadow">
                                <FlatList
                                    data={chains}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            className="flex-row items-center py-2.5 px-2.5"
                                            onPress={() => handleSelectChain(item)}
                                        >
                                            <Image source={item.icon} className="w-5 h-5" />
                                            <Text className="ml-2.5 text-sm text-black">{item.label}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        )}

                        {selectedChain && (
                            <>
                                <Text className="text-sm font-medium text-black mt-5 mb-1.5">Select Token</Text>
                                <TouchableOpacity
                                    className="w-full h-12 rounded-xl border border-gray-200 bg-white justify-center px-2.5"
                                    onPress={() => setShowTokenDropdown(!showTokenDropdown)}
                                    disabled={selectedToken !== null}
                                >
                                    <View className="flex-row items-center">
                                        <Image
                                            source={selectedToken?.icon || Icons.Trading}
                                            className="w-5 h-5"
                                        />
                                        <Text className={`ml-2.5 text-sm ${!selectedToken ? 'text-gray-500' : 'text-black'}`}>
                                            {selectedToken?.label ?? 'Select Token to Bridge'}
                                        </Text>
                                        <Icon
                                            name={showTokenDropdown ? 'chevron-up' : 'chevron-down'}
                                            size={16}
                                            color="#000"
                                            style={{ marginLeft: 'auto' }}
                                        />
                                    </View>
                                </TouchableOpacity>

                                {showTokenDropdown && !selectedToken && (
                                    <View className="border border-gray-200 rounded-xl mt-1.5 bg-white shadow">
                                        <FlatList
                                            data={tokens}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    className="flex-row items-center py-2.5 px-2.5"
                                                    onPress={() => handleSelectToken(item)}
                                                >
                                                    <Image source={item.icon} className="w-5 h-5" />
                                                    <Text className="ml-2.5 text-sm text-black">{item.label}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />
                                    </View>
                                )}
                            </>
                        )}

                        {selectedToken && (
                            <CustomButton
                                text="Continue"
                                onPress={handleButtonPress}
                                style="absolute bottom-[50px] left-5 right-5 h-12 rounded-xl justify-center items-center"
                            />
                        )}
                    </>
                ) : (
                    <Trading />
                )}
            </View>
        </SafeAreaView>
    );
};

export default BridgeTrading;
