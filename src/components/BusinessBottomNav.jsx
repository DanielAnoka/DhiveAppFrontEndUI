// components/BusinessBottomNav.js
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useLocation, useNavigate } from 'react-router-native';

const BusinessBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Feeds', icon: 'menu-outline', path: '/business' },
    { label: 'Explore', icon: 'storefront-outline', path: '/business/explore' },
    { label: 'More', icon: 'add-circle-outline', path: '/business/more' },
    { label: 'Businesses', icon: 'trending-up-outline', path: '/business/insights' },
    { label: 'Assets', icon: 'wallet-outline', path: '/business/assets' },
  ];

  return (
    <SafeAreaView className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <View className="flex-row justify-around py-1.5">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigate(item.path)}
              className="items-center justify-center"
            >
              <Icon
                name={item.icon}
                size={20}
                color={isActive ? '#3B5FFF' : '#6B7280'}
              />
              <Text
                className={`text-[11px] mt-0.5 ${
                  isActive ? 'text-[#3B5FFF] font-medium' : 'text-gray-500'
                }`}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BusinessBottomNav;
