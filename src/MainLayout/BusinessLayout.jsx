import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import BusinessBottomNav from '../components/BusinessBottomNav';

const BusinessLayout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
      <BusinessBottomNav />
    </SafeAreaView>
  );
};

export default BusinessLayout;
