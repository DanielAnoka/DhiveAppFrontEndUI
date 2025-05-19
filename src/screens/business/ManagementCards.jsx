import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BottomModal from '../../components/BottomModal'; // Adjust the path if needed
import Icon from 'react-native-vector-icons/Feather';

const options = [
  {
    id: 'bridge',
    title: 'Bridge Trading',
    subtitle: 'Bridge from one token to another.',
  },
  {
    id: 'swap',
    title: 'Swap',
    subtitle: 'Swap from one token to another.',
  },
];

const ManagementCards = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  const onSelectOption = (id) => {
    // console.log('Selected Option:', id);
    closeModal();
  };

  return (
    <View className="mt-10 space-y-4">
      {/* Token Management Card */}
      <View className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <Text className="text-base font-semibold text-gray-900 mb-3">
          Token Management
        </Text>
        <View className="flex-row space-x-3">
          <Pressable
            className="bg-purple-100 px-4 py-2 rounded-full"
            onPress={() => setActiveModal('supply')}
          >
            <Text className="text-purple-700 font-medium">View Supply →</Text>
          </Pressable>
          <Pressable
            className="bg-green-100 px-4 py-2 rounded-full"
            onPress={() => setActiveModal('supply')}
          >
            <Text className="text-green-700 font-medium">Mint Token →</Text>
          </Pressable>
        </View>
      </View>

      {/* Order Management Card */}
      <View className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <Text className="text-base font-semibold text-gray-900 mb-3">
          Order Management
        </Text>
        <View className="flex-row space-x-3">
          <Pressable
            className="bg-purple-100 px-4 py-2 rounded-full"
            onPress={() => setActiveModal('supply')}
          >
            <Text className="text-purple-700 font-medium">Incoming Orders →</Text>
          </Pressable>
          <Pressable
            className="bg-green-100 px-4 py-2 rounded-full"
            onPress={() => setActiveModal('supply')}
          >
            <Text className="text-green-700 font-medium">Shipping Status →</Text>
          </Pressable>
        </View>
      </View>

      {/* Single Bottom Modal */}
      <BottomModal
        visible={activeModal === 'supply'}
        onClose={closeModal}
        title="Select  Option"

      >
        {options.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex-row items-center py-4 border-b border-gray-200 p-5"
            onPress={() => onSelectOption(item.id)}
            activeOpacity={0.7}
          >
            <View className="w-8 h-8 rounded-full bg-indigo-600 items-center justify-center mr-3">
              <Icon name="activity" size={16} color="#fff" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold">{item.title}</Text>
              <Text className="text-xs text-gray-500">{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </BottomModal>
    </View>
  );
};

export default ManagementCards;
