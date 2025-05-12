import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BusinessFeeds() {
  const [showModal, setShowModal] = useState(true); 

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 pt-12 pb-4">
        <Text className="text-xl font-bold text-black">💠hive</Text>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Feeds Content */}
      <ScrollView className="flex-1 px-4">
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-900 mb-1">Wade Warren</Text>
          <Text className="text-xs text-gray-500 mb-2">This is really an amazing product</Text>
          <View className="flex-row items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full self-start mb-2">
            <Text className="text-xs font-medium text-gray-700">Next-Gen Electronics</Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-900 mb-1">Next-Gen Electronics</Text>
          <Image
            source={{ uri: 'https://i.imgur.com/5tj6S7Ol.jpg' }}
            className="w-full h-48 rounded-xl"
          />
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal visible={showModal} transparent animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/40">
          <View className="w-11/12 bg-white rounded-2xl p-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-base font-semibold text-black">Select Chain to Deploy</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Icon name="close" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Option 1 */}
            <TouchableOpacity className="flex-row items-start space-x-3 mb-4">
              <View className="mt-1">
                <View className="w-4 h-4 rounded-full border border-gray-400" />
              </View>
              <View>
                <Text className="text-sm font-medium text-black">ERC-20 Tokens (Ethereum Standard)</Text>
                <Text className="text-xs text-gray-500">Ethereum and EVM-compatible blockchains</Text>
              </View>
            </TouchableOpacity>

            {/* Option 2 */}
            <TouchableOpacity className="flex-row items-start space-x-3">
              <View className="mt-1">
                <View className="w-4 h-4 rounded-full border border-gray-400" />
              </View>
              <View>
                <Text className="text-sm font-medium text-black">SPL Tokens (Solana Standard)</Text>
                <Text className="text-xs text-gray-500">Token standard on Solana, kind of like ERC-20</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
