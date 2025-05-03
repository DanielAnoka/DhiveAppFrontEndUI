import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TransferCard = ({ name, description, date, about, icon, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>

            <View style={styles.card}>
                <View style={[styles.iconContainer, { backgroundColor }]}>
                    <Image source={icon} style={styles.icon} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.about}>{about}</Text>
                </View>
                <View style={styles.amountSection}>
                    <Text style={[styles.amount, description.startsWith('-') ? styles.red : styles.green]}>
                        {description}
                    </Text>

                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: '#F3F4F6',
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        elevation: 2,
    },
    icon: {
        width: 10,
        height: 20,
        resizeMode: 'contain',
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#252B37',
    },
    about: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 2,
    },
    amountSection: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    amount: {
        fontSize: 10,
        fontWeight: '600',
        color: '#252B37',
    },
    red: {
        color: '#EF4444',
    },
    green: {
        color: '#10B981',
    },
    date: {
        fontSize: 10,
        color: '#00011BCC ',
        marginTop: 2,
        fontWeight: 20,
    },
});

export default TransferCard;
