import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Keyboard, TouchableWithoutFeedback  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/Button';
import BottomModal from '../../components/BottomModal';
import { Images } from '../../constants/image'

const Step3Component = ({
    businessType,
    setBusinessType,
    businessRevenue,
    setBusinessRevenue,
    businessLocation,
    setBusinessLocation,
    businessDescription,
    setBusinessDescription
}) => {
    const [showBusinessTypeList, setShowBusinessTypeList] = useState(false);
    const [showRevenueList, setShowRevenueList] = useState(false);
    const [showLocationList, setShowLocationList] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const businessTypes = ['Retail', 'Wholesale', 'Service', 'Manufacturing'];
    const revenueOptions = ['Under $500K', '$500K - $1M', '$1M - $5M', 'Over $5M'];
    const locations = ['New York', 'California', 'Texas', 'Florida'];

    const renderSelectableList = (data, selected, onSelect) => (

        <FlatList
            data={data}
            keyExtractor={(item) => item}
            className="mt-1 mb-3 bg-white rounded-xl overflow-hidden"
            renderItem={({ item }) => (
                <TouchableOpacity
                    className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100"
                    onPress={() => onSelect(item)}
                >
                    <Text className="text-sm text-gray-900">{item}</Text>
                    {item === selected && <Icon name="checkmark" size={18} color="#444CE7" />}
                </TouchableOpacity>
            )}
        />
    );

    return (
        <>
            <View className=" ">

                {/* Business Type Dropdown */}
                <View className="mb-6">
                    <Text className="text-sm mb-2">Business Type</Text>
                    <TouchableOpacity
                        className="flex-row justify-between items-center border h-12 border-gray-300 rounded-md px-2"
                        onPress={() => setShowBusinessTypeList(!showBusinessTypeList)}
                    >
                        <Text className="text-sm text-gray-900">{businessType || "Select Business Type"}</Text>
                        <Icon name={showBusinessTypeList ? "chevron-up" : "chevron-down"} size={16} color="#999" />
                    </TouchableOpacity>
                    {showBusinessTypeList &&
                        renderSelectableList(businessTypes, businessType, (val) => {
                            setBusinessType(val);
                            setShowBusinessTypeList(false);
                        })}
                </View>

                {/* Business Revenue Dropdown */}
                <View className="mb-6">
                    <Text className="text-sm mb-2">Business Revenue</Text>
                    <TouchableOpacity
                        className="flex-row justify-between items-center border h-12 border-gray-300 rounded-md px-2"
                        onPress={() => setShowRevenueList(!showRevenueList)}
                    >
                        <Text className="text-sm text-gray-900">{businessRevenue || "Select Business Revenue"}</Text>
                        <Icon name={showRevenueList ? "chevron-up" : "chevron-down"} size={16} color="#999" />
                    </TouchableOpacity>
                    {showRevenueList &&
                        renderSelectableList(revenueOptions, businessRevenue, (val) => {
                            setBusinessRevenue(val);
                            setShowRevenueList(false);
                        })}
                </View>

                {/* Business Location Dropdown */}
                <View className="mb-6">
                    <Text className="text-sm mb-2">Business Location</Text>
                    <TouchableOpacity
                        className="flex-row justify-between items-center border h-12 border-gray-300 rounded-md px-2"
                        onPress={() => setShowLocationList(!showLocationList)}
                    >
                        <Text className="text-sm text-gray-900">{businessLocation || "Select Business Location"}</Text>
                        <Icon name={showLocationList ? "chevron-up" : "chevron-down"} size={16} color="#999" />
                    </TouchableOpacity>
                    {showLocationList &&
                        renderSelectableList(locations, businessLocation, (val) => {
                            setBusinessLocation(val);
                            setShowLocationList(false);
                        })}
                </View>

                {/* Business Description Text Area */}
                <View className="mb-6">
                    <Text className="text-sm mb-2">Business Description</Text>
                    <TextInput
                        value={businessDescription}
                        onChangeText={setBusinessDescription}
                        multiline
                        numberOfLines={4}
                        className="h-32 border border-gray-300 rounded-md p-3 text-sm"
                        placeholder="Enter your business description"
                    />
                </View>

                <CustomButton
                    text='Continue'
                    className='bg-[#444CE7] h-[48px] mt-16'
                    onPress={() => setShowModal(true)}
                />

            </View>

            <BottomModal visible={showModal} onClose={() => setShowModal(false)}>
                <View className="p-6 justify-center items-center">
                    <Image source={Images.Success} className="w-24 h-24 mb-6" />
                    <Text className="text-2xl font-semibold text-center ">
                       Successful
                    </Text>
                    <Text className="text-base text-center text-gray-500 mt-3 mb-6">
                       Your business token has been created successfully. 
                    </Text>

                    <CustomButton
                        text="Continue to Business Page"
                        onPress={() => setShowModal(false)}
                        className="bg-[#5F6DFB] text-white px-12 py-3 w-[343px]"
                    />
                </View>
            </BottomModal>

        </>
    );
};

export default Step3Component;
