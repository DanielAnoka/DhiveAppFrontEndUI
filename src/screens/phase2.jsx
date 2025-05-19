import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import DynamicStepLayout from "./StepOneLayout";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";
import { BlurView } from "expo-blur";
import CustomButton from "../components/Button";
import { Images } from "../constants";
import { useNavigate } from "react-router-native";

const { height } = Dimensions.get("window");

const Phase2 = () => {
  const [hidden, setHidden] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/phase3");
  };

  const seedPhrase = [
    "rock",
    "praise",
    "jump",
    "food",
    "joke",
    "sleep",
    "junk",
    "roller",
    "check",
    "road",
    "egg",
    "lion",
  ];

  const handleCopy = () => {
    Clipboard.setString(seedPhrase.join(" "));
    // console.log("Copied to clipboard");
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => console.log("Back pressed")}
        >
          <View style={styles.circle}>
            <Ionicons name="chevron-back" size={20} color="#000" />
          </View>
        </TouchableOpacity>

        <Text style={styles.backText}>Secure Your Wallet</Text>
      </View>

      <DynamicStepLayout currentStep={2}>
        <Text style={styles.text}>
          Your <Text style={styles.boldText}>Secret Passphrase</Text> is the
          master key to your wallet. This is the only way to recover your wallet
          if you ever get locked out of the app or sign into a new device.
        </Text>

        <View
          style={{ marginVertical: 42, marginTop: 50, marginHorizontal: 15 }}
        >
          <TouchableOpacity
            onPress={() => setHidden(!hidden)}
            style={styles.toggleContainer}
          >
            <Text style={styles.toggleText}>
              {hidden ? "Reveal recovery phrase" : "Hide recovery phrase"}
            </Text>
            <Ionicons
              name={hidden ? "eye-off" : "eye"}
              size={16}
              color="#101828"
              style={{ marginLeft: 6 }}
            />
          </TouchableOpacity>

          <View style={styles.phraseContainer}>
            {seedPhrase.map((word, index) => (
              <View key={index} style={styles.phraseItem}>
                {hidden ? (
                  <BlurView intensity={50} tint="light" style={styles.blurBox}>
                    <Text style={styles.hiddenText}>{index + 1}.</Text>
                  </BlurView>
                ) : (
                  <Text style={styles.phraseText}>
                    {index + 1}. {word}
                  </Text>
                )}
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
            <Text style={styles.copyText}>Copy to clipboard</Text>
            <Ionicons
              name="copy-outline"
              size={16}
              color="#101828"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>

        <Button
          onPress={toggleModal}
          text="Backup to Drive"
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </DynamicStepLayout>

      {/* Overlay behind modal */}
      {modalVisible && <View style={styles.overlay} />}

      {/* Slide-up modal */}
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
            <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>

            {/* Add Image */}
            <Image source={Images.Success} style={styles.successImage} />

            <View style={styles.textContainer}>
              <Text style={styles.modalHeaderText}>Successful</Text>
              <Text style={styles.modalSubText}>
                Your wallet has been created successfully.
              </Text>
            </View>

            <CustomButton text="Continue" onPress={handleNext} />
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 8,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  backText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginLeft: -32,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    marginTop: 20,
    letterSpacing: 0.48,
  },
  closeIcon: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  toggleContainer: {
    position: "absolute",
    top: -24,
    alignSelf: "center",
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#D0D5DD",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  toggleText: {
    color: "#101828",
    fontWeight: "600",
    fontSize: 14,
  },
  phraseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
    marginTop: 20,
  },
  phraseItem: {
    width: "30%",
    marginVertical: 8,
    paddingRight: 20,
    paddingTop: 10,
  },
  phraseText: {
    color: "#444CE7",
    fontWeight: "600",
    fontSize: 14,
  },
  copyButton: {
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E4E7EC",
  },
  copyText: {
    fontWeight: "600",
    color: "#101828",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#444CE7",
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  blurBox: {
    height: 28,
    borderRadius: 6,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  hiddenText: {
    color: "#E0E7FF",
    fontWeight: "600",
    fontSize: 14,
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
    zIndex: 2,
  },
  modalContent: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 400,
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
    top: 10,
    right: 10,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  successImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  modalHeaderText: {
    fontSize: 22,
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
});

export default Phase2;
