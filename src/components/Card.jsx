import React from 'react';
import { View } from 'react-native';

export const Card = ({ children, className }) => {
    return (
        <View className={`bg-white rounded-xl p-4  border border-gray-200 ${className || ''}`}>
            {children}
        </View>
    );
};