import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
} from "react-native";
import Pin from "./Pin";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";

const Biometric = () => {
  const navigate = useNavigate();

  const [isPassword, setIsPassword] = useState(false);
  return (
    <SafeAreaView className="bg-background flex-1">
      <StatusBar barStyle="dark-content" />

      <View className="bg-background flex-1 flex-col justify-between items-center px-5 mt-10">
        <View className="flex-col items-center justify-center">
          <Text className="text-lg">Biometric Sign In</Text>
          <Text className="font-light text-sm">
            Sign in to continue to an awesome experience.
          </Text>
        </View>
        <View className="border-[0.2px]  p-3 rounded-full border-[#00011B1A]">
          <View className="border-[0.3px]  p-3 rounded-full border-[#00011B2A]">
            <View className="border-[0.4px] p-3 rounded-full border-[#00011B3A]">
              <View className="bg-[#00011B] rounded-full p-3">
                <Image source={Images.FingerPrint} className="w-20 h-20" />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigate("/login")}>
          <Text>Not Recognised? Login With Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Biometric;
