import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigate } from "react-router-native";
import { Images } from "../constants";
import StepOneLayout from "./StepOneLayout";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const otpInputs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResendCode = () => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      console.log("Resending OTP code...");
    }
  };

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      otpInputs.current[index + 1].focus();
    }

    if (!text && index > 0) {
      otpInputs.current[index - 1].focus();
    }

    const joinedOtp = newOtp.join("");
    if (joinedOtp.length === 4 && joinedOtp === "1111") {
      setTimeout(() => {
        navigate("/next"); // 🔁 Replace with your next screen route
      }, 200);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <StepOneLayout currentStep={1} steps={[1, 2, 3, 4]}>
          <View style={{ flex: 1 }}>
            <View style={styles.spacer} />

            <Text style={styles.label}>Enter OTP Code</Text>
            <Text style={styles.text}>
              Enter the confirmation code sent to your registered email. Kindly
              go to your email to complete this action.
            </Text>

            <View style={styles.otpContainer}>
              {[0, 1, 2, 3].map((index) => (
                <View key={index} style={styles.otpBoxWrapper}>
                  <TextInput
                    ref={(ref) => (otpInputs.current[index] = ref)}
                    style={styles.otpBox}
                    maxLength={1}
                    keyboardType="numeric"
                    textAlign="center"
                    value={otp[index]}
                    onChangeText={(text) => handleOtpChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    selectionColor="#000000"
                    secureTextEntry={true} // 👈 Hides the digit
                  />
                  {!otp[index] && <View style={styles.dashLine} />}
                </View>
              ))}
            </View>

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't get the code? </Text>
              <TouchableOpacity
                onPress={handleResendCode}
                disabled={!canResend}
              >
                <Text
                  style={[
                    styles.resendButton,
                    canResend ? styles.resendActive : styles.resendDisabled,
                  ]}
                >
                  Resend code {!canResend && `(${formatTime(timer)})`}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={Images.Auth}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
        </StepOneLayout>
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
  },
  otpBoxWrapper: {
    width: 60,
    height: 60,
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
    backgroundColor: "transparent",
    zIndex: 1,
  },
  dashLine: {
    width: 20,
    height: 2,
    backgroundColor: "#E9EBF0",
    position: "absolute",
    zIndex: 0,
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  resendText: {
    fontSize: 14,
    color: "#00011B",
  },
  resendButton: {
    fontSize: 14,
    fontWeight: "500",
  },
  resendActive: {
    color: "#000000",
    textDecorationLine: "none",
  },
  resendDisabled: {
    color: "#A0A3BD",
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

export default OTPVerification;
