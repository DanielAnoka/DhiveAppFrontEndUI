import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../constants/icon';
import CustomButton from '../../components/Button';

const Step1 = ({ onContinue }) => {
    const [logo, setLogo] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const pickImage = (type) => {
        const dummyUri = 'https://via.placeholder.com/100'; // Replace with actual picker
        type === 'logo' ? setLogo(dummyUri) : setCoverImage(dummyUri);
    };

    const isStep1Valid = logo && coverImage;

    return (
        <View>



            <Text className="text-[14px] font-semibold mb-4">Shop Logo</Text>
            <View className="flex-row items-center justify-between w-full mb-6">

                <TouchableOpacity
                    onPress={() => pickImage('logo')}
                    className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center"
                >
                    {logo ? (
                        <Image source={{ uri: logo }} className="w-full h-full rounded-full" />
                    ) : (
                        <Image source={Icons.Hill2} className="w-5 h-5" />
                    )}
                </TouchableOpacity>

                {/* Upload Button */}
                <TouchableOpacity
                    onPress={() => pickImage('logo')}
                    className="bg-[#3B5FFF] px-4 py-2 rounded"
                >
                    <Text className="text-white text-[13px] font-medium rounded-2xl" >Upload Logo</Text>
                </TouchableOpacity>
            </View>



            <Text className="text-[14px] font-semibold mb-2">Shop cover image (Optional)</Text>
            <View className="w-full h-48 bg-gray-100 rounded-md items-center justify-center mb-6 px-4 py-6">
                <TouchableOpacity onPress={() => pickImage('cover')} className="items-center">
                    {coverImage ? (
                        <Image source={{ uri: coverImage }} className="w-full h-full rounded-md" />
                    ) : (
                        <>
                            <View className="w-10 h-10 rounded-full bg-white items-center justify-center mb-2">
                                <Image source={Icons.Hill2} className="w-5 h-5" />
                            </View>
                            <Text className="text-[13px] mb-3 text-black">Upload cover image</Text>
                            <View className="bg-[#3B5FFF] px-4 py-2 rounded">
                                <Text className="text-white text-[13px] font-medium">Upload from device</Text>
                            </View>
                        </>
                    )}
                </TouchableOpacity>
            </View>


            {/* Continue Button */}
            <TouchableOpacity
                disabled={!isStep1Valid}
                onPress={onContinue}
                className={`w-full h-[48px] mt-10 py-3 rounded-xl ${isStep1Valid ? 'bg-[#3B5FFF]' : 'bg-[#717680]'
                    }`}
            >
                <Text className="text-white text-center font-medium text-[15px]">Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Step1;
