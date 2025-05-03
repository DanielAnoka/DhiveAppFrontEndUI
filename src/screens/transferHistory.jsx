import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import TransferCard from "../components/TransactionCard";
import { Images } from "../constants/image";
import { Icons } from "../constants/icon";

const { height } = Dimensions.get("window");

const actions = [
  { name: "Send", icon: Icons.Send, backgroundColor: "#EFF8FF" },
  { name: "Receive", icon: Icons.ArrowDown, backgroundColor: "#F5F8FF" },
  { name: "Swap", icon: Icons.More, backgroundColor: "#ECFDF3" },
];

const assets = [
  {
    name: "Sent USDT",
    description: "-392.45 USDT",
    date: "Yesterday",
    about: "Sent to 0x49e3b...oabeb3",
    price: 1.0,
    change: 0.02,
    amount: 392.45,
    icon: Icons.ArrowUp,
    backgroundColor: "#00011B",
  },
  {
    name: "Swap",
    description: "+0.9893820 USDT",
    date: "Yesterday",
    about: "BNB to Ethereum",
    price: 85987.99,
    change: 4.96,
    amount: 0,
    icon: Icons.Swap,
    backgroundColor: "#00011B",
  },
];

const TransactionHistory = ({ balance = "392.45", transactions = [] }) => {
  const validatedAssets = assets.map((asset) => ({
    ...asset,
    price: asset.price != null && !isNaN(asset.price) ? asset.price : 0,
    change: asset.change != null && !isNaN(asset.change) ? asset.change : 0,
    amount: asset.amount != null && !isNaN(asset.amount) ? asset.amount : 0,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.balanceContainer}>
        <Image
          source={Images.Usdt}
          style={styles.balanceImage}
          resizeMode="contain"
        />
        <Text style={styles.balanceText}>{balance} USDT</Text>
        <Text style={styles.balanceDollarText}>≈ ${balance}</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.row}>
          {actions.map((action) => (
            <TouchableOpacity key={action.name} style={styles.btn}>
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: action.backgroundColor },
                ]}
              >
                <Image source={action.icon} style={styles.icon} />
              </View>
              <Text style={styles.text}>{action.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={styles.historyHeader}>Transaction History</Text>

      <View style={{ flex: 1, marginHorizontal: 20 }}>
        {validatedAssets.length > 0 ? (
          <FlatList
            data={validatedAssets}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <TransferCard {...item} />}
            contentContainerStyle={styles.listWithFooter}
          />
        ) : (
          <View style={styles.noTransactionsContainer}>
            <Image
              source={Images.Empty}
              style={styles.noTransactionsImage}
              resizeMode="contain"
            />
            <Text style={styles.noTransactionsText}>No transaction yet</Text>
          </View>
        )}
        <Text style={styles.bottom}>
          Cannot find your transaction?{" "}
          <Text style={styles.explorer}>Check explorer</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  main: {
    marginBottom: 40,
  },
  balanceContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    marginTop: "25%",
  },
  balanceImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  balanceText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  balanceDollarText: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  text: {
    marginTop: 13,
    fontSize: 12,
    fontWeight: "500",
    color: "#1F235B",
  },
  transactionItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 2,
  },
  listContent: {
    paddingBottom: 40,
  },
  noTransactionsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: -40,
  },
  noTransactionsImage: {
    width: 240,
    height: 240,
  },
  noTransactionsText: {
    fontSize: 16,
    color: "#535862",
    marginTop: 10,
    fontWeight: 500,
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
    color: "#1F235B",
    paddingHorizontal: 20,
  },
  bottom: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: 400,
    color: "#535862",
    lineHeight: 20,
    marginVertical: 36,
  },
  explorer: {
    color: "#444CE7",
  },
  list: {
    marginHorizontal: 16,
  },
});

export default TransactionHistory;
