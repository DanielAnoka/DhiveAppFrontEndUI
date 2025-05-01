import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icons } from '../constants';

const { width } = Dimensions.get('window');

const BottomNav = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab}>
                <Image source={Icons.Feeds} style={styles.icon} />
                <Text style={styles.label}>Feeds</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.tab, styles.leftTab]}>
                <Image source={Icons.Shop} style={styles.icon} />
                <Text style={styles.label}>Explore</Text>
            </TouchableOpacity>


            <View style={styles.fabWrapper}>
                <TouchableOpacity style={styles.fabButton}>
                    <Image source={Icons.Buy} style={styles.fabIcon} />
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={[styles.tab, styles.rightTab]}>
                <Image source={Icons.Wallet} style={styles.icon} />
                <Text style={[styles.label, styles.activeLabel]}>Assets</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <Image source={Icons.Profile} style={styles.icon} />
                <Text style={styles.label}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 70,
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    leftTab: {
        marginRight: 25,
    },
    rightTab: {
        marginLeft: 25,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 11,
        color: '#666',
        marginTop: 2,
    },
    activeLabel: {
        color: '#5F6DFB',
        fontWeight: '600',
    },
    fabWrapper: {
        position: 'absolute',
        top: -30,
        left: width / 2 - 30,
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 4,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    fabButton: {
        width: 60,
        height: 60,
        backgroundColor: '#5F6DFB',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
});

export default BottomNav;
