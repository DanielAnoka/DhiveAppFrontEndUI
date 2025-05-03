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
import Icon from "react-native-vector-icons/Ionicons";
import { useLocation, useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import CustomButton from "../../components/Button";

const { height } = Dimensions.get("window");

const DetailRow = ({ label, value, valueColor = "#000" }) => (
    <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={[styles.detailValue, { color: valueColor }]}>{value}</Text>
    </View>
);

const TokenSwap = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [pin, setPin] = useState(["", "", "", ""]);
    const pinInputs = useRef([]);

    const slideAnim = useRef(new Animated.Value(0)).current;

    const [fromToken, setFromToken] = useState({
        name: "SHIB",
        amount: "2568309",
        usd: "$23.67",
        icon: Images.Coin,
    });
    const [toToken, setToToken] = useState({
        name: "ETH",
        amount: "0.4334529811456",
        usd: "$23.67",
        icon: Images.Ethe,
    });

    const handleBack = () => navigate(-1);
    const handleEnd = () => navigate("/");

    const handleSwitch = () => {
        const temp = { ...fromToken };
        setFromToken(toToken);
        setToToken(temp);
    };
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
    const closeModal4 = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setModalVisible4(false);
        });
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


            setTimeout(() => {
                setModalVisible2(true);
                slideAnim.setValue(0);
                Animated.timing(slideAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }, 50);
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

    const toggleModal4 = () => {
        // Start closing the first modal
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            // After animation ends, hide the first modal
            setModalVisible3(false);


            setTimeout(() => {
                setModalVisible4(true);
                slideAnim.setValue(0);
                Animated.timing(slideAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }, 50);
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
                {/* Header */}
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
                        <Icon name="chevron-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Swap Token</Text>
                    <View style={{ width: 32 }} />
                </View>

                {/* From Token */}
                <View style={styles.tokenBox}>
                    <View style={styles.tokenRow}>
                        {/* Left side: From label and Ethereum dropdown */}
                        <View style={styles.leftGroup}>
                            <Text style={styles.tokenLabel}>From</Text>
                            <TouchableOpacity style={styles.networkDropdown}>
                                <Text style={styles.networkLabel}>Ethereum</Text>
                                <Icon name="chevron-down" size={14} color="#666" style={{ marginLeft: 4 }} />
                            </TouchableOpacity>
                        </View>

                        {/* Right side: Token amount and Max button */}
                        <View style={styles.rightGroup}>
                            <Text style={styles.tokenAmount}>{fromToken.amount}</Text>
                            <TouchableOpacity>
                                <Text style={styles.maxText}>Max</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.flexContainer}>
                        {/* Top Section (aligns to the left) */}
                        <View style={styles.amountRow}>
                            <Image source={fromToken.icon} style={styles.tokenIcon} />
                            <Text style={styles.tokenName}>{fromToken.name}</Text>
                            <Icon name="chevron-forward" size={16} color="#000" style={{ marginLeft: 4 }} />
                        </View>

                        {/* Bottom Section (aligns to the right) */}
                        <View style={styles.inputAndUSDContainer}>
                            <View style={styles.inputRow}>
                                <TextInput
                                    style={styles.amountInput}
                                    value={fromToken.amount}
                                    keyboardType="numeric"
                                    placeholder="0.0"
                                    placeholderTextColor="#ccc"
                                    onChangeText={(text) => setFromToken({ ...fromToken, amount: text })}
                                />
                            </View>
                            <Text style={styles.usdText}>{fromToken.usd}</Text>
                        </View>
                    </View>

                </View>

                {/* Switch Icon */}
                <TouchableOpacity style={styles.switchIconContainer} onPress={handleSwitch}>
                    <Icon name="swap-vertical" size={24} color="#aaa" />
                </TouchableOpacity>

                {/* To Token */}
                <View style={styles.tokenBox}>
                    <View style={styles.tokenRow}>
                        <View style={styles.leftGroup}>
                            <Text style={styles.tokenLabel}>To</Text>
                            <TouchableOpacity style={styles.networkDropdown}>
                                <Text style={styles.networkLabel}>Ethereum</Text>
                                <Icon name="chevron-down" size={14} color="#666" style={{ marginLeft: 4 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightGroup}>
                            <Text style={styles.tokenAmount}>{toToken.amount}</Text>
                        </View>
                    </View>

                    <View style={styles.flexContainer}>
                        {/* Left Side: Token Icon and Name */}
                        <View style={styles.amountRow}>
                            <Image source={toToken.icon} style={styles.tokenIcon} />
                            <Text style={styles.tokenName}>{toToken.name}</Text>
                            <Icon name="chevron-forward" size={16} color="#000" style={{ marginLeft: 4 }} />
                        </View>

                        {/* Right Side: Amount and USD Text */}
                        <View style={styles.inputAndUSDContainer}>
                            <Text style={styles.toAmountText}>{toToken.amount}</Text>
                            <Text style={styles.usdText}>{toToken.usd}</Text>
                        </View>
                    </View>

                </View>

                <Text style={styles.exchangeRate}>1 ETH = 12,873,755 SHIB</Text>

                {/* Fees */}
                <View style={styles.container}>
                    {/* Previous content */}

                    {/* Fees Container */}
                    <View style={styles.feesContainer}>
                        <View style={styles.feesBox}>
                            <Text style={styles.feeText}>Network Fee</Text>
                            <Text style={styles.feeValue}>0.00001 ETH ($0.14)</Text>
                        </View>
                        <View style={styles.feesBox}>
                            <Text style={styles.feeText}>Platform Fee</Text>
                            <Text style={styles.feeValue}>0.00012 ETH ($1.00)</Text>
                        </View>
                        <View style={styles.feesBox}>
                            <Text style={styles.feeText}>Est. Time</Text>
                            <Text style={[styles.feeValue, { color: "#444CE7" }]}>1 min.</Text>
                        </View>
                    </View>


                </View>
                <CustomButton text="Swap" style={styles.swapButton} onPress={toggleModal} />
            </View>
            
            {(modalVisible || modalVisible2 || modalVisible3 || modalVisible4) && (
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



                        <View style={styles.table2}>
                            <View style={styles.feeContainer2}>
                                <Text style={styles.feeLabel}>Swap From</Text>
                                <Text style={styles.feeAmount}>2,568,309 SHIB</Text>
                            </View>
                            <View style={styles.feeContainer2}>
                                <Text style={styles.feeLabel}>Swap To</Text>
                                <Text style={styles.feeAmount}>3.67 ETH</Text>
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

                        <CustomButton text="Confirm Details" onPress={toggleModal2} style={styles.swapButton2} />
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
                                <Image source={Images.PadLock} style={styles.successImage} />
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
                            <Text style={styles.modalHeaderText}>0.09839 ETH</Text>
                            <Text style={styles.modalSubText}>
                                Please wait while we swap your {"\n"}  asset to
                                <Text style={{ fontWeight: "600" }}> Ethereum Coin (ETH)</Text>.
                            </Text>
                        </View>

                        <TouchableOpacity onPress={toggleModal4}>
                            <Text style={styles.modal}>View Transaction Summary</Text>
                        </TouchableOpacity>

                        <CustomButton text="Back home" onPress={handleEnd} style={styles.swapButton2} />

                        <Text style={styles.supportText}>
                            Having any issues with this transaction?{"\n"}
                            Reach out to us via our{" "}
                            <Text style={styles.supportLink}>Support Channel</Text>.
                        </Text>
                    </View>
                </Animated.View>
            )}

            {modalVisible4 && (
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
                    <View style={styles.modalContainer4}>
                        {/* Modal Header */}
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Transaction Details</Text>
                            <TouchableOpacity onPress={closeModal4}>
                                <Icon name="close" style={styles.iconCircleX} size={22} color="#000" />
                            </TouchableOpacity>
                        </View>

                        {/* Token Icon and Amount */}
                        <View style={styles.tokenSection}>
                            <Image source={Images.Usdt} style={styles.tokenIcon} />
                            <Text style={styles.amountText}>$23.67</Text>
                            <Text style={styles.swapDescription}>Swap From SHIB - ETH</Text>
                        </View>


                        <View style={styles.detailsBox}>
                            <DetailRow label="Swap From" value="2568309 SHIB" />
                            <DetailRow label="Swap To" value="0.43 ETH" />
                            <DetailRow label="Purchase Rate" value="1 SHIB = 0.000000017 ETH" />
                            <DetailRow label="Reference ID" value="09033883DH" />
                            <DetailRow label="Status" value="Success" valueColor="#10B981" />
                            <DetailRow label="Time Stamp" value="April 25, 2025 • 5:00PM" />
                        </View>



                        <TouchableOpacity style={styles.doneButton} onPress={handleEnd}>
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
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
        marginBottom: 20,
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
    tokenBox: {
        backgroundColor: "#F7F8F9",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    tokenRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    leftGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        flex: 1,
    },
    rightGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    networkDropdown: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 8,
    },
    tokenLabel: {
        fontSize: 12,
        color: "#666",
    },
    networkLabel: {
        fontSize: 12,
        color: "#666",
    },
    tokenAmount: {
        fontSize: 13,
        color: "#000",
        fontWeight: "500",
    },
    flexContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    amountRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    tokenIcon: {
        width: 30,
        height: 30,
        marginRight: 6,
    },
    tokenName: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000",
    },
    // inputRow: {
    //     marginRight: 15,
    // },
    amountInput: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000",
        width: 100,
    },
    maxText: {
        color: "#4F46E5",
        fontSize: 13,
        fontWeight: "600",
        marginLeft: 8,
    },
    toAmountText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#bbb",
    },
    usdText: {
        fontSize: 12,
        color: "#888",
        marginTop: 4,
        textAlign: "right",
    },
    switchIconContainer: {
        alignItems: "center",
        marginBottom: 16,
    },
    exchangeRate: {
        textAlign: "center",
        fontSize: 12,
        color: "#666",
        marginBottom: 20,
    },
    feesBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    feeText: {
        fontSize: 13,
        color: "#666",
    },
    feeValue: {
        fontSize: 14,
        color: "#444CE7",
        fontWeight: "400",
    },
    swapButton: {
        backgroundColor: "#4F46E5",
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: "70%",
        marginHorizontal: 15,
    },
    swapButton2: {
        backgroundColor: "#4F46E5",
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 20,
        marginHorizontal: 12,
    },
    feesContainer: {
        marginTop: 45,
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
    modalContainer4: {
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
        marginTop: 10
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
        fontWeight: "700",
        color: "#181D27",
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
    modal: {
        fontSize: 16,
        color: "#444CE7",
        textAlign: "center",
        lineHeight: 34,
        marginBottom: 24,
        fontWeight: "600",
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
    supportText: {
        fontSize: 12,
        color: "#6B7280",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    supportLink: {
        color: "#4F46E5",
        fontWeight: "500",
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
});

export default TokenSwap;
