import {
    StyleSheet,
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
import Trading from "./trading";

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
    const [showNewScreen, setShowNewScreen] = useState(false); // State for new screen

    const handleSelectChain = (item) => {
        setSelectedChain(item);
        setSelectedToken(null); // Reset token when chain changes
        setShowDropdown(false);
    };

    const handleSelectToken = (item) => {
        setSelectedToken(item);
        setShowTokenDropdown(false);
    };

    const handleButtonPress = () => {
        // Handle the action after selecting a token
        console.log('Button Pressed');
        setShowNewScreen(true); // Show the new screen when button is pressed
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
                        <Icon name="chevron-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Bridge Trading</Text>
                    <View style={{ width: 32 }} />
                </View>

                {/* Conditionally render content */}
                {!showNewScreen ? (
                    <>
                        {/* Step 1: Select Chain */}
                        <Text style={styles.label}>Select Chain</Text>
                        <TouchableOpacity
                            style={styles.dropdownButton}
                            onPress={() => setShowDropdown(!showDropdown)}
                            disabled={selectedChain !== null}
                        >
                            <View style={styles.dropdownContent}>
                                <Image
                                    source={selectedChain?.icon || Icons.Trading}
                                    style={styles.iconImage}
                                />
                                <Text
                                    style={[
                                        styles.dropdownText,
                                        !selectedChain && { color: '#717680' },
                                    ]}
                                >
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

                        {/* Dropdown List for Chains */}
                        {showDropdown && !selectedChain && (
                            <View style={styles.dropdownList}>
                                <FlatList
                                    data={chains}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.dropdownItem}
                                            onPress={() => handleSelectChain(item)}
                                        >
                                            <Image source={item.icon} style={styles.iconImage} />
                                            <Text style={styles.dropdownText}>{item.label}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        )}

                        {selectedChain && (
                            <>
                                <Text style={styles.label}>Select Token</Text>
                                <TouchableOpacity
                                    style={styles.dropdownButton}
                                    onPress={() => setShowTokenDropdown(!showTokenDropdown)}
                                    disabled={selectedToken !== null}
                                >
                                    <View style={styles.dropdownContent}>
                                        <Image
                                            source={selectedToken?.icon || Icons.Trading}
                                            style={styles.iconImage}
                                        />
                                        <Text
                                            style={[
                                                styles.dropdownText,
                                                !selectedToken && { color: '#717680' },
                                            ]}
                                        >
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

                                {/* Dropdown List for Tokens */}
                                {showTokenDropdown && !selectedToken && (
                                    <View style={styles.dropdownList}>
                                        <FlatList
                                            data={tokens}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    style={styles.dropdownItem}
                                                    onPress={() => handleSelectToken(item)}
                                                >
                                                    <Image source={item.icon} style={styles.iconImage} />
                                                    <Text style={styles.dropdownText}>{item.label}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />
                                    </View>
                                )}
                            </>
                        )}

                        {/* Step 3: Continue Button (Only visible after Token selection) */}
                        {selectedToken && (
                            <CustomButton text="Continue" onPress={handleButtonPress} style={styles.button} />
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

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        marginBottom: 10,
    },
    iconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#00011B',
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 20,
        marginBottom: 5,
        color: '#00011B',
    },
    dropdownButton: {
        width: '100%',
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    dropdownContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdownText: {
        marginLeft: 10,
        color: '#000',
        fontSize: 14,
    },
    iconImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    dropdownList: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        marginTop: 5,
        backgroundColor: '#fff',
        elevation: 3,
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});
