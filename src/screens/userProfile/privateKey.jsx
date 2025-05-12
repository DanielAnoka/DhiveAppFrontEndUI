import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Keyboard,
  TextInput
} from 'react-native';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images } from '../../constants/image';
import CustomButton from '../../components/Button';
import BottomModal from '../../components/BottomModal';

const PrivateKey = () => {
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);
  const pinInputs = useRef([]);
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleOrderPress = () => {
    setShowModal(true);
  };

  const handlePinChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      pinInputs.current[index + 1]?.focus();
    } else if (!value && index > 0) {
      pinInputs.current[index - 1]?.focus();
    }

    const updatedPin = newPin.join("");
    if (updatedPin.length === 4) {
      setTimeout(() => {
        if (updatedPin === "1111") {
          Keyboard.dismiss();
          setShowModal(false);
          navigate("/walletprivatekey");
        } else {
          Alert.alert("Invalid PIN", "The PIN you entered is incorrect.");
          setPin(["", "", "", ""]);
        }
      }, 200);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6 py-8">
      <View className="flex-row items-center justify-between h-14 mb-6 px-5">
        <TouchableOpacity
          onPress={handleBack}
          className="w-8 h-8 rounded-full border border-gray-300 justify-center items-center"
        >
          <Icon name="chevron-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text className="text-base font-medium text-[#00011B]">Secure Your Wallet</Text>
        <View className="w-8" />
      </View>

      <View className="flex-1 items-center justify-center">
        <Text className="text-sm font-normal leading-6 mt-4 mb-6 px-6 text-center">
          Your passphrase is the only way to recover your Dhive wallet. Without
          it, you could permanently lose access to your assets.
        </Text>

        <View className="items-center justify-center mt-20">
          <Image
            source={Images.Auth3}
            className="w-[370px] h-[380px]"
            resizeMode="contain"
          />
        </View>

        <CustomButton
          text="Show Secret Phrase"
          className="mt-auto w-[350px]"
          onPress={handleOrderPress}
        />
      </View>

      <BottomModal visible={showModal} onClose={() => setShowModal(false)}>
        <View className="px-4 py-1">
          <View className="w-16 h-16 rounded-full bg-[#F5F5F5] justify-center items-center self-center mb-2.5">
            <Image source={Images.PadLock} className="w-8 h-8" />
          </View>

          <View className="px-4">
            <Text className="text-lg font-semibold text-center">Input Payment Pin</Text>
            <Text className="text-sm text-gray-500 text-center">
              Use your PIN code to authorize this {"\n"}transaction
            </Text>
          </View>

          <View className="flex flex-row justify-center mb-20">
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (pinInputs.current[index] = ref)}
                className="w-7 h-7 rounded-full mx-1 text-center text-4xl text-[#444CE7] border border-[#444CE7] mb-10 mt-5"
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
      </BottomModal>
    </SafeAreaView>
  );
};

export default PrivateKey;
