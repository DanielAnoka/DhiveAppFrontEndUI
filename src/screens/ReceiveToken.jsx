
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocation } from 'react-router-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import QRCode from 'react-native-qrcode-svg';
import CustomButton from '../components/Button';

const ReceiveToken = () => {
    const location = useLocation();
    const { asset } = location.state || {};
    const navigate = useNavigate();

    if (!asset) {
        return (
            <View style={styles.centered}>
                <Text>No asset selected.</Text>
            </View>
        );
    }
    const handleBack = () => {
        navigate('/receive');
    };
    const handleShare = () => {
        navigate('/');
    };

    const walletAddress = '0x5532ba4add77dd25fa11acc5a84e5f183f57525e';

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
                        <Icon name="chevron-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}> Receive {asset.name}</Text>
                    <View style={{ width: 32 }} />
                </View>

                <Text style={styles.warning}>
                    ⚠️ Only send {asset.name} assets to this address.
                </Text>
                <View style={styles.content}>
                    <View style={styles.qrWrapper}>
                        <QRCode
                            value={walletAddress}
                            size={220}
                            logo={asset.icon}
                            logoSize={50}
                            logoBackgroundColor="transparent"
                        />
                    </View>
                    <Text style={styles.address}>{walletAddress}</Text>

                    <View style={styles.addressRow}>
                        <Text style={styles.copy}>Copy</Text>
                        <TouchableOpacity onPress={console.log("copied")}>
                            <Icon name="copy-outline" size={15} color="#292D32" style={{ marginLeft: 8 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton text="Share Address" style={styles.importButton} onPress={handleShare} />
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
    icon: {
        width: 80,
        height: 80,
        marginBottom: 20,
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
    warning: {
        color: '#B54708',
        marginBottom: 10,
        fontSize: 13,
        backgroundColor: '#FFFAEB',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FEDF89',
        textAlign: 'center',
    },
    qrWrapper: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
    address: {
        fontSize: 14,
        color: '#333',
        marginTop: 10,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        marginTop: "20%",
        alignItems: 'center',
    },
    importButton: {
        backgroundColor: '#444CE7',
        marginBlock: '1%',
        padding: 15,
        alignItems: 'center',
        marginHorizontal: 15
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#E9EAEB',
        borderWidth: 1,
        borderColor: '#E9EAEB',
        borderRadius: 8,
        padding: 5,
    },
    copy: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 20
    }
});

export default ReceiveToken;
