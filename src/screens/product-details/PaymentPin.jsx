import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { Icons } from "../../constants/icon";

const PaymentPin = ({ onComplete }) => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
      const updatedPin = newPin.join("");
      if (updatedPin.length === 4) {
        setTimeout(() => {
          if (updatedPin === "1111") {
            onComplete();
          } else {
            Alert.alert("Invalid PIN", "The PIN you entered is incorrect.");
            setPin(["", "", "", ""]);
            inputs.current[0].focus();
          }
        }, 200);
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      const newPin = [...pin];
      if (newPin[index]) {
        // Clear current
        newPin[index] = "";
        setPin(newPin);
      } else if (index > 0) {
        // Go back
        inputs.current[index - 1].focus();
        newPin[index - 1] = "";
        setPin(newPin);
      }
    }
  };
  const { height } = Dimensions.get("window");

  return (
    <View
      className="flex-col justify-center gap-y-5 items-center"
      style={{ height: 0.6 * height }}
    >
      <View className="p-5 bg-[#F5F5F5] rounded-full">
        <Image source={Icons.Lock2} className="w-10 h-10" />
      </View>
      <Text className="font-medium text-lg">Input Payment Pin</Text>
      <Text className="font-light text-center w-3/4 text-sm">
        Use your PIN code to authorize this transaction
      </Text>
      <View className="flex-row gap-x-2.5">
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[styles.input, digit ? styles.filled : null]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            secureTextEntry={true} // hides the digit visually
            caretHidden={true} // hides the blinking cursor
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 50,
    height: 500,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 20,
    height: 20,
    fontSize: 24,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "transparent", // hide typed text
  },
  filled: {
    backgroundColor: "#444CE7",
  },
});

export default PaymentPin;
