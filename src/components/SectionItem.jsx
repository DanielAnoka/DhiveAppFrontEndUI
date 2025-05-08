import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const SectionItem = ({ icon, label, onPress }) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-between px-7 py-3 border-b border-gray-100"
      >
        <View className="flex-row items-center space-x-3">
          <View
            className="w-8 h-8 rounded-full items-center justify-center"
            style={{ backgroundColor: '#EEF4FF' }}
          >
            <Icon name={icon} size={18} color="#5F6DFB" />
          </View>
          <Text className="text-sm text-gray-800">{label}</Text>
        </View>
        <Icon name="chevron-forward" size={18} color="#999" />
      </TouchableOpacity>
  )
}

export default SectionItem