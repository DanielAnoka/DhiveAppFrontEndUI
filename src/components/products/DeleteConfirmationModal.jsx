import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BottomModal from '../BottomModal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DeleteConfirmationModal({ visible, onClose, onConfirm }) {
  return (
    <BottomModal visible={visible} onClose={onClose} title="">
      <View className="items-center px-4 pb-4">
        <View className="w-12 h-12 rounded-full bg-red-100 justify-center items-center mb-3">
          <Icon name="trash-outline" size={24} color="#EF4444" />
        </View>
        <Text className="font-semibold text-base mb-1">Delete Product</Text>
        <Text className="text-center text-gray-500 mb-5">
          Are you sure you want to delete this product?
        </Text>
        <View className="flex-row justify-between w-full">
          <TouchableOpacity
            className="flex-1 mr-2 border border-gray-300 rounded-xl py-3 items-center"
            onPress={onClose}
          >
            <Text className="text-gray-700 font-medium">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 ml-2 bg-red-600 rounded-xl py-3 items-center"
            onPress={onConfirm}
          >
            <Text className="text-white font-medium">Delete Product</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomModal>
  );
}
