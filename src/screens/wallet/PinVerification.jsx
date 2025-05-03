import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigate } from "react-router-native";
import PrimaryButton from "../../components/PrimaryButton";

const PinVerification = () => {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", "", "", ""]);
  const pinInputs = useRef([]);
  const confirmPinInputs = useRef([]);
  const navigate = useNavigate();

  const handlePinChange = (text, index) => {
    const currentPin = [...pin];
    currentPin[index] = text;
    setPin(currentPin);

    if (text && index < 5) {
      pinInputs.current[index + 1].focus();
    }

    if (!text && index > 0) {
      pinInputs.current[index - 1].focus();
    }

    const joinedPin = pin.join("");
    if (joinedPin.length === 6 && joinedPin === "111111") {
      setTimeout(() => {
        navigate("/next"); // 🔁 Replace with your next screen route
      }, 200);
    }
  };
  const handleConfirmPinChange = (text, index) => {
    const currentPin = [...confirmPin];
    currentPin[index] = text;
    setConfirmPin(currentPin);

    if (text && index < 5) {
      confirmPinInputs.current[index + 1].focus();
    }

    if (!text && index > 0) {
      confirmPinInputs.current[index - 1].focus();
    }

    const joinedConfirmPin = confirmPin.join("");
    if (joinedConfirmPin.length === 6 && joinedConfirmPin === "111111") {
      setTimeout(() => {
        navigate("/next"); // 🔁 Replace with your next screen route
      }, 200);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !pin[index] && index > 0) {
      pinInputs.current[index - 1].focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1, paddingHorizontal: 24, marginTop: 40 }}>
          <View style={styles.spacer} />

          <Text style={styles.label}>Set Pin</Text>
          <Text style={styles.text}>
            Only you can access your wallet — set your PIN now.
          </Text>

          <Text style={{ marginTop: 20, fontSize: 16 }}>Pin</Text>

          <View style={styles.otpContainer}>
            {Array(6)
              .fill("")
              .map((_, index) => (
                <View key={index} style={styles.otpBoxWrapper}>
                  <TextInput
                    ref={(ref) => (pinInputs.current[index] = ref)}
                    style={styles.otpBox}
                    maxLength={1}
                    keyboardType="numeric"
                    textAlign="center"
                    value={pin[index]}
                    onChangeText={(text) => handlePinChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    selectionColor="#000000"
                    secureTextEntry={true} // 👈 Hides the digit
                  />
                  {!pin[index] && <View style={styles.dashLine} />}
                </View>
              ))}
          </View>
          <Text style={{ marginTop: 20, fontSize: 16 }}>Confirm Pin</Text>

          <View style={styles.otpContainer}>
            {Array(6)
              .fill("")
              .map((_, index) => (
                <View key={index} style={styles.otpBoxWrapper}>
                  <TextInput
                    ref={(ref) => (confirmPinInputs.current[index] = ref)}
                    style={styles.otpBox}
                    maxLength={1}
                    keyboardType="numeric"
                    textAlign="center"
                    value={confirmPin[index]}
                    onChangeText={(text) => handleConfirmPinChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    selectionColor="#000000"
                    secureTextEntry={true} // 👈 Hides the digit
                  />
                  {!confirmPin[index] && <View style={styles.dashLine} />}
                </View>
              ))}
          </View>
          <View style={{ marginTop: 27, width: "100%", marginLeft: -5 }}>
            <PrimaryButton
              onPress={() => navigate("/protect-wallet")}
              text="Continue"
              width={"100%"}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  spacer: {
    height: Platform.OS === "android" ? 64 : 48,
  },
  label: {
    fontSize: 18,
    color: "#00011B",
    marginBottom: 8,
    fontWeight: "500",
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    color: "#00011B",
    lineHeight: 22,
    marginTop: 8,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    gap: 7,
  },
  otpBoxWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  otpBox: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#E9EBF0",
    borderRadius: 8,
    fontSize: 24,
    fontWeight: "500",
    backgroundColor: "#00011B05",
    zIndex: 1,
  },
  dashLine: {
    width: 20,
    height: 2,
    backgroundColor: "#E9EBF0",
    position: "absolute",
    zIndex: 0,
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    width: 356,
    height: 356,
  },
});

export default PinVerification;
