import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

const TokenCreationForm = () => {
  const [step, setStep] = useState(1);

  const [businessName, setBusinessName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [supplyChain, setSupplyChain] = useState('');
  const [cashBack, setCashBack] = useState('');

  const [businessType, setBusinessType] = useState('');
  const [businessRevenue, setBusinessRevenue] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1 bg-white">

        {/* Header */}
        <View className="flex-row items-center pt-5 px-5">
          <TouchableOpacity className="mr-2">
            <View className="w-[30px] h-[30px] rounded-full border border-black items-center justify-center">
              <Ionicons name="chevron-back" size={20} color="#000" />
            </View>
          </TouchableOpacity>

          <Text className="text-[18px] text-black font-semibold flex-1 text-center -ml-8">
            Token Details
          </Text>
        </View>

        {/* Step Indicators */}
        <View className="flex-row justify-start space-x-2 px-6 mb-4 mt-12">
          {[1, 2, 3].map((s) => (
            <View
              key={s}
              className={`w-[40px] h-[5px] rounded-[2.5px] ${step === s ? 'bg-[#000000]' : 'bg-[#E9EAEB]'}`}
            />
          ))}
        </View>

        {/* Description */}
        <View className="px-5">
          <Text className="text-[15px] font-semibold mb-1">
            Create New RWA Business Token (New Token)
          </Text>
          <Text className="text-[13px] text-gray-500 mb-6 leading-[18px]">
            Your business will be created and listed on drive exchange for trading
          </Text>
        </View>

        {/* Step Form */}
        <View className="px-5">
          {step === 1 && <Step1 onContinue={() => setStep(2)} />}
          {step === 2 && (
            <Step2
              businessName={businessName}
              setBusinessName={setBusinessName}
              tokenSymbol={tokenSymbol}
              setTokenSymbol={setTokenSymbol}
              supplyChain={supplyChain}
              setSupplyChain={setSupplyChain}
              cashBack={cashBack}
              setCashBack={setCashBack}
              onContinue={() => setStep(3)}
            />
          )}
          {step === 3 && (
            <Step3
              businessType={businessType}
              setBusinessType={setBusinessType}
              businessRevenue={businessRevenue}
              setBusinessRevenue={setBusinessRevenue}
              businessLocation={businessLocation}
              setBusinessLocation={setBusinessLocation}
              businessDescription={businessDescription}
              setBusinessDescription={setBusinessDescription}
            />
          )}
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default TokenCreationForm;
