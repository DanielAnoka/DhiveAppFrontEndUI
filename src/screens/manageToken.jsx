import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Switch,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Images } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';

const tokenList = [
    { name: 'USDT', label: 'USD Tether', enabled: true, icon: Images.Usdt },
    { name: 'BTC', label: 'Bitcoin', enabled: true, icon: Images.Btc },
    { name: 'ETH', label: 'Ethereum', enabled: true, icon: Images.Ethe },
    { name: 'BNB', label: 'Binance Coin', enabled: true, icon: Images.Bnb },
    { name: 'BNB', label: 'Binance Coin', enabled: false, icon: Images.Coin },
    { name: 'BNB', label: 'Binance Coin', enabled: false, icon: Images.Bnb },
    { name: 'BNB', label: 'Binance Coin', enabled: false, icon: Images.Bnb },
    { name: 'BNB', label: 'Binance Coin', enabled: false, icon: Images.Bnb },
    { name: 'BNB', label: 'Binance Coin', enabled: false, icon: Images.Bnb },
    { name: 'BNB', label: 'Binance Coin', enabled: false, icon: Images.Bnb },
];

const ManageToken = () => {
    const [tokens, setTokens] = useState(tokenList);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }

    const handleNext = () => {
        navigate('/import')
    }

    const toggleSwitch = (index) => {
        const updated = [...tokens];
        updated[index].enabled = !updated[index].enabled;
        setTokens(updated);
    };

    const filteredTokens = tokens.filter((token) =>
        token.name.toLowerCase().includes(search.toLowerCase()) ||
        token.label.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <View style={styles.headerRow}>
                    <View style={styles.leftHeader}>
                        <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
                            <Icon name="chevron-back" size={20} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.header}>Manage crypto</Text>
                    </View>
                    <TouchableOpacity style={styles.iconCirclePlus} onPress={handleNext}>
                        <Icon name="add" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <Icon name="search" size={18} color="#888" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search token or paste address"
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>

                <TouchableOpacity style={styles.networkSelector}>
                    <Text style={styles.networkLabel}>All networks</Text>
                    <Icon name="chevron-down" size={16} color="#555" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.tokenList}>
                {filteredTokens.map((token, index) => (
                    <View key={index} style={styles.tokenRow}>
                        <Image source={token.icon} style={styles.tokenIcon} />
                        <View style={styles.tokenInfo}>
                            <Text style={styles.tokenName}>{token.name}</Text>
                            <Text style={styles.tokenLabel}>{token.label}</Text>
                        </View>
                        <Switch
                            value={token.enabled}
                            onValueChange={() => toggleSwitch(index)}
                        />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCirclePlus: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    searchIcon: {
        marginRight: 6,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 14,
    },
    networkSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginTop: 10
    },
    networkLabel: {
        fontSize: 14,
        color: '#252B37',
        marginRight: 4,
    },
    tokenList: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    tokenRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        elevation: 2,
    },
    tokenIcon: {
        width: 40,
        height: 40,
        marginRight: 12,
        resizeMode: 'contain',
    },
    tokenInfo: {
        flex: 1,
    },
    tokenName: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    tokenLabel: {
        color: '#666',
        fontSize: 12,
    },
});

export default ManageToken;
