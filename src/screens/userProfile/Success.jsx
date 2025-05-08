import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Images } from '../../constants/image'
import React from 'react'
import { useNavigate } from 'react-router-native';
import CustomButton from '../../components/Button';

const Success = () => {
    const navigate = useNavigate()
    return (
        <SafeAreaView className="flex-1 justify-between items-center bg-white p-8">
            <View className="flex-1 justify-center items-center">
                <Image source={Images.Success} className="w-24 h-24 mb-6" />
                <Text className="text-2xl font-semibold text-center text-green-600">
                    Order Completed
                </Text>
                <Text className="text-lg text-center text-gray-500 mt-3">
                    You’ve successfully completed your order.
                </Text>
            </View>

            <CustomButton
                text="Done"
                onPress={() => navigate('/profile')}
                className="bg-[#5F6DFB] text-white px-12 py-3 w-[343px]" 
            />
        </SafeAreaView>
    )
}

export default Success;
