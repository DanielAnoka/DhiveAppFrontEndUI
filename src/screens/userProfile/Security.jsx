import { Text, View, SafeAreaView, TouchableOpacity, Switch, FlatList } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';

const Security = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const [autoLock, setAutoLock] = useState('Immediate');
    const [showAutoLockList, setShowAutoLockList] = useState(false);

    const [transactionSigning, setTransactionSigning] = useState(false);
    const [passcode, setPasscode] = useState(false);
    const [biometrics, setBiometrics] = useState(false);
    const [faceId, setFaceId] = useState(false);

    const autoLockOptions = [
        'Immediate',
        'After 30 seconds',
        'After 1 minute',
        'After 5 minutes',
        'After 10 minutes',
    ];

    const renderSelectableList = (data, selected, onSelect) => (
        <FlatList
            data={data}
            keyExtractor={(item) => item}
            className="mt-1 mb-3 bg-white rounded-xl overflow-hidden"
            renderItem={({ item }) => (
                <TouchableOpacity
                    className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100"
                    onPress={() => onSelect(item)}
                >
                    <Text className="text-sm text-gray-900">{item}</Text>
                    {item === selected && <Icon name="checkmark" size={18} color="#444CE7" />}
                </TouchableOpacity>
            )}
        />
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-50">

            <View className="flex-row items-center justify-between h-14 mb-2 px-4">
                <TouchableOpacity
                    onPress={handleBack}
                    className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center mt-2"
                >
                    <Icon name="chevron-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="text-base font-medium text-[#00011B]">Security</Text>
                <View className="w-8" />
            </View>

            <View className="px-5 pb-8 space-y-3">

                <TouchableOpacity
                    className="flex-row items-center justify-between p-3 rounded-xl shadow-sm"
                    onPress={() => setShowAutoLockList(!showAutoLockList)}
                >
                    <Text className="text-sm text-[#252B37]">Auto-lock</Text>
                    <View className="flex-row items-center space-x-2">
                        <Text className="text-sm text-[#444CE7]">{autoLock}</Text>
                        <Icon name={showAutoLockList ? "chevron-up" : "chevron-forward"} size={16} color="#999" />
                    </View>
                </TouchableOpacity>
                {showAutoLockList &&
                    renderSelectableList(autoLockOptions, autoLock, (val) => {
                        setAutoLock(val);
                        setShowAutoLockList(false);
                    })}


                <View className=" p-3 rounded-xl shadow-sm space-y-1">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-sm text-[#252B37] font-semibold">Transaction Signing</Text>
                        <Switch
                            value={transactionSigning}
                            onValueChange={() => setTransactionSigning(!transactionSigning)}
                        />
                    </View>
                    <Text className="text-xs text-gray-500">
                        Ask for approval ahead of transactions
                    </Text>
                </View>

                <View className="flex-row items-center justify-between p-3 rounded-xl shadow-sm ">
                    <Text className="text-sm text-[#252B37]">Passcode</Text>
                    <Switch value={passcode} onValueChange={() => setPasscode(!passcode)} />
                </View>

                <View className="flex-row items-center justify-between p-3 rounded-xl shadow-sm ">
                    <Text className="text-sm text-[#252B37]">Biometrics</Text>
                    <Switch value={biometrics} onValueChange={() => setBiometrics(!biometrics)} />
                </View>

                <View className="flex-row items-center justify-between p-3 rounded-xl shadow-sm ">
                    <Text className="text-sm text-[#252B37]">Face ID</Text>
                    <Switch value={faceId} onValueChange={() => setFaceId(!faceId)} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Security;
