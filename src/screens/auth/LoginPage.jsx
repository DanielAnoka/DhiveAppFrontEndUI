import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import Pin from "./Pin";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isPassword, setIsPassword] = useState(false);
  return (
    <SafeAreaView className="bg-background flex-1">
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="bg-background flex-1 px-5 mt-10">
          <Text className="mb-2 font-medium">
            {!isPassword ? "Enter Passcode" : "Password"}
          </Text>
          {isPassword ? (
            <View className="border w-full border-[#F1F1F1] bg-white rounded-lg flex-row justify-between items-center px-3">
              <TextInput
                className="flex-1 py-4 text-xl bg-transparent"
                placeholderTextColor={"#717680"}
                secureTextEntry={true}
                autoFocus
              />

              <Ionicons name="eye-outline" size={25} />
            </View>
          ) : (
            <Pin />
          )}

          <TouchableOpacity
            className="pt-2"
            onPress={() => setIsPassword((prev) => !prev)}
          >
            <Text className="text-primary">
              {!isPassword ? "Switch to Password" : "Switch to Passcode"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate("/biometric")}
            className="py-4 mb-3 w-full justify-center flex-row items-center space-x-2 mt-10"
          >
            <Text className="text-[#000]">Sign In with biometrics</Text>

            <View className="p-1 rounded-full border  border-[#000]">
              <MaterialIcons name="arrow-right-alt" color={"#000"} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginPage;
