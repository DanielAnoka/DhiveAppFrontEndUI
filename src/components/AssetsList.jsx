import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AssetCard from "./AssetCard";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import { Images } from "../constants/image";

const assets = [
  { name: "USDT", price: 1.0, change: 0.02, amount: 392.45, icon: Images.Usdt },
  {
    name: "Bitcoin",
    price: 85987.99,
    change: 4.96,
    amount: 0,
    icon: Images.Btc,
  },
  {
    name: "Ethereum",
    price: 85987.99,
    change: -4.96,
    amount: 0,
    icon: Images.Ethe,
  },
  { name: "BNB", price: 85987.99, change: 4.96, amount: 0, icon: Images.Bnb },
];

const AssetsList = ({ navigation }) => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/token");
  };
  const handleTransaction = () => {
    navigate("/transaction");
  };

  const validatedAssets = assets.map((asset) => ({
    ...asset,
    price: asset.price != null && !isNaN(asset.price) ? asset.price : 0,
    change: asset.change != null && !isNaN(asset.change) ? asset.change : 0,
    amount: asset.amount != null && !isNaN(asset.amount) ? asset.amount : 0,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.innerContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Assets</Text>
          <TouchableOpacity
            style={styles.historyButton}
            onPress={handleTransaction}
          >
            <Text style={styles.link}>Transaction History</Text>
            <Icon name="chevron-forward" size={16} color="#4F46E5" />
          </TouchableOpacity>
        </View>

        {/* Asset List */}
        <FlatList
          data={validatedAssets}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <AssetCard {...item} />}
          contentContainerStyle={styles.list}
        />

        <TouchableOpacity onPress={handleChange} style={styles.manageWrapper}>
          <Text style={styles.manage}>Manage token</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  innerContent: {
    marginTop: 30,
  },
  header: {
    marginTop: 16,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#252B37",
  },
  historyButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "#4F46E5",
    fontSize: 14,
    marginRight: 4,
    fontWeight: "500",
  },
  list: {
    paddingBottom: 24,
  },
  manageWrapper: {
    alignItems: "center",
    paddingVertical: 16,
  },
  manage: {
    color: "#4F46E5",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default AssetsList;
