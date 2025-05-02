import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import { Images } from '../constants';
import AssetCard from '../components/AssetCard';

const assets = [
    { name: 'USDT', price: 1.0, amount: 392.45, icon: Images.Usdt },
    { name: 'Bitcoin', price: 85987.99, amount: 0, icon: Images.Btc },
    { name: 'Ethereum', price: 85987.99, amount: 0, icon: Images.Ethe },
    { name: 'BNB', price: 85987.99, amount: 0, icon: Images.Bnb },
    { name: 'DOGE', price: 85987.99, amount: 0, icon: Images.Coin },
];

const Send = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    const validatedAssets = assets.map((asset) => ({
        ...asset,
        price: isNaN(asset.price) ? 0 : asset.price,
        amount: isNaN(asset.amount) ? 0 : asset.amount,
    }));

    const filteredAssets = validatedAssets.filter((asset) =>
        asset.name.toLowerCase().includes(search.toLowerCase())
    );
    const handleAssetPress = (asset) => {
        navigate('/sendToken', { state: { asset } });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
                        <Icon name="chevron-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Select Token</Text>
                    <View style={{ width: 32 }} />
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


                <FlatList
                    data={filteredAssets}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <AssetCard {...item} onPress={() => handleAssetPress(item)} />
                    )}
                    contentContainerStyle={styles.list}
                />
            </View>
        </SafeAreaView>
    );
};

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
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#00011B',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 10
    },
    searchIcon: {
        marginRight: 6,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 14,
    },
    list: {
        paddingBottom: 24,
    },
});

export default Send;
