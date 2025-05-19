import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';
import { Images } from '../../constants/image';

const SectionItem = ({ icon, label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100"
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
);

export default function ProfileScreen() {
  const navigate = useNavigate();

  const generalItems = [
    { label: 'My Post', icon: 'document-text-outline', path: '/business/post' },
    { label: 'My Orders', icon: 'cart-outline', path: '/myorders' },
    { label: 'Manage Wallet', icon: 'wallet-outline', path: '/manageWallet' },
    { label: 'Transaction History', icon: 'time-outline', path: '/transaction' },
    { label: 'Notifications', icon: 'notifications-outline', path: '/notifications' },
    { label: 'Security', icon: 'lock-closed-outline', path: '/security' },
    { label: 'Preference', icon: 'settings-outline', path: '/preferences' },
  ]


  return (
    <SafeAreaView className="flex-1 bg-gray-50   ">
      {/* Header */}
      <View className="px-4 pt-6 pb-4 bg-white border-b border-gray-100">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-semibold">Profile</Text>
        </View>

        <TouchableOpacity className="flex-row items-center mt-4 space-x-4" onPress={() => navigate('/business/profile')}>
          <View
            className="flex-row items-center  space-x-4"

          >
            <Image
              source={Images.Avatar}
              className="w-12 h-12 rounded-full"
            />
          </View>
          <View className="flex-1">
            <Text className="text-base font-medium text-gray-900">Ponalise Favour</Text>
            <Text className="text-sm text-gray-600">ponalise@favour.store</Text>
          </View>
          <Icon name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

      </View>


      <ScrollView className="flex-1 ">

        <Text className="px-4 pt-2 pb-2 text-xs text-gray-500">General</Text>
        {generalItems.map((item, index) => (
          <SectionItem key={index} label={item.label} icon={item.icon} onPress={() => navigate(item.path)} />
        ))}

        {/* Others Section */}
        <Text className="px-4 pt-2 pb-2 text-xs text-gray-500">Others</Text>
        {[
          { label: 'Docs', icon: 'book-outline', path: '/doc' },
          { label: 'Feedback', icon: 'chatbubble-ellipses-outline' },
          { label: 'Join our community', icon: 'people-outline', path: '/community' },

        ].map((item, index) => (
          <SectionItem key={index} label={item.label} icon={item.icon} onPress={() => navigate(item.path)} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
