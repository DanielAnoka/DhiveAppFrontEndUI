import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigate } from "react-router-native";

const Passcode = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputs = useRef([]);
  const navigate = useNavigate();

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      otpInputs.current[index + 1].focus();
    }

    if (!text && index > 0) {
      otpInputs.current[index - 1].focus();
    }

    const joinedOtp = newOtp.join("");
    if (joinedOtp.length === 6 && joinedOtp === "111111") {
      setTimeout(() => {
        navigate("/profile");
      }, 200);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-lg font-medium text-[#00011B] mb-4">Enter Passcode</Text>
          <Text className="text-sm text-[#00011B] mb-8 text-center">
            Enter the confirmation code sent to your registered email. Kindly go to your email to complete this action.
          </Text>

          <View className="flex-row justify-between mb-6">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <View key={index} className="w-12 h-12 justify-center items-center border border-[#E9EBF0] rounded-md">
                <TextInput
                  ref={(ref) => (otpInputs.current[index] = ref)}
                  style={{ width: "100%", height: "100%", fontSize: 24, fontWeight: "500", textAlign: "center" }}
                  maxLength={1}
                  keyboardType="numeric"
                  value={otp[index]}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  secureTextEntry={true}
                  selectionColor="#000000"
                />
              </View>
            ))}
          </View>

          <Text className="text-center text-sm text-[#00011B] mb-4">Switch to Password</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Passcode;
