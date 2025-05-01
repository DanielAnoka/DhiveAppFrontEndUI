import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icons } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderSection = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const isSmallScreen = Dimensions.get('window').width < 375;

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <Text style={styles.assetsText}>Assets</Text>
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconCircle}>
            <Image source={Icons.Scranner} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle}>
            <Image source={Icons.Bell} style={styles.icon} />
            <View style={styles.redDot} />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.balanceSection}>
        <View style={styles.balanceRow}>
          <Text style={styles.totalLabel}>Total Balance</Text>

          <Icon
            name={isBalanceVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#ccc"
            style={{ marginLeft: 4 }}
            onPress={toggleBalanceVisibility}
          />
        </View>
        <Text style={[styles.balance, { fontSize: isSmallScreen ? 42 : 52 }]}>
          {isBalanceVisible ? '$392.45' : '****'}
        </Text>
        <Text style={styles.change}>
          +$0.01 (+0.05%) <Text style={styles.today}>Today</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F235B',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 30,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  assetsText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  iconCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#FFFFFF17',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: 4,
    right: 4,
  },
  balanceSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#ccc',
    fontSize: 14,
  },
  balance: {
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  change: {
    color: '#4CAF50',
    fontSize: 15,
    marginTop: 2,
  },
  today: {
    color: '#fff',
  },
});

export default HeaderSection;
