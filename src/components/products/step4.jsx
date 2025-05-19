import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomModal from '../BottomModal';
import { Images } from '../../constants/image';
import { Icons } from '../../constants/icon';

const ImageCard = () => (
    <TouchableOpacity
        className="bg-white rounded-lg gap-2 mt-5 shadow-md justify-center items-center h-[197px] w-[50%]"
    >
        <View className="w-10 h-10 rounded-full bg-white items-center justify-center mb-2">
            <Image source={Icons.Hill2} className="w-5 h-5" />
        </View>
        <Text className="text-center mt-2">Click to add image/video</Text>
    </TouchableOpacity>
);

const Step4 = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const handleSubmit = () => {
        // console.log('Product added');
        setShowModal(true);
    };

    return (
        <View className="">
            <Text className="mb-4">
                Make sure you took good and clean images/videos that you can post alongside your product offering.
            </Text>
            <View className="flex flex-col gap-4 mb-4">
                <View className="flex flex-row justify-between gap-4">
                    <ImageCard />
                    <ImageCard />
                </View>
                <View className="flex flex-row justify-between gap-4">
                    <ImageCard />
                    <ImageCard />
                </View>
            </View>
            <TouchableOpacity
                className="w-full p-4 bg-[#444CE7] mt-[25%] rounded-lg"
                onPress={handleSubmit}
            >
                <Text className="text-white text-center font-semibold">Submit Product</Text>
            </TouchableOpacity>
            <BottomModal visible={showModal} onClose={closeModal}>
                <View className="items-center justify-center py-6">
                    <Image
                        source={Images.Success}
                        className="w-[70px] h-[70px] self-center mb-2.5"
                    />
                    <View className="items-center mt-5">
                        <Text className="text-center text-[#181D27] font-bold text-base mb-2">
                            Successful
                        </Text>

                        <Text className="text-center text-[#667085] text-base leading-6 mb-6">
                            You have successfully upload your physical product on Dhive’s Network
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={closeModal}
                        className="py-4 rounded-lg w-full bg-[#444CE7]"
                    >
                        <Text className="text-center text-white">Continue to Product Page</Text>
                    </TouchableOpacity>

                </View>
            </BottomModal>
        </View>
    );
};

export default Step4;
