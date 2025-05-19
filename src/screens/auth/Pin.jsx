import { useRef, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Pin = () => {
  const pinInputs = useRef([]);
  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  const handlePinChange = (text, index) => {
    const updated = [...pin];
    updated[index] = text;
    setPin(updated);

    if (text && index < 5) {
      const nextRef = pinInputs.current[index + 1];
      nextRef?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      const updated = [...pin];
      if (!updated[index]) {
        const prevRef = pinInputs.current[index - 1];
        prevRef?.focus();
      }
    }
  };

  return (
    <View className="py-1.5 mb-1">
      <View style={styles.otpContainer}>
        {pin.map((digit, index) => (
          <View key={index} style={styles.otpBoxWrapper}>
            <TextInput
              ref={(ref) => (pinInputs.current[index] = ref)}
              style={styles.otpBox}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
              value={digit}
              onChangeText={(text) => handlePinChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              selectionColor="#000000"
              secureTextEntry
              autoFocus
            />
            {!digit && <View style={styles.dashLine} />}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpBoxWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#00011B05",
  },
  dashLine: {
    width: 20,
    height: 2,
    backgroundColor: "#E9EBF0",
    position: "absolute",
    zIndex: 0,
  },
  otpBox: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#E9EBF0",
    borderRadius: 8,
    fontSize: 24,
    fontWeight: "500",
    backgroundColor: "transparent",
    zIndex: 1,
  },
});

export default Pin;
