import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Icons } from '../../constants/icon';

const statusStyles = {
  Received: {
    textColor: '#3538CD',
    bgColor: '#C7D7FE',
    borderColor: '#3538CD',
  },
  Processing: {
    textColor: '#B93815',
    bgColor: '#F9DBAF',
    borderColor: '#B93815',
  },
  Completed: {
    textColor: '#067647',
    bgColor: '#ABEFC6',
    borderColor: '#067647',
  },
  Shipped: {
    textColor: '#067647',
    bgColor: '#ABEFC6',
    borderColor: '#067647',
  },
};

const TransactionItem = ({ transactionId, name, amount, status }) => {
  const navigate = useNavigate();
  const currentStatus = statusStyles[status] || statusStyles['Received'];

  const handlePress = () => {
    navigate(`/transactions/${transactionId}`);
  };

  return (
    <Pressable onPress={handlePress}>
      <View className="flex-row items-center justify-between px-4 py-3 bg-white rounded-xl">
        <View className="flex-row items-center space-x-3">
          <View className="w-8 h-8 rounded-full bg-blue-100 items-center justify-center">
            <Image source={Icons.Bagtick} />
          </View>
          <View>
            <Text className="text-xs text-gray-500">#{transactionId}</Text>
            <Text className="text-sm font-semibold text-black">{name}</Text>
          </View>
        </View>

        <View className="items-end space-y-1">
          <Text className="text-sm font-bold text-[#535862]">{amount}</Text>
          <View
            style={{
              backgroundColor: currentStatus.bgColor,
              borderColor: currentStatus.borderColor,
              borderWidth: 1,
              borderRadius: 999,
              paddingHorizontal: 8,
              paddingVertical: 2,
            }}
          >
            <Text style={{ fontSize: 12, color: currentStatus.textColor }}>{status}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default TransactionItem;
