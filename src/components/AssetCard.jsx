import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const AssetCard = ({ name, price, change, amount, icon, onPress }) => {
  const validPrice = price != null && !isNaN(price) ? price : 0;
  const validChange = change != null && !isNaN(change) ? change : 0;
  const validAmount = amount != null && !isNaN(amount) ? amount : 0;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.row}>
        <Image source={icon} style={styles.icon} />

        <View style={styles.assetInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{name}</Text>
            {validChange !== 0 && (
              <Text style={[styles.change, { color: validChange >= 0 ? '#16A34A' : '#DC2626' }]}>
                {validChange >= 0 ? '+' : ''}{validChange}%
              </Text>
            )}
          </View>
          <Text style={styles.tokenPrice}>${validPrice.toFixed(2)}</Text>
        </View>

        <View style={styles.amountInfo}>
          <Text style={styles.amount}>{validAmount}</Text>
          <Text style={styles.usd}>${(validAmount * validPrice).toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: 'contain',
  },
  assetInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#252B37',
  },
  change: {
    fontSize: 12,
    fontWeight: '500',
  },
  tokenPrice: {
    fontSize: 12,
    color: '#252B37',
    marginTop: 2,
  },
  amountInfo: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#252B37',
  },
  usd: {
    fontSize: 12,
    color: '#252B37',
    marginTop: 2,
  },
});

export default AssetCard;
