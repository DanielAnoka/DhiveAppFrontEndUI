import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { useNavigate } from 'react-router-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images } from '../../constants/image';
import CustomButton from '../../components/Button';

const privateKey = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

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

      <Text className="text-sm font-normal leading-6 mt-4 mb-6 px-6">
        Your passphrase is the only way to recover your Dhive wallet. Without
        it, you could permanently lose access to your assets.
      </Text>

      <View className="items-center justify-center mt-20 ">
        <Image
          source={Images.Auth3}
          className="w-[370px] h-[380px]"
          resizeMode="contain "
        />
      </View>

      <CustomButton text="Show Secret Phrase" className="mt-auto w-[350px] " />
</View>
    </SafeAreaView>
  );
};

export default privateKey;
