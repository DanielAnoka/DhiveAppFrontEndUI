import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useLocation } from "react-router-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import CustomButton from "../components/Button";
import { Icons } from "../constants/icon";
import { Images } from "../constants/image";
const { height } = Dimensions.get("window");

const SelectToken = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const location = useLocation();
  const { asset } = location.state || {};
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);
  const pinInputs = useRef([]);

  const slideAnim = useRef(new Animated.Value(0)).current;

  if (!asset) {
    return (
      <View style={styles.centered}>
        <Text>No asset selected.</Text>
      </View>
    );
  }
  const closeModal2 = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible2(false);
    });
  };
  const closeModal3 = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible3(false);
    });
  };
  const handleBack = () => {
    navigate("/receive");
  };
  const handleTf = () => {
    navigate("/tf");
  };
  const convertToUSD = (usdtAmount) => {
    return usdtAmount * 1;
  };

  const toggleModal = () => {
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
      });
    }
  };

  const toggleModal2 = () => {
    // Start closing the first modal
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // After animation ends, hide the first modal
      setModalVisible(false);

      // Add a small delay to ensure cleanup is complete
      setTimeout(() => {
        setModalVisible2(true); // Show second modal
        slideAnim.setValue(0); // Reset animation
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 50); // Short delay (can adjust if needed)
    });
  };

  const toggleModal3 = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible2(false);

      setPin(["", "", "", ""]);
      pinInputs.current.forEach((input) => input?.clear?.());
      pinInputs.current.forEach((input) => input?.blur?.());

      setTimeout(() => {
        setModalVisible3(true);
        slideAnim.setValue(0);
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 30);
    });
  };

  const handlePinChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto-focus logic
    if (value && index < 3) {
      pinInputs.current[index + 1]?.focus();
    } else if (!value && index > 0) {
      pinInputs.current[index - 1]?.focus();
    }

    const updatedPin = newPin.join("");
    if (updatedPin.length === 4) {
      setTimeout(() => {
        if (updatedPin === "1111") {
          toggleModal3();
        } else {
          Alert.alert("Invalid PIN", "The PIN you entered is incorrect.");
          setPin("");
        }
      }, 200);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
            <Icon name="chevron-back" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}> Select {asset.name}</Text>
          <View style={{ width: 32 }} />
        </View>

        <Text style={styles.label}>Address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={address}
            onChangeText={setAddress}
            placeholder="Paste"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.pasteButton}>
            <Text style={styles.pasteButtonText}>Paste</Text>
            <Image source={Icons.Scranner2} style={styles.pasteIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Amount</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={amount}
            onChangeText={setAmount}
            placeholder="Paste"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.pasteButton}>
            <Text style={styles.pasteButtonText}>{asset.name}</Text>
            <Text style={styles.pasteButtonText2}>Max</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ≈ $ {convertToUSD(amount || 0).toFixed(2)}
          </Text>

          <Text style={styles.footerText2}>Balance: {asset.amount} </Text>
        </View>

        <View style={styles.table}>
          <View style={styles.feeContainer}>
            <Text style={styles.feeLabel}>Gas Fee</Text>
            <Text style={styles.feeAmount}>1 USDT ($1.00)</Text>
          </View>
          <View style={styles.feeContainer}>
            <Text style={styles.feeLabel}>Platform Fee</Text>
            <Text style={styles.feeAmount}>1 USDT ($1.00)</Text>
          </View>
          <View style={styles.feeContainer2}>
            <Text style={styles.feeLabel}>Max Total</Text>
            <Text style={styles.feeAmount}>1 USDT ($1.00)</Text>
          </View>
        </View>
        <CustomButton
          text="Continue"
          style={styles.importButton}
          onPress={toggleModal}
        />
      </View>
      {(modalVisible || modalVisible2 || modalVisible3) && (
        <View style={styles.overlay} />
      )}

      {modalVisible && (
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
          <View style={styles.modalContent}>
            <View style={styles.modalHeaderRow}>
              <Text style={styles.modalHeaderText}>Confirm Transaction</Text>
              <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
                <Icon name="close" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.amount}>
              <Text style={styles.amountText}>392.45 USDT</Text>
              <Text style={styles.approxText}>≈ $392.45</Text>
            </View>

            <View style={styles.table2}>
              <View style={styles.feeContainer2}>
                <Text style={styles.feeLabel}>Send To</Text>
                <Text style={styles.feeAmount}>0x49e3b...oabeb3</Text>
              </View>
              <View style={styles.feeContainer2}>
                <Text style={styles.feeLabel}>Asset</Text>
                <Text style={styles.feeAmount}>USD Tether (USDT)</Text>
              </View>
              <View style={styles.feeContainer2}>
                <Text style={styles.feeLabel}>Network Fee</Text>
                <Text style={styles.feetime}>$0.14</Text>
              </View>
              <View style={styles.feeContainer2}>
                <Text style={styles.feeLabel}>Est. Time</Text>
                <Text style={styles.feetime}>1 min.</Text>
              </View>
            </View>

            <CustomButton text="Confirm Details" onPress={toggleModal2} />
          </View>
        </Animated.View>
      )}

      {modalVisible2 && (
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
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent2}>
              <TouchableOpacity style={styles.closeIcon2} onPress={closeModal2}>
                <Icon name="close" size={25} color="black" />
              </TouchableOpacity>

              <View style={styles.imageWrapper}>
                <Image source={Images.Lock} style={styles.successImage} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalHeaderText}>Input Payment Pin</Text>
                <Text style={styles.modalSubText}>
                  Use your PIN code to authorize this {"\n"}transaction
                </Text>
              </View>

              <View style={styles.pinContainer}>
                {[0, 1, 2, 3].map((index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => (pinInputs.current[index] = ref)}
                    style={styles.pinInput}
                    value={pin[index]}
                    onChangeText={(value) => handlePinChange(value, index)}
                    secureTextEntry
                    maxLength={1}
                    textAlign="center"
                    keyboardType="numeric"
                    textContentType="oneTimeCode"
                  />
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      )}

      {modalVisible3 && (
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
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeIcon2} onPress={closeModal3}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>

            <Image source={Images.Success} style={styles.successImage3} />

            <View style={styles.textContainer}>
              <Text style={styles.modalHeaderText}>Transfer Successful</Text>
              <Text style={styles.modalSubText}>
                Your transfer of 392.45 USDT was successful
              </Text>
            </View>

            <CustomButton text="Back home" onPress={handleTf} />
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    marginBottom: 10,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#00011B",
  },

  importButton: {
    backgroundColor: "#444CE7",
    marginVertical: "39%",
    padding: 15,
    alignItems: "center",
    marginHorizontal: 15,
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "600",
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 14,
    height: 48,
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  pasteButtonText: {
    fontSize: 14,
    color: "#717680",
    marginRight: 5,
    fontWeight: "400",
    lineHeight: 20,
  },
  pasteButtonText2: {
    fontSize: 14,
    color: "#444CE7",
    marginRight: 5,
    fontWeight: "400",
    lineHeight: 20,
  },
  pasteIcon: {
    marginLeft: 5,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  pasteButton: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 16,
    gap: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#717680",
  },
  footerText2: {
    fontSize: 14,
    color: "#444CE7",
  },
  footerAmount: {
    fontSize: 14,
    color: "#444CE7",
    fontWeight: "600",
  },
  footerBalance: {
    fontSize: 14,
    color: "#444CE7",
    fontWeight: "600",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: "30%",
  },
  feeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  feeContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  feeLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#414651",
    lineHeight: 20,
  },
  feeAmount: {
    fontSize: 14,
    fontWeight: "400",
    color: "#414651",
  },
  feetime: {
    fontSize: 12,
    fontWeight: "500",
    color: "#444CE7",
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    justifyContent: "flex-end",
  },
  modalContent: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 300,
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    position: "relative",
    paddingTop: 40,
  },
  modalContent2: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 450,
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    position: "relative",
    paddingTop: 40,
  },
  closeIcon: {
    position: "absolute",
    top: -1,
    right: 10,
    zIndex: 10,
    width: 24,
    height: 24,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon2: {
    position: "absolute",
    top: 14,
    right: 20,
    zIndex: 10,
    width: 27,
    height: 27,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon2: {
    position: "absolute",
    top: 14,
    right: 20,
    zIndex: 10,
    width: 27,
    height: 27,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  successImage: {
    width: 30,
    height: 30,
  },
  successImage3: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 10,
  },

  modalHeaderText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#101828",
    marginBottom: 8,
    textAlign: "center",
  },
  modalSubText: {
    fontSize: 16,
    color: "#667085",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 24,
  },
  modalHeaderRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  amountText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3B5998",
    marginBottom: 5,
  },
  approxText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  amount: {
    justifyContent: "center",
    alignItems: "center",
  },
  table2: {
    padding: 20,
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    borderColor: "#ddd",
    marginBottom: 50,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pinInput: {
    width: 30,
    height: 30,
    borderRadius: 24,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 40,
    color: "#444CE7",
    borderWidth: 1,
    borderColor: "#444CE7",
  },
});

export default SelectToken;
