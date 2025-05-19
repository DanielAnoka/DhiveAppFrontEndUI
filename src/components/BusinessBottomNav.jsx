// components/BusinessBottomNav.js
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useLocation, useNavigate } from 'react-router-native';
import { Icons } from '../constants/icon';

const BusinessBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Feeds', icon: Icons.BlueFeed, path: '/business' },
    { label: 'Explore', icon: Icons.HomeTab, path: '/business/explore' },
    { label: 'More', icon: Icons.MoreTab, path: '/business/live' },
    { label: 'Businesses', icon: Icons.HomeTrend, path: '/business/insights' },
    { label: 'Assets', icon: Icons.Wallet3, path: '/business/assets' },
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
              <Image
                source={item.icon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: isActive ? '#3B5FFF' : '#6B7280',
                }}
                resizeMode="contain"
              />

              <Text
                className={`text-[11px] mt-1 ${isActive ? 'text-[#3B5FFF] font-medium' : 'text-gray-500'
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
