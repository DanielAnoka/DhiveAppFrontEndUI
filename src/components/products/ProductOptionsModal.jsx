import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigate } from 'react-router-native'; 
import BottomModal from '../BottomModal';

const productOptions = [
  { label: 'Edit Product', icon: 'pencil-outline', color: '#E0E7FF', route: '/edit-product' },
  { label: 'Share Link', icon: 'share-social-outline', color: '#E0F2FE', route: '/share-link' },
  { label: 'View Analytics', icon: 'stats-chart-outline', color: '#E0F7FA', route: '/analytics' },
  { label: 'Duplicate Product', icon: 'copy-outline', color: '#EDE7F6', route: '/duplicate-product' },
  { label: 'Delete Product', icon: 'trash-outline', color: '#FFEBEE', danger: true },
];

export default function ProductOptionsModal({ visible, onClose, onDelete }) {
  const navigate = useNavigate(); 

  const handlePress = (item) => {
    if (item.danger) {
      onDelete(); 
    } else if (item.route) {
      
      navigate(item.route);  
    }
  };

  return (
    <BottomModal visible={visible} onClose={onClose} title="Product Options">
      <ScrollView>
        {productOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center justify-between px-4 py-2 mb-2"
            onPress={() => handlePress(item)}  // Trigger handlePress on option select
          >
            <View className="flex-row items-center space-x-4">
              <View
                style={{ backgroundColor: item.color }}
                className="w-10 h-10 rounded-full justify-center items-center"
              >
                <Icon name={item.icon} size={20} color={item.danger ? '#E53935' : '#1E40AF'} />
              </View>
              <Text className={`text-base ${item.danger ? 'text-red-600' : 'text-black'}`}>
                {item.label}
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#B0B0B0" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </BottomModal>
  );
}
