import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList, Animated,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../constants/icon';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/Button';

const { height } = Dimensions.get("window");

const chains = [
    { label: 'Dhive Network', icon: Icons.Trading },
    { label: 'Ethereum', icon: Icons.Trading },
    { label: 'Binance Smart Chain', icon: Icons.Trading },
];

const tokens = [
    { label: 'EGAX', icon: Icons.Trading },
    { label: 'USDT', icon: Icons.Trading },
    { label: 'ETH', icon: Icons.Trading },
];

const Trading = () => {
    const [amount, setAmount] = useState('');
    const [selectedChain, setSelectedChain] = useState(null);
    const [showChainDropdown, setShowChainDropdown] = useState(false);
    const [selectedToken, setSelectedToken] = useState(null);
    const [showTokenDropdown, setShowTokenDropdown] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    const slideAnim = useRef(new Animated.Value(0)).current;

    const handleSelectChain = (item) => {
        setSelectedChain(item);
        setShowChainDropdown(false);
        setSelectedToken(null);
    };

    const handleSelectToken = (item) => {
        setSelectedToken(item);
        setShowTokenDropdown(false);
    };
    const toggleModal = () => {
        if (!modalVisible) {
            setModalVisible(true);
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setModalVisible(false);
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>You Send</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter an amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />

            <View style={styles.iconContainer}>
                <Image source={Icons.Frame} style={styles.icon} />
            </View>

            {/* Network Dropdown */}
            <Text style={styles.label}>To This Network</Text>
            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setShowChainDropdown(!showChainDropdown)}
            >
                <View style={styles.dropdownContent}>
                    <Image
                        source={selectedChain?.icon || Icons.Trading}
                        style={styles.iconImage}
                    />
                    <Text style={[styles.dropdownText, !selectedChain && { color: '#717680' }]}>
                        {selectedChain?.label ?? 'Select Network to Bridge To'}
                    </Text>
                    <Icon
                        name={showChainDropdown ? 'chevron-up' : 'chevron-down'}
                        size={16}
                        color="#000"
                        style={{ marginLeft: 'auto' }}
                    />
                </View>
            </TouchableOpacity>

            {showChainDropdown && (
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

            {/* Token Dropdown */}
            {selectedChain && (
                <>
                    <Text style={styles.label}>Select Token</Text>
                    <TouchableOpacity
                        style={styles.dropdownButton}
                        onPress={() => setShowTokenDropdown(!showTokenDropdown)}
                    >
                        <View style={styles.dropdownContent}>
                            <Image
                                source={selectedToken?.icon || Icons.Trading}
                                style={styles.iconImage}
                            />
                            <Text style={[styles.dropdownText, !selectedToken && { color: '#717680' }]}>
                                {selectedToken?.label ?? 'Select a Token'}
                            </Text>
                            <Icon
                                name={showTokenDropdown ? 'chevron-up' : 'chevron-down'}
                                size={16}
                                color="#000"
                                style={{ marginLeft: 'auto' }}
                            />
                        </View>
                    </TouchableOpacity>

                    {showTokenDropdown && (
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

            {/* You Receive */}
            {selectedToken && (
                <>
                    <Text style={styles.label}>You Receive</Text>
                    <View style={styles.readOnlyField}>
                        <Text style={styles.readOnlyText}>
                            1990000 {selectedToken.label}
                        </Text>
                    </View>

                    <View style={styles.table2}>
                        <View style={styles.feeContainer2}>
                            <Text style={styles.feeLabel}>Bridge Fee</Text>
                            <Text style={styles.feeAmount}>10000{selectedToken.label}</Text>
                        </View>
                        <View style={styles.feeContainer2}>
                            <Text style={styles.feeLabel}>Includes</Text>
                            <Text style={styles.feeAmount}>0.5% Bridge Fee</Text>
                        </View>
                    </View>
                    <CustomButton text="Bridge" onPress={toggleModal} />
                </>
            )}
    
        </View>
    );
};

export default Trading;

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 10,
        color: '#00011B',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 14,
        color: '#000',
        marginBottom: 20,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#00011B05',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
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
        marginBottom: 20,
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
        marginBottom: 10,
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    readOnlyField: {
        width: '100%',
        height: 50,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: '#F9FAFB',
        marginBottom: 20,
    },
    readOnlyText: {
        fontSize: 14,
        color: '#000',
    },
    table2: {
        padding: 20,

        borderRadius: 8,
        borderColor: "#ddd",
        marginBottom: 50,
    },
    feeContainer2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    feeLabel: {
        fontSize: 14,
        fontWeight: "500",
        color: "#414651",
        lineHeight: 20,
    },
    feeAmount: {
        fontSize: 14,
        fontWeight: "400",
        color: "#444CE7",
    },

});
