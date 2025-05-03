import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigate } from "react-router-native";
import TransferCard from "../components/TransactionCard";
import { assets } from "../constants";
import FilterModal from "../components/FilterModal";
import { Images } from "../constants/image";
const { height } = Dimensions.get("window");

const DetailRow = ({ label, value, valueColor = "#000" }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={[styles.detailValue, { color: valueColor }]}>{value}</Text>
  </View>
);

const TransactionHistory = () => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const navigate = useNavigate();
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const validatedAssets = assets.map((asset) => ({
    ...asset,
    price: isNaN(asset.price) ? 0 : asset.price,
    change: isNaN(asset.change) ? 0 : asset.change,
    amount: isNaN(asset.amount) ? 0 : asset.amount,
  }));

  const filteredAssets = validatedAssets.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleModal = (item = null) => {
    if (item) setSelectedTransaction(item);

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
        setSelectedTransaction(null);
      });
    }
  };

  const handleBack = () => navigate(-1);
  const handleTf = () => toggleModal();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
            <Icon name="chevron-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Transaction History</Text>
          <TouchableOpacity
            style={styles.iconCircle3}
            onPress={() => setFilterModalVisible(true)}
          >
            <Icon name="more-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={18}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search token or paste address"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Transaction List */}
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {filteredAssets.length > 0 ? (
            <FlatList
              data={filteredAssets}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <TransferCard {...item} onPress={() => toggleModal(item)} />
              )}
              contentContainerStyle={styles.listWithFooter}
            />
          ) : (
            <View style={styles.noTransactionsContainer}>
              <Image
                source={Images.Empty}
                style={styles.noTransactionsImage}
                resizeMode="contain"
              />
              <Text style={styles.noTransactionsText}>
                No transactions found
              </Text>
              <Text style={styles.bottom}>
                Cannot find your transaction?{" "}
                <Text style={styles.explorer}>Check explorer</Text>
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Modal & Overlay */}
      {modalVisible && <View style={styles.overlay} />}
      {modalVisible && selectedTransaction && (
        <Animated.View
          style={[
            styles.modalContainer,
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [height, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Transaction Details</Text>
              <TouchableOpacity onPress={() => toggleModal(null)}>
                <Icon
                  name="x"
                  style={styles.iconCircleX}
                  size={22}
                  color="#000"
                />
              </TouchableOpacity>
            </View>

            {/* Token Icon and Amount */}
            <View style={styles.tokenSection}>
              <Image source={Images.Usdt} style={styles.tokenIcon} />
              <Text style={styles.amountText}>
                ${selectedTransaction.price?.toFixed(2)}
              </Text>
              <Text style={styles.swapDescription}>
                {`Swap From ${selectedTransaction.name} - ETH`}
              </Text>
            </View>

            {/* Transaction Detail Rows */}
            <View style={styles.detailsBox}>
              <DetailRow
                label="Swap From"
                value={`${selectedTransaction.amount} ${selectedTransaction.name}`}
              />
              <DetailRow label="Swap To" value="10.65 ETH" />
              <DetailRow label="Purchase Rate" value="1 SHIB = 22,000 ETH" />
              <DetailRow label="Reference ID" value="09033883DH" />
              <DetailRow label="Status" value="Success" valueColor="#10B981" />
              <DetailRow label="Time Stamp" value="April 25, 2025 • 5:00PM" />
            </View>

            {/* Done Button */}
            <TouchableOpacity style={styles.doneButton} onPress={handleTf}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>

            {/* Support Footer */}
            <Text style={styles.supportText}>
              Having any issues with this transaction?{"\n"}
              Reach out to us via our{" "}
              <Text style={styles.supportLink}>Support Channel</Text>.
            </Text>
          </View>
        </Animated.View>
      )}

      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default TransactionHistory;

// STYLES
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#00011B",
  },
  iconCircleX: {
    position: "absolute",
    top: -3,
    right: 3,
    zIndex: 10,
    width: 24,
    height: 24,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00011B33",
  },
  iconCircle3: {
    width: 30,
    height: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00011B33",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
  listWithFooter: {
    paddingBottom: 40,
  },
  noTransactionsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  noTransactionsImage: {
    width: 212,
    height: 200,
    marginBottom: 16,
  },
  noTransactionsText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  bottom: {
    textAlign: "center",
    color: "#000",
  },
  explorer: {
    color: "#007BFF",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    zIndex: 2, // ensure it's on top of overlay
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  tokenSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  tokenIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  amountText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  swapDescription: {
    fontSize: 14,
    color: "#6B7280",
  },
  detailsBox: {
    width: "100%",
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 16,
    marginBottom: 40,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  detailLabel: {
    fontSize: 14,
    color: "#6B7280",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  doneButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  doneButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  supportText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  supportLink: {
    color: "#4F46E5",
    fontWeight: "500",
  },
});
