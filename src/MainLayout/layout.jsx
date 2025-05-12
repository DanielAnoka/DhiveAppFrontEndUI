// MainLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../components/BottomNav'; 

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;
