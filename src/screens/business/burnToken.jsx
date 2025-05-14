import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Clipboard,
    ScrollView,
    Alert,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigate } from 'react-router-native';
import { Images } from '../../constants/image';
import TokenChart from './TokenChart';
import CustomButton from '../../components/Button';
import BottomModal from '../../components/BottomModal';

const Card = ({ children, style }) => (
    <View className={`border bg-white border-[#E9E9E9] rounded-xl m-2 p-5 ${style}`}>
        {children}
    </View>
);

const BackButton = ({ onPress }) => (
    <TouchableOpacity
        className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center"
        onPress={onPress}
    >
        <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
);

const TokenManagement = () => {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [actionModalVisible, setActionModalVisible] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);
    const [amount, setAmount] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [lastModal, setLastModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [pin, setPin] = useState(['', '', '', '']);
    const pinInputs = useRef([]);

    const handleBack = () => navigate(-1);

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
        Alert.alert('Copied', 'Address copied to clipboard!');
    };

    const actions = [
        {
            id: 'mint',
            title: 'Mint Token',
            name: 'Mint',
            icon: 'activity',
            bg: 'bg-[#EEF4FF]',
        },
        {
            id: 'freeze',
            title: 'Burn Token',
            name: 'Burn',
            icon: 'lock',
            bg: 'bg-[#EEF4FF]',
        },
    ];

    const handleAmountChange = (text) => {
        setAmount(text);
    };

    const handlePinChange = (value, index) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        if (value && index < 3) {
            pinInputs.current[index + 1]?.focus();
        }

        if (index === 3 && value) {
            const fullPin = [...newPin].join('');
            if (fullPin === '1111') {
                setLastModal(false);
                setShowSuccessModal(true);
                setPin(['', '', '', '']);
            } else {
                Alert.alert('Incorrect PIN', 'The PIN you entered is incorrect.');
                setPin(['', '', '', '']);
                pinInputs.current[0]?.focus();
            }
        }
    };

    const renderActionContent = () => {
        return (
            <View className="px-4 space-y-4 my-7">
                <Text className="text-base  text-black">
                    Amount to {selectedAction?.name}
                </Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl p-2">
                    <TextInput
                        value={amount}
                        onChangeText={handleAmountChange}
                        placeholder="MART Amount"
                        keyboardType="numeric"
                        className="flex-1 text-black text-base"
                    />
                    <TouchableOpacity
                        className="rounded-full py-1 px-4 ml-2"
                        onPress={() => Alert.alert('Mart Button Pressed')}
                    >
                        <Text className="text-[#717680] font-semibold ">MART</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-sm text-gray-500 mt-2">≈ ${parseFloat(amount) * 1.00 || '0.00'}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header */}
                <View className="flex flex-row items-center justify-between mb-4 px-4 mt-7">
                    <BackButton onPress={handleBack} />
                    <Text className="text-lg font-medium text-black">Token Management</Text>
                    <TouchableOpacity className="w-8 h-6 rounded-lg border border-[#00011B33] justify-center items-center">
                        <Icon name="more-horizontal" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Token Overview */}
                <Card>
                    <View className="flex-row justify-between mb-4 items-center">
                        <View className="flex-row items-center">
                            <Image source={Images.Avatar} className="w-10 h-10 rounded-full mr-2" />
                            <View>
                                <Text className="text-black font-bold text-base">$MART</Text>
                                <Text className="text-gray-500 text-sm">$1.00</Text>
                            </View>
                        </View>
                        <TokenChart percentage="+115.2%" chartData={[50, 70, 65, 80, 90, 110]} />
                    </View>
                    <View className="flex-row justify-between">
                        <View className="items-center flex-1">
                            <Text className="text-gray-500 text-xs">Total Supply</Text>
                            <Text className="text-black font-semibold text-sm">1.1B</Text>
                        </View>
                        <View className="items-center flex-1">
                            <Text className="text-gray-500 text-xs">Holders</Text>
                            <Text className="text-black font-semibold text-sm">14.8K</Text>
                        </View>
                        <View className="items-center flex-1">
                            <Text className="text-gray-500 text-xs">Market Cap</Text>
                            <Text className="text-black font-semibold text-sm">$100M</Text>
                        </View>
                    </View>
                </Card>

                {[{ label: 'Total Supply', value: '1,100,000,000' },
                { label: 'Circulating Supply', value: '643,877,123' },
                { label: 'Token Address', value: '0x45p8.......433cvO1' },
                { label: 'Market Cap', value: '$100,443,456' },
                { label: 'Holders', value: '14,873' }].map(({ label, value }) => (
                    <Card key={label}>
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-500 text-sm">{label}</Text>
                            <View className="flex-row items-center">
                                <Text className="text-black font-semibold text-sm">{value}</Text>
                                {label === 'Token Address' && (
                                    <TouchableOpacity onPress={() => copyToClipboard(value)} className="ml-2">
                                        <Icon name="copy" size={18} color="#000" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </Card>
                ))}
            </ScrollView>

            <View className="absolute bottom-10 left-0 right-0 px-4 py-4">
                <CustomButton text="Manage Token" className="w-full" onPress={() => setModalVisible(true)} />
            </View>

            <BottomModal visible={modalVisible} onClose={() => setModalVisible(false)} titleAlign="center">
                <Text className="text-lg font-semibold text-black mb-7 text-center">Manage Token</Text>
                <View className="px-4 space-y-4 mb-10">
                    {actions.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            className="flex-row items-center justify-between border-b border-gray-200 pb-4"
                            onPress={() => {
                                setModalVisible(false);
                                setSelectedAction(item);
                                setActionModalVisible(true);
                            }}
                            activeOpacity={0.7}
                        >
                            <View className="flex-row items-center flex-1">
                                <View className={`w-8 h-8 rounded-full justify-center items-center mr-4 ${item.bg}`}>
                                    <Icon name={item.icon} size={16} color="#000" />
                                </View>
                                <Text className="text-base font-semibold text-black">{item.title}</Text>
                            </View>
                            <Icon name="chevron-right" size={20} color="#9ca3af" />
                        </TouchableOpacity>
                    ))}
                </View>
            </BottomModal>

            <BottomModal visible={actionModalVisible} onClose={() => setActionModalVisible(false)} titleAlign="center">
                {selectedAction && (
                    <>
                        <Text className="text-lg font-semibold text-black text-center">{selectedAction.title}</Text>
                        {renderActionContent()}
                        <Text className="text-[#B54708] mb-6 text-xs bg-[#FFFAEB] p-4 rounded-lg border border-[#FEDF89]">
                            {selectedAction.id === 'mint'
                                ? 'Minting your token will increase the total supply that was available before'
                                : 'Burn your token will decrease the total supply that was available before'}
                        </Text>
                        <View className="px-4">
                            <CustomButton
                                text={` ${selectedAction.title}`}
                                className="w-full mb-10"
                                onPress={() => {
                                    setShowModal(true);
                                    setActionModalVisible(false);
                                }}
                            />
                        </View>
                    </>
                )}
            </BottomModal>

            <BottomModal visible={showModal} onClose={() => setShowModal(false)} title="Confirm Transaction">
                <View className="bg-[#FAFAFA] mb-5 rounded-xl py-3 px-5 mt-5">
                    {[['Token', 'Mart'],
                    [`Token Amount to ${selectedAction?.name}`, '1,000,000,000'],
                    ['Burning Cost ', '$1000 '],
                    ['Network Fee', '$0.15'],
                    ['Platform Fee', '$0.10'], ['Est. Time', '1 min.']].map(([label, value]) => (
                        <View className="flex-row justify-between mb-5 items-center" key={label}>
                            <Text className="text-textgray font-light">{label}</Text>
                            <Text className="text-black font-medium">{value}</Text>
                        </View>
                    ))}
                </View>
                <CustomButton
                    text="Confirm Details"
                    className="mb-10 mt-2"
                    onPress={() => {
                        setShowModal(false);
                        setLastModal(true);
                    }}
                />
            </BottomModal>

            <BottomModal visible={lastModal} onClose={() => setLastModal(false)}>
                <View className="px-4 py-1 mb-10">
                    <View className="w-16 h-16 rounded-full bg-[#F5F5F5] justify-center items-center self-center mb-2.5">
                        <Image source={Images.PadLock} className="w-8 h-8" />
                    </View>
                    <View className="px-4">
                        <Text className="text-lg font-semibold text-center">Input Payment Pin</Text>
                        <Text className="text-sm text-gray-500 text-center">
                            Use your PIN code to authorize this {'\n'}transaction
                        </Text>
                    </View>
                    <View className="flex flex-row justify-center">
                        {[0, 1, 2, 3].map((index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (pinInputs.current[index] = ref)}
                                className="w-7 h-7 rounded-full mx-1 text-center text-4xl text-[#444CE7] border border-[#444CE7] mb-10 mt-5"
                                value={pin[index]}
                                onChangeText={(value) => handlePinChange(value, index)}
                                secureTextEntry
                                maxLength={1}
                                keyboardType="numeric"
                                textContentType="oneTimeCode"
                            />
                        ))}
                    </View>
                </View>
            </BottomModal>

            <BottomModal visible={showSuccessModal} onClose={() => setShowSuccessModal(false)} >
                <View className="items-center justify-center py-6">
                    <Image
                        source={Images.Success}
                        className="w-[70px] h-[70px] self-center mb-2.5"
                    />

                    <View className="items-center mt-5">
                        <Text className="text-center text-[#181D27] font-bold text-base mb-2">
                            Successful
                        </Text>

                        <Text className="text-center text-[#667085] text-base leading-6 mb-6">
                            You have successfully withdrawn 1,000 into your
                            <Text className="font-semibold"> Ethereum Wallet </Text>.
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => {
                        setShowSuccessModal(false);
                        setShowTransactionSummaryModal(true);
                    }}>
                        <Text className="text-center text-[#444CE7] text-base leading-[34px] mb-6 ">
                            View Transaction Summary
                        </Text>
                    </TouchableOpacity>

                    <CustomButton
                        text="Back home"
                        onPress={() => setShowSuccessModal(false)}
                        className="py-4 rounded-lg w-full"
                    />

                    <Text className="text-center text-xs text-[#6B7280] mt-5 mb-5">
                        Having any issues with this transaction?{"\n"}
                        Reach out to us via our{" "}
                        <Text className="text-[#4F46E5] font-medium">Support Channel</Text>.
                    </Text>

                </View>
            </BottomModal>
        </SafeAreaView>
    );
};

export default TokenManagement;
